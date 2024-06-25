FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm ci install

RUN npm run build

EXPOSE 4200

CMD ["npm", "start"]
