# New Combin React Challenge

## Descripcion general
Se pide crear un sitio web utilizando React que tenga la siguiente estructura
![alt text](https://github.com/newcombin/devskills/blob/main/design.png "Diseño web")

**La app debe poder mostrar y guardar nuevos miembros**
## Requisitos
* Los datos del formulario deben ser enviados a la API, la tabla de la derecha debe recibir los datos de la misma al cargarse el sitio
* Luego de cada insercion exitosa, se debe ingresar los datos a la tabla, sin necesidad de utilizar el endpoint GET
* El boton reset debe limpiar los campos del formulario
* El boton save debe enviar los datos a la API
* El número de seguro social (ssn), es único, y no puede repetirse en la lista.
* En caso de un intento de inserción erroneo, se debe informar dicho error
* Al pasar 2 minutos de inactividad, se debe refrescar la tabla automáticamente
* Hacer uso correcto de las apis disponibles y no hacer llamados innecesarios

### Otras Consideraciones
* **firstName, lastName y address:** Mas de 1 caracter, sin espacios a los costados (trim)
* **ssn:** Tener el formato ###-##-#### (cada # es un numero, los guiones son obligatorios)
* Si el front no cumple las validaciones debe deshabilitar el boton de enviar
## APIs disponibles
| Método | Endpoint | Descripción
|--|--|--|
|GET|/api/members| Optener todos los miembros
|POST|/api/members| Guardar nuevo miembro
|POST|/auth| Optener token de usuario

### Esquemas 
`POST -> /api/members` 
```sh
//body and response
{
  "firstName": String,
  "lastName": String,
  "address": String,
  "ssn": String 
}
```
`POST -> /auth` 
```sh
//body
{
  "username": String,
  "password": String
}

//response
{
	"iat": Number,
	"exp": Number,
	"token": String
}
```

## Instalación
**1.** Clonar repositorio del proyecto
```sh
https://github.com/rafaelfranco9/nc-react-challenge
```
**2.** Posicionarse en la carpeta del proyecto
```sh
cd nc-react-challenge
```
**3.** Iniciar el servidor
```sh
npm run serve
```
**4.** Iniciar la aplicacion de React
```sh
cd react-website
npm run start
```
**5.** Abrir navegador e ingresar a `http://localhost:3000/` 

**6.** Empieza a utilizar la app!
#


## Contacto
Para cualquier consulta respecto a este proyecto comunicarse al siguiente correo: francosprivato@gmail.com
