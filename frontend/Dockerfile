FROM node:18 AS build
WORKDIR /app
EXPOSE 80
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25.0-alpine AS production
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]