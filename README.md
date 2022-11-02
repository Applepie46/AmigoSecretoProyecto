# AmigoSecretoProyecto

## Que solucionamos con el proyecto?

Con este proyecto solucionamos la construccion de equipos dinamicamente mediante el uso de javascript con node.js en el cual construimos endpoints los cuales participan en eventos como la renderizacion de vistas y el guardado de informacion con una conexion a base de datos 

## Primeros pasos para correr el proyecto:

Para empezar el proyecto lo puedes clonar o descargar desde este repositorio con el siguiente link del proyecto =>

- https://github.com/Applepie46/AmigoSecretoProyecto.git
Después de clonar o descargar el proyecto debemos instalar las dependencias que este trae con él comandó =>

  `npm install`

- Para correr el proyecto, lo podemos hacer con el siguiente comando =>

  `npm start`
  
- Si quieres correr el proyecto por medio de la ayuda de la librería de nodemon para que al hacer un cambio en el código este se actualiza automáticamente usamos el siguiente comando =>

  `npm run dev`
  
## Funcionalidad

### Endpoints

#### GET

Los métodos por get en general renderizan las vistas que tenemos en nuestra aplicación, a continuación tenemos las rutas:

* `/`

  Esta básicamente nos renderiza el index de la aplicación donde tenemos el menú de acceso

* `/users/register`

  Esta ruta renderiza el formulario de registro donde el usuario puede ingresar la información
  
* `/users/login`
  
  Esta ruta renderiza el formulario de login donde el usuario puede ingresar la información previamente creada

* `/users/perfil`

  Esta ruta nos renderiza el perfil del usuario creado previamente, también esta ruta aparte de renderizar el perfil del usuario nos trae la funcionalidad que         permite conocer la persona que le toco al usuario como amigo secreto
    
* `/users/admin`
  
  Esta ruta nos renderiza la vista que es exclusiva para el administrador de un grupo, en esta el administrador puede registrar las fechas para las endulzadas y la       fecha para el descubrimiento
  
  
* `/users/logout`

  Esta nos ayuda a remover el usuario de una sesión dado el caso que este se encuentra en una

#### POST

##### Guardado de datos

El guardado de datos está hecho dinámicamente con la tecnología de sequelize y trabajamos con MYSQL

Aquí tenemos el modelo relacional de la base de datos:

![This is an image](https://github.com/Applepie46/AmigoSecretoProyecto/blob/master/public/images/relationalModel/modeloRelacional2.png)

En los métodos por post es cuando guardamos la información de los usuarios y también validamos los datos que fueron ingresados por los usuarios como por ejemplo el inicio de sesión, a continuación tenemos las rutas:

* `/users/register`
  
  Esta ruta nos permite guardar los datos de los usuarios ingresados por medio del formulario de registro, esto se da por medio del llamado de la función
  ¨register¨ que está en el controlador userController
  
  ###### Aspectos a tener en cuenta:

  El primer usuario que se registre en un grupo de gerencia se convertira aoutomaticamente en administrador de el grupo teniendo acceso a el cambiado de fecha para la   endulzada y fecha para el descubrimiento
 
* `/users/login`

  Esta permite la validación de los datos del usuario en la base de datos para darle ingreso al perfil, esto se da por medio del llamado de la función
  ¨login¨ que está en el controlador userController
  
* `/users/perfil`

  Esta ruta permite guardar el amigo secreto que fue asignado a un usuario a la base de datos del proyecto, esto se da por medio del llamado de la función
  ¨amigoSecreto¨ que está en el controlador userController 
  
* `/users/fecha`
  
  Esta nos permite guardar y actualizar las fechas de las endulzadas y la fecha del descubrimiento, esto se da por medio del llamado de la función
  ¨fecha¨ que está en el controlador userController










