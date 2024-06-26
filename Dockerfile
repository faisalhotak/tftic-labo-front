FROM node:20.13.1-alpine AS build

WORKDIR /app

ARG PROFILE=prod

RUN npm cache clean --force

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:latest AS deploy

COPY --from=build /app/dist/tftic-labo-front/browser /usr/share/nginx/html

COPY /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
