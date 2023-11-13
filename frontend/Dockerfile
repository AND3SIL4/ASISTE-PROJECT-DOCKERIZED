# Dockerfile para el frontend

FROM node:18

# Instalar Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.17 && \
    ln -s /root/.yarn/bin/yarn /usr/local/bin/yarn && \
    ln -s /root/.yarn/bin/yarnpkg /usr/local/bin/yarnpkg

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración de npm y Yarn
COPY package.json .
COPY yarn.lock .

# Limpiar la caché de npm
RUN npm cache clean --force

# Instalar las dependencias locales y Angular CLI
RUN yarn install
RUN yarn global add @angular/cli

RUN yarn upgrade
RUN ng version

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto 4200
EXPOSE 4200

# Comando por defecto al iniciar el contenedor
CMD ["ng", "serve"]
