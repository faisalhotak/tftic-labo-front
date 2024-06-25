FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build

EXPOSE 4200

CMD ["npm", "run", "start", "--host", "tftic-labo-front"]
