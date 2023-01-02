NAME	=	inception

all:	prune reload

linux:
	@ echo "127.0.0.1 ashitomi.42.fr" >> /etc/hosts

stop:
	@ docker-compose -f srcs/docker-compose.yml down

clean:	stop
	@ sudo rm -rf ~/Desktop/inception

prune:	clean
	@ docker system prune -f

reload:
	@ docker-compose -f srcs/docker-compose.yml up --build -d

.PHONY: linux stop clean prune reload all