### STAGE 1: Build ###
FROM node:16-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm build

### STAGE 2: Apache ###
FROM httpd:alpine
RUN rm -r /usr/local/apache2/htdocs/*
COPY --from=build ./usr/src/app/dist/delgaudiomike/ /usr/local/apache2/htdocs/
COPY ./conf/httpd.conf /usr/local/apache2/conf/httpd.conf