FROM alpine:3.14

USER root

RUN apk update && apk add nodejs nodejs-dev yarn

WORKDIR /var/www/html

COPY . /var/www/html/

RUN yarn install

RUN yarn build

ENTRYPOINT ["/bin/sh", "-c", "yarn start"]