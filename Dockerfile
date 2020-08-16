### STAGE 1: Build ###
FROM node:12-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli@latest
RUN npm install
RUN ng build --prod

### STAGE 2: Apache ###
FROM httpd:alpine
RUN rm -r /usr/local/apache2/htdocs/*
COPY --from=build ./usr/src/app/dist/delgaudiomike/ /usr/local/apache2/htdocs/
COPY ./conf/httpd.conf /usr/local/apache2/conf/httpd.conf