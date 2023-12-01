<div id="header" align="center" style="display: flex; justify-content: space-around; align-items: center;">
  <img src="https://github.com/AND3SIL4/Asiste_mobile/blob/main/assets/temp/logo-asiste-right.png?raw=true" width="300">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/AND3SIL4/Asiste_mobile/blob/main/assets/temp/logo-sena.png?raw=true" width="80">
  <h3 align="left">Proyecto de Automatización para el Centro Formativo del SENA (Año 2023)</h3>
</div>

El SENA es una institución educativa líder en Colombia que requiere una solución para simplificar y mejorar los procesos de asistencia y gestión de novedades en sus centros de formación.  

Este documento presenta las especificaciones del proyecto "ASISTE” Automatización llamada de asistencia en el Centro de Formación del SENA. El proyecto tiene como objetivo principal mejorar la eficiencia de los procesos relacionados con el registro de asistencia y la gestión de novedades en el SENA. El alcance del proyecto incluye la creación de una aplicación web que permitirá a instructores y aprendices interactuar de manera eficiente. Se espera que esta automatización mejore la comunicación, la precisión de los registros y la toma de decisiones en el SENA.   

El propósito del proyecto de automatización del centro de formación del SENA “ASISTE” es mejorar la eficiencia y la efectividad de los procesos relacionados con el registro de asistencia y la gestión de novedades. El proyecto tiene como objetivo principal proporcionar una solución tecnológica que facilite la interacción y colaboración entre instructores y aprendices, al tiempo que optimiza la gestión de la asistencia y la toma de decisiones.

Este proyecto consta de un backend construido en Django y un frontend desarrollado en Angular 16 para automatizar el proceso de llamado a asistencia, registro de novedades y generación de reportes en un centro formativo del SENA (centro de gestión de mercados, logistica y tecnologias de la información) en Bogotá, Colombia, durante el año 2023. El despliegue se realiza mediante Docker y Docker Compose para facilitar la gestión de contenedores.

## Tabla de Contenidos

1. [Descripción](#descripcion)
2. [Características](#caracteristicas)
3. [Funcionalidad](#funcionalidad)
4. [Diseño visual](#disenio-visual)
5. [Tecnologías Utilizadas](#tecnologias-utilizadas)
6. [Configuración del Entorno de Desarrollo individual](#configuracion-del-entorno-de-desarrollo)
7. [Instalación y Configuración con Docker](#instalacion-y-configuracion-con-docker)
8. [Uso](#uso)
9. [Contribución](#contribucion)
10. [Contacto](#contacto)
11. [Licencia](#licencia)

## Descripción <a name="descripcion"></a>

El objetivo de este proyecto es automatizar el proceso de llamado a asistencia, registro de novedades y generación de reportes en el centro de gestión de mercados, logistica y tecnologias de la información en Bogotá, Colombia, con el fin de mejorar la eficiencia en la gestión de información y optimizar los procesos internos, así como facilitar la comunicación entre los usuarios implciados en este proceso.

## Características <a name="caracteristicas"></a>

- **Llamado a Asistencia**: Permite registrar la asistencia de estudiantes y docentes de manera automatizada.
- **Registro de Novedades**: Facilita el registro de novedades y situaciones especiales en tiempo real.
- **Visualización de historiales**: Facilita el seguimiento en tiempo real de la asistencias y novedades de los aprendices.
- **Optimización de Procesos:** El propósito principal es automatizar y simplificar los procesos de registro de asistencia y gestión de novedades. Esto permite a los instructores llevar un registro más eficiente de la asistencia y a los aprendices reportar novedades de manera conveniente.
- **Mejora de la Comunicación:** El proyecto busca mejorar la comunicación entre los diferentes roles dentro del centro de formación. La plataforma facilitará la notificación de novedades, procesos de deserción y otros eventos importantes, lo que promoverá una comunicación más efectiva.
- **Facilitar el Cumplimiento de Normativas:** La aplicación ayudará a garantizar el cumplimiento de las normativas y políticas institucionales relacionadas con la asistencia y la gestión de novedades. Esto contribuye a una mayor transparencia y responsabilidad.
- **Accesibilidad y Usabilidad:** El propósito es proporcionar una plataforma accesible a través de un sitio web. Esto garantiza que los usuarios puedan acceder y utilizar la herramienta de manera conveniente desde diferentes dispositivos.
- **Eficiencia y Toma de Decisiones Informadas:** La automatización de procesos agiliza la gestión de asistencia, lo que ahorra tiempo y recursos. Además, la generación de informes y la visibilidad en tiempo real permiten tomar decisiones informadas basadas en datos precisos.
- **Seguridad de Datos:** La seguridad de los datos es un propósito fundamental. El proyecto busca proteger la integridad y confidencialidad de la información, garantizando que solo los usuarios autorizados tengan acceso a datos sensibles.
- **Resiliencia y Disponibilidad:** Se pretende garantizar la disponibilidad del sistema y su capacidad de recuperación rápida en caso de fallos, lo que asegura una experiencia sin interrupciones para los usuarios.

## Funcionalidad <a name="funcionalidad"></a>

- **Registro de Asistencia:** El sistema permitirá a los instructores registrar la asistencia de los aprendices de manera eficiente.
- **Gestión de Novedades:** Los instructores podrán aprobar las justificaciones de novedades relacionadas con la asistencia de los aprendices, y se permitirá a los aprendices cargar excusas para respaldar estas justificaciones.
- **Roles y Permisos:** Se establecerán diferentes roles (instructor y aprendiz) con permisos específicos para garantizar la seguridad y privacidad de los datos.
- **Tecnología y Accesibilidad:** La aplicación se desarrollará utilizando tecnologías web estándar. La interfaz será responsive y atractiva ofreciendo. 

## Diseño visual <a name="disenio-visual"></a>
<div>
  <h3>Tamaños de logos</h3>
  <img src="https://github.com/AND3SIL4/Asiste_mobile/blob/main/assets/temp/tamanios-logo-asiste.png?raw=true" alt="tamanios de logos" title="tamanios de logos" >
  <h3>Logo en negativo</h3>
  <img src="https://github.com/AND3SIL4/Asiste_mobile/blob/main/assets/temp/logo-asiste-en-negativo.png?raw=true" alt="logo asiste en negativo" title="logo asiste en negativo" >
</div>

## Tecnologías Utilizadas <a name="tecnologias-utilizadas"></a>

<div class="icons" align="center">
  <h3>Backend</h3>
  <div class="languges-icon">
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/python/python-original.svg" alt="python" title="python"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/django/django-plain.svg" alt="django" title="django"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/mysql/mysql-original-wordmark.svg" alt="mysql" title="mysql"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/azure/azure-original-wordmark.svg" alt="azure" title="azure"  height="80">
  </div>
</div>

<br/>

<div class="icons" align="center">
  <h3>Frontend</h3>
  <div class="languges-icon">
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nodejs/nodejs-original-wordmark.svg" title="node" alt="node"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/npm/npm-original-wordmark.svg" title="npm" alt="npm"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/angularjs/angularjs-original.svg" title="angular" alt="angular"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/typescript/typescript-original.svg" title="typescript" alt="typescript"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/sass/sass-original.svg" title="sass" alt="sass"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/materialui/materialui-original.svg" title="materialui" alt="materialui"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/yarn/yarn-original.svg" title="yarn" alt="yarn"  height="80">
  </div>
</div>

<br/>
<div class="icons" align="center">
  <h3>Desarrollo y despliegue</h3>
  <div class="languges-icon">
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vscode/vscode-original-wordmark.svg" title="vscode" alt="vscode"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vim/vim-original.svg" title="vim" alt="vim"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/lua/lua-original-wordmark.svg" title="lua" alt="lua"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/git/git-original-wordmark.svg" title="git" alt="git" height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/github/github-original-wordmark.svg" alt="github" title="github"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/markdown/markdown-original.svg" alt="markdown" title="markdown" height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/docker/docker-original-wordmark.svg" alt="docker" title="docker"  height="80">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/linux/linux-original.svg" alt="linux" title="linux"  height="80">
  </div>
</div>

<br/>

## Configuración del Entorno de Desarrollo <a name="configuracion-del-entorno-de-desarrollo"></a>

Para configurar el entorno de desarrollo, se requiere tener Python, pip, Node.js, Npm o Yarn y Angular CLI instalados. Se recomienda utilizar un entorno virtual para gestionar las dependencias. **Hay que tener en cuenta que la presente configuración esta dirijida a al sistema operativo Linux en cualquiera de sus distribuciones, sin embargo puede funcionar en cualquier otro OS configurando los archvios en función**

### Backend

```bash
# Clonar el repositorio
git clone 'https://github.com/AND3SIL4/Backend-asiste' ./backend-asiste

# Navegar al directorio del backend
cd backend-asiste

# Crear un entorno virtual
python3 venv virt

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
git clone 'https://github.com/AND3SIL4/Frontend-asiste' ./frontend-asiste

# Navegar al directorio del frontend
cd frontend-asiste

# Instalar las dependencias
npm install o yarn install (se recomienda usar yarn para este proyecto)
```

## Instalación y Configuración con Docker <a name="instalacion-y-configuracion-con-docker"></a>

```
git clone 'https://github.com/AND3SIL4/Asiste-project-dockerized/' ./asiste-proyect

# Ingresar a la raiz del proyecto
cd asiste-proyect

# En la raíz del proyecto, crear los contenedores
docker-compose build

# En la raíz del proyecto, levantar los contenedores
docker-compose up -d

# Acceder al contenedor del backend
docker exec -it [nombre del contenedor del backend] bash

# Dentro del contenedor del backend, realizar las migraciones y crear el superusuario
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

## Uso <a name="uso"></a>

##### En caso de tener el front y el back por separado 

El backend estará disponible en http://localhost:8080/ y el frontend en http://localhost:4200/. Utilice el superusuario creado para acceder al panel de administración del backend.

#### En caso de tener el proyecto con Docker 

La aplicación entera estará disponible en http://192.168.100.98:4300/. Utilice el superusuario creado para acceder al panel de administración por primera vez.


## Contribución <a name="contribucion"></a>

¡Apreciamos las contribuciones de la comunidad! Si desea contribuir a este proyecto, siga estos pasos:

1. Realice un fork del repositorio.
2. Cree una rama para su contribución: git checkout -b feature/nueva-funcionalidad.
3. Realice sus cambios y documente cualquier actualización.
4. Realice un pull request y describa sus cambios en detalle.

## Contacto <a name="contacto"></a>

Si tiene alguna pregunta o necesita más información, no dude en ponerse en contacto con el equipo de desarrollo:

<img src="https://github.com/and3sil4.png" alt="andres-felipe-silva" title="andres-felipe-silva"  height="100">

- Nombre: Andres Felipe Silva
- Correo electrónico: afsilva6236@soy.sena.edu.co

Esperamos que este proyecto sea de utilidad para la comunidad del SENA en Bogotá, Colombia, en 2023. ¡Gracias por su interés y contribuciones!

## Licencia <a name="licencia"></a>

Este proyecto está bajo la Licencia MIT. Consulte el archivo LICENSE para obtener más detalles.

Este README combina la información de los proyectos por separados [Backend Asiste](https://github.com/AND3SIL4/Frontend-asiste) y [Frontend Asiste](https://github.com/AND3SIL4/Backend-asiste) y agrega la sección específica para la configuración y despliegue con Docker. 
