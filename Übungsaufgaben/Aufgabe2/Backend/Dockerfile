# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . /app/Backend
RUN yarn install --production
RUN npm install express
CMD ["node", "./Backend/index.js"]
EXPOSE 2000
