# Docker file para la construccion del cotenedor backend
FROM python:3.11

WORKDIR /app

# Copea los archivos y requerimientos necesarios
COPY requirements.txt requirements.txt

# Creacion y activacion de entorno virtual con venv
RUN python -m venv virt
ENV PATH="app/virt/bin/$PATH"
RUN pip install --upgrade pip

# Instala las dependencias en el entorno virtual
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto de la aplicacion 
COPY . . 

EXPOSE 8000
