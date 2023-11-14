# Dockerfile para el frontend

FROM node:18

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.17 && \
    ln -s /root/.yarn/bin/yarn /usr/local/bin/yarn && \
    ln -s /root/.yarn/bin/yarnpkg /usr/local/bin/yarnpkg

RUN npm cache clean --force

RUN yarn global add @angular/cli
# RUN npm install @angular/cli

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 4200
CMD ["ng", "s"]
