FROM wordpress:latest

COPY ./php/php.ini /usr/local/etc/php/conf.d
COPY ./pluginlist.txt /tmp/pluginlist.txt

# ローカルファイルのテーマ・プラグインをインストールする場合
# COPY './themes/*.zip' /usr/src/wordpress/wp-content/themes
# COPY './plugins/*.zip' /usr/src/wordpress/wp-content/plugins

# 必要なツール郡をインストール
RUN apt-get update
RUN apt-get -y install wget unzip

RUN apt-get install -y zlib1g-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install zip
RUN a2enmod rewrite

# WP プラグイン (zip) ダウンロード
WORKDIR /tmp/wp-plugins
RUN wget -i /tmp/pluginlist.txt

# Zip ファイルを解凍してインストール
WORKDIR /usr/src/wordpress/wp-content/plugins
RUN unzip '*.zip'
# WORKDIR /usr/src/wordpress/wp-content/themes
# UN unzip '*.zip'

# 不要になった一時ファイルを削除
RUN apt-get clean
RUN rm -rf /tmp/*

# サーバが読めるように wp-content 以下の所有者を変更
RUN chown -R www-data:www-data /usr/src/wordpress/wp-content

WORKDIR /var/www/html
