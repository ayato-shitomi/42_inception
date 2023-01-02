FROM	alpine:3.17

RUN		apk update && apk upgrade && apk add --no-cache \
			openssl nginx

RUN		mkdir /etc/nginx/ssl
RUN		openssl req -x509 -nodes -days 365 -newkey rsa:2048 -sha256 \
			-keyout /etc/nginx/ssl/openssl.key \
			-out /etc/nginx/ssl/openssl.crt \
			-subj "/C=JP/ST=Tokyo/L=Minato/O=ecole42/CN=ashitomi.42.jp/"

RUN 	mkdir -p /run/nginx
COPY	./conf/nginx.conf /etc/nginx/nginx.conf
CMD		["nginx", "-g", "daemon off;"]