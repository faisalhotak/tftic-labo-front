FROM node:20.13.1-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:1.27.0-alpine AS deploy

COPY --from=build /app/dist/tftic-labo-front /usr/share/nginx/html

EXPOSE 80
