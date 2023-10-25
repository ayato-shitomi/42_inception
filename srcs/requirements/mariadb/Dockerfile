FROM    alpine:3.18.3

RUN     apk update && apk upgrade && apk add --no-cache \
		mariadb \
		mariadb-client \
		mariadb-common && \
		rm -rf /var/cache/apk/*

COPY	docker-entrypoint.sh /usr/local/bin/
RUN		chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD		[ "/usr/bin/mysqld", "--user=mysql", "--console" ]