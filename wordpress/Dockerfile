FROM wordpress:latest

COPY ./php/php.ini /usr/local/etc/php/conf.d
COPY ./pluginlist.txt /tmp/pluginlist.txt

# 必要なツール郡をインストール
RUN apt-get update
RUN apt-get -y install wget unzip

RUN apt-get install -y zlib1g-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install zip
RUN a2enmod rewrite

# WP プラグイン (zip) ダウンロード
WORKDIR /tmp/wp-plugins
# ローカルファイルのプラグインをインストールする場合
# COPY './plugins/*.zip' ./
RUN wget -i /tmp/pluginlist.txt

# Zip ファイルを解凍してインストール
RUN unzip '*.zip' -d /usr/src/wordpress/wp-content/plugins

WORKDIR /tmp/wp-themes
# ローカルファイルのテーマをインストールする場合
# COPY './themes/*.zip' ./
# RUN unzip '*.zip' -d /usr/src/wordpress/wp-content/themes

# 不要になった一時ファイルを削除
RUN apt-get clean
RUN rm -rf /tmp/*

# サーバが読めるように wp-content 以下の所有者を変更
RUN chown -R www-data:www-data /usr/src/wordpress/wp-content

WORKDIR /var/www/html
