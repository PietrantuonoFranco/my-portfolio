---
title: LocaliCity
members:
    - Franco Pietrantuono
description:
    es: Esta aplicación web, respaldada por una API, centraliza y proporciona gratuitamente datos de países, provincias y ciudades. Su objetivo es solucionar la necesidad de esta información para formularios, ofreciendo además un sistema colaborativo donde los usuarios pueden solicitar nuevas localidades.
    en: This web application, supported by an API, centralizes and freely provides data on countries, states, and cities. It solves the common need for this hierarchical information in forms, while also featuring a collaborative system where users can request new locations.
technologiesNames:
    - TypeScript
    - React
    - Astro
    - TailwindCSS
    - PostgreSQL
    - Docker
    - TypeORM
    - GitHub Actions
    - Nginx
    - Azure
webSiteUrl:
repositoryUrl: https://github.com/PietrantuonoFranco/LocaliCity
img: https://res.cloudinary.com/dmfr1l3tj/image/upload/v1760998074/localicity_pulimz.webp
---

# Localicity

La idea de mi proyecto surgió mientras trabajaba en otro desarrollo personal por hobbie. En uno de sus formularios era necesario ingresar país, provincia y ciudad. El desafío aparecía al intentar resolver la lógica de dependencias: elegir un país, luego mostrar sus provincias y, finalmente, seleccionar una ciudad de la provincia elegida.
Para resolverlo pensé en dos opciones. La primera era guardar toda esa información en mi propia base de datos, lo cual resultaba demasiado costoso en tiempo y recursos. La segunda fue buscar APIs externas que ofrecieran estos datos. Sin embargo, aunque encontré algunas alternativas, la mayoría no disponía de planes gratuitos o, en su versión gratuita, no eran realmente útiles para mi caso.

A partir de esta problemática nació la idea de desarrollar un sistema propio que proporcione información de países, provincias y ciudades. Además, quise sumar una funcionalidad clave: permitir que los usuarios puedan solicitar la incorporación de nuevas locaciones. Dichas solicitudes quedarían pendientes de revisión por un administrador, quien decidiría si aprobarlas (creando la entidad en el sistema) o rechazarlas. De esta forma, la base de datos se enriquecería de manera colaborativa y escalable, evitando la necesidad de investigar continuamente nuevas ubicaciones.

Así fue como nació **`LocaliCity`**: un proyecto pensado para simplificar y democratizar el acceso a datos geográficos estructurados.

## ¿Cómo ejecuto la aplicación?
Para ejecutar la aplicación, primero debemos crear en la raíz del proyecto y en el directorio **`/backend`** un archivo llamado **`.env`**, el cual debe tener una estructura como la siguiente:

```env
#_________NodeJS__________
NODE_ENV=production

#________ExpressJS________
EXPRESS_PORT=3000


#________Astro________
ASTRO_PORT=4321


#__________CORS___________
CORS_ORIGIN=http://tu-dominio.com


#__________Nginx__________
NGINX_PORT=80

#______JsonWebToken_______
JWT_SECRET=tu-jwt-secreto


#_________TypeORM_________
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=localicity

POSTGRES_USER=usuario
POSTGRES_PASSWORD=contraseña
POSTGRES_DB=localicity
POSTGRES_PORT=5432


#_________Bcrypt__________
SALT_ROUNDS=5
```

Posteriormente procederemos a la ejecución, la cual realizaremos mediante Docker.

### Ejecución mediante Docker
1. Para correr nuestra aplicación mediante este método, debemos tener previamente instalado **`Docker`** en nuestro dispositivo, por lo que en caso de no tenerlo, dirigite al siguiente enlace y seguí los pasos para instalarlo: https://docs.docker.com/get-started/get-docker/

2. Una vez tengamos Docker instalado, ejecutamos el siguiente comando para levantar los 3 servicios (frontend, backend y la base de datos):

		docker compose up --build

	Esto creará un contenedor llamado **`localicity`** con 4 contenedores dentro llamados **`db-1`**, **`api-1`**, **`astro-1`** y **`nginx-1`**.

3. Para poder abrir la aplicación, esperamos a que haya finalizado el proceso de iniciación y nos dirigimos a la siguiente URL en nuestro navegador: http://localhost:80
