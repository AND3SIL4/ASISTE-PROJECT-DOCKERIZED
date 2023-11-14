# Dockerfile para la construccion del contenedor backend
FROM python:3.11

ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Copia los archivos y requerimientos necesarios
COPY requirements.txt /app/requirements.txt

# Crea y activa el entorno virtual con venv
# RUN python -m venv virt
# ENV PATH="/app/virt/bin:$PATH"
# RUN . /app/virt/bin/activate

# Instala las dependencias en el entorno virtual
# RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copia el resto de la aplicación
COPY . /app

# Comando para ejecutar la aplicación
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
