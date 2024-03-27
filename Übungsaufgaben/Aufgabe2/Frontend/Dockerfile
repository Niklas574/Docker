# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . /app/Frontend
RUN yarn install --production
RUN npm install express
CMD ["node", "./Frontend/index.js"]
EXPOSE 3000
