FROM node:16 as base

WORKDIR /src
EXPOSE 8080

## PRODUCTION
FROM base as production

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build:css

CMD [ "node", "server.js" ]

## DEVELOPMENT
FROM base as dev

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:css

CMD [ "nodemon", "server.js" ]