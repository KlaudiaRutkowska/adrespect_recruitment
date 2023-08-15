FROM node:16

WORKDIR /node

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:css

EXPOSE 8080
CMD [ "node", "server.js" ]