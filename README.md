# AmigoSecretoProyecto

Hola somos el equipo 4 estamos compuestos por =>
- Emmanuel Cadavid Cano
- Martin Andrey Sanchez

Que solucionamos con el proyecto?

Con este proyecto solucionamos la construccion de equipos dinamicamente para actvidad ludica de la empresa

# Guardado de datos

El guardado de datos esta hecho dinamicamente con la tecnologia de sequelize y trabajamos con MYSQL

aque tenemos el modelo relacional de la base de datos:

![This is an image](https://github.com/Applepie46/AmigoSecretoProyecto/blob/master/public/images/relationalModel/modeloRelacional2.png)

# Primeros pasos para correr el proyecto:

Para empezar el proyecto lo puedes clonar o descargar desde este repositorio con el siguiente link del proyecto =>

- https://github.com/Applepie46/AmigoSecretoProyecto.git

Despues de clonar o descargar el proyecto debemos instalas las dependecias que este trae con el comendo =>

- npm install

Para correr el proyecto, lo podemos hacer con el siguiente comando =>

- npm start

Si quieres correr el proyecto por medio de la ayuda de la libreria de nodemos para que al hacer un cambio en el codigo este se actualize automaticamente usamos el siguiente comando =>

- npm run dev

# Endpoints

## GET

* `/`

  Esta basicamente nos renderiza el index de la applicacion donde tenemos el menu de acceso

* `/users/register`

  Esta ruta renderiza el formulario de registro donde el usuario puede ingresar la informacion
  
* `/users/login`
  
  Esta ruta renderiza el formulario de login donde el usuario puede ingresar la infomacion previamente creada

* `/users/perfil`

  Esta ruta nos renderiza el perfil de el usuario creado previamente, tambien esta ruta a parte de renderizar el perfil del usuario nos trae la funcionalidad que         permite conocer la persona que le toco a el usuario como amigo secreto
    
* `/users/admin`
  
  Esta ruta nos renderiza la vista que es exclusiva oara el administrador de un grupo, en esta el administrador puede registrar las fechas para las endulzadas y la       fecha para el descubrimiento
  
  
* `/users/logout`

  Esta nos ayuda a remover el usuario de una session dado el caso que este se encuentra en una
  
## POST

* `/users/register`
  
  Esta ruta nos permite guardar los datos de los usuarios ingresados por medio de el formulario de registro, esto se da por medio del llamado de la funcion
  ¨register¨ que esta en el controlador userController
 
* `/users/login`

  Esta permite la validacion de los datos de el usuario en la base de datos para darle ingreso a el perfil, esto se da por medio del llamado de la funcion
  ¨login¨ que esta en el controlador userController
  
* `/users/perfil`

  Esta ruta permite guardar el amigo secreto que fue asigando a un usuario a la base de datos de el proyecto, esto se da por medio del llamado de la funcion
  ¨amigoSecreto¨ que esta en el controlador userController 
  
* `/users/fecha`
  
  Esta nos permite guardar y actualizar las fechas de las endulzadas y la fecha de el descubrimiento, esto se da por medio del llamado de la funcion
  ¨fecha¨ que esta en el controlador userController  
  

## Notas a tener en cuenta:

El primer usuario que se registre en un grupo de gerencia se convertira aoutomaticamente en administrador de el grupo teniendo acceso a el cambiado de fecha para la endulzada y fecha para el descubrimiento

# Usuario admin de prueba:
correo: admin@gmail.com
contraseña: admin
# Usuario de prueba:
correo: usuario@prueba.com
contraseña: usuario










