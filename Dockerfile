
FROM node:20-alpine AS build

WORKDIR /app

# Update npm to try to resolve the dependency-tree error
RUN npm install -g npm@11.6.0

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
