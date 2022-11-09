FROM node:18-slim
WORKDIR /app
COPY /app/package*.json ./
RUN yarn install