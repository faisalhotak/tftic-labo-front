FROM node:20.13.1-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.27.0-alpine AS deploy

COPY --from=build /app/dist/tftic-labo-front /usr/share/nginx/html
