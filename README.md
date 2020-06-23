# How to use

## ① Copy .env from .env.example

### .env
```
PROJECT_NAME=project
THEME_NAME=theme

WORDPRESS_DB_NAME=wordpress
WORDPRESS_DB_USER=wordpress
WORDPRESS_DB_PASSWORD=wordpress

MYSQL_RANDOM_ROOT_PASSWORD=yes
MYSQL_DATABASE=wordpress
MYSQL_USER=wordpress
MYSQL_PASSWORD=wordpress
```

## ②Write Project name & Theme name

```
PROJECT_NAME=project
THEME_NAME=theme
```

It is need to write for to build Docker.

You cannot write same `PROJECT_NAME` in localhost.

### Option
```
WORDPRESS_DB_NAME=wordpress
WORDPRESS_DB_USER=wordpress
WORDPRESS_DB_PASSWORD=wordpress

MYSQL_RANDOM_ROOT_PASSWORD=yes
MYSQL_DATABASE=wordpress
MYSQL_USER=wordpress
MYSQL_PASSWORD=wordpress
```
