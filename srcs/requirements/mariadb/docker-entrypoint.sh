#!/bin/sh
touch /var/log/mariadb.log
if [ -d "/run/mysql" ]; then
	echo "mysql already present, skipping creation" >> /var/log/mariadb.log
	chown -R mysql:mysql /run/mysqld
else
	echo "mysql not found, creating..." >> /var/log/mariadb.log
	mkdir -p /run/mysqld
	chown -R mysql:mysql /run/mysqld
fi

if [ -d /var/lib/mysql/mysql ]; then
	echo "mysql directory already present, skipping creation" >> /var/log/mariadb.log
	chown -R mysql:mysql /var/lib/mysql
else
	echo "mysql data directory not found, creating initial DBs" >> /var/log/mariadb.log
	chown -R mysql /var/lib/mysql
	mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql --rpm > /dev/null

	tfile=`mktemp`
	if [ ! -f "$tfile" ]; then
		return 1
	fi

	cat << EOF > $tfile
USE mysql ;
FLUSH PRIVILEGES ;
DROP DATABASE IF EXISTS test ;
GRANT ALL ON *.* TO 'root'@'%' identified by '$MYSQL_ROOT_PASSWORD' WITH GRANT OPTION ;
GRANT ALL ON *.* TO 'root'@'localhost' identified by '$MYSQL_ROOT_PASSWORD' WITH GRANT OPTION ;
SET PASSWORD FOR 'root'@'localhost'=PASSWORD('${MYSQL_ROOT_PASSWORD}') ;
SET PASSWORD FOR 'root'@'%'=PASSWORD('${MYSQL_ROOT_PASSWORD}') ;
FLUSH PRIVILEGES ;
CREATE DATABASE IF NOT EXISTS $WP_DB_NAME CHARACTER SET utf8 COLLATE utf8_general_ci ;
CREATE USER '$WP_DB_USER'@'localhost' IDENTIFIED BY '$WP_DB_PASSWORD';
CREATE USER '$WP_DB_USER'@'%' IDENTIFIED BY '$WP_DB_PASSWORD';
GRANT ALL PRIVILEGES ON *.* TO '$WP_DB_USER'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO '$WP_DB_USER'@'%';
FLUSH PRIVILEGES ;
EOF

	/usr/bin/mysqld --user=mysql --bootstrap < $tfile
	echo "mysql init process done. Ready for start up." >> /var/log/mariadb.log
fi

sed -i "s|.*skip-networking.*|# skip-networking|g" /etc/my.cnf.d/mariadb-server.cnf
sed -i "s|.*bind-address\s*=.*|bind-address=0.0.0.0|g" /etc/my.cnf.d/mariadb-server.cnf
echo "allowed remote connection" >> /var/log/mariadb.log

exec "$@"