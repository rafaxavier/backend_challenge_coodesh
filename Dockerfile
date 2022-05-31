FROM node:14.15.4-alpine3.12

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]

EXPOSE 3000
