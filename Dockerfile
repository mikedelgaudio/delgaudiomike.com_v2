### STAGE 1: Build ###
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN node_modules/.bin/ng build --configuration production

### STAGE 2: NGINX ###
FROM nginx:1.23 as production
WORKDIR /app
RUN chown -R nginx:nginx /app && chmod -R 755 /app && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid
## switch to non-root user
USER nginx
COPY --from=build /app/dist/delgaudiomike/browser/ /usr/share/nginx/html
COPY /conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]