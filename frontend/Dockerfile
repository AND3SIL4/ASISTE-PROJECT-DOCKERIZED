# Dockerfile para el frontend

FROM node:18

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 4200
CMD ["yarn", "start"]
