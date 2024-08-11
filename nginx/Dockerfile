FROM nginx:1.25.0-alpine AS production
COPY default.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]