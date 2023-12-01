# Proyecto de Automatización para el Centro Formativo del SENA (Año 2023)

Este proyecto consta de un backend construido en Django y un frontend desarrollado en Angular 16 para automatizar el proceso de llamado a asistencia, registro de novedades y generación de reportes en un centro formativo del SENA en Bogotá, Colombia, durante el año 2023. El despliegue se realiza mediante Docker y Docker Compose para facilitar la gestión de contenedores.

## Tabla de Contenidos

1. [Descripción](#descripcion)
2. [Características](#caracteristicas)
3. [Tecnologías Utilizadas](#tecnologias-utilizadas)
4. [Configuración del Entorno de Desarrollo](#configuracion-del-entorno-de-desarrollo)
5. [Instalación y Configuración con Docker](#instalacion-y-configuracion-con-docker)
6. [Uso](#uso)
7. [Contribución](#contribucion)
8. [Contacto](#contacto)
9. [Licencia](#licencia)

## Descripción <a name="descripcion"></a>

El objetivo de este proyecto es automatizar el proceso de llamado a asistencia, registro de novedades y generación de reportes en un centro formativo del SENA en Bogotá, Colombia, con el fin de mejorar la eficiencia en la gestión de información y optimizar los procesos internos.

## Características <a name="caracteristicas"></a>

- **Llamado a Asistencia**: Permite registrar la asistencia de estudiantes y docentes de manera automatizada.
- **Registro de Novedades**: Facilita el registro de novedades y situaciones especiales en tiempo real.
- **Generación de Reportes**: Permite generar reportes detallados sobre asistencia y novedades para análisis.

## Tecnologías Utilizadas <a name="tecnologias-utilizadas"></a>

- Backend:
  - Django
  - Django REST Framework
  - MySQL
  - Python
  - Git

- Frontend:
  - Angular 16
  - TypeScript
  - Angular CLI
  - SCSS
  - Git

## Configuración del Entorno de Desarrollo <a name="configuracion-del-entorno-de-desarrollo"></a>

Para configurar el entorno de desarrollo, se requiere tener Python, pip, Node.js y Angular CLI instalados. Se recomienda utilizar un entorno virtual para gestionar las dependencias.

### Backend

```bash
# Clonar el repositorio
git clone <URL_BACKEND>

# Navegar al directorio del backend
cd backend

# Crear un entorno virtual
virtualenv virt

# Activar el entorno virtual
source virt/bin/activate # En Windows, use .\virt\Scripts\activate

# Instalar las dependencias
pip install -r requirements.txt

# Configurar el archivo settings.py en el root del proyecto
# Actualizar parámetros para conexión con la base de datos (user, password, host, port)

# Crear migraciones
python manage.py makemigrations

# Migrar estructura a la base de datos
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Ejecutar el servidor backend
python manage.py runserver 0:8080 # Utilice el puerto de su preferencia
```

## Frontend
```
# Clonar el repositorio
git clone <URL_FRONTEND>

# Navegar al directorio del frontend
cd frontend

# Instalar las dependencias
npm install
```

## Instalación y Configuración con Docker <a name="instalacion-y-configuracion-con-docker"></a>

```
# En la raíz del proyecto, crear y levantar los contenedores
docker-compose up -d

# Acceder al contenedor del backend
docker exec -it backend_container bash

# Dentro del contenedor del backend, realizar las migraciones y crear el superusuario
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

## Uso <a name="uso"></a>

El backend estará disponible en http://localhost:8080/ y el frontend en http://localhost:4200/. Utilice el superusuario creado para acceder al panel de administración del backend.

## Contribución <a name="contribucion"></a

¡Apreciamos las contribuciones de la comunidad! Si desea contribuir a este proyecto, siga estos pasos:

1. Realice un fork del repositorio.
2. Cree una rama para su contribución: git checkout -b feature/nueva-funcionalidad.
3. Realice sus cambios y documente cualquier actualización.
4. Realice un pull request y describa sus cambios en detalle.

## Contacto <a name="contacto"></a>

Si tiene alguna pregunta o necesita más información, no dude en ponerse en contacto con el equipo de desarrollo:

- Nombre: Andres Felipe Silva
- Correo electrónico: afsilva6236@soy.sena.edu.co

Esperamos que este proyecto sea de utilidad para la comunidad del SENA en Bogotá, Colombia, en 2023. ¡Gracias por su interés y contribuciones!

## Licencia <a name="licencia"></a>

Este proyecto está bajo la Licencia MIT. Consulte el archivo LICENSE para obtener más detalles.

Este README combina la información de los proyectos por separados `<URL_BACKEND>` y `<URL_FRONTEND>` y agrega la sección específica para la configuración y despliegue con Docker. 
