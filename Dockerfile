### STAGE 1: Build ###
FROM node:12-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn build

### STAGE 2: Apache ###
FROM httpd:alpine
RUN rm -r /usr/local/apache2/htdocs/*
COPY --from=build ./usr/src/app/dist/delgaudiomike/ /usr/local/apache2/htdocs/
COPY ./conf/httpd.conf /usr/local/apache2/conf/httpd.conf