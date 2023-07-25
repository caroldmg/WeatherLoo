## COMANDOS
ng new frontend --routing --skip-git --style=css

ng generate component layout/navbar
ng generate component layout/footer

## Weather
ng generate module weather --routing --module app.module
ng generate component weather/weather-detail
ng generate component weather/weather-list-hours
ng generate component weather/weather-list-sevenDays
ng generate interface weather/models/weather --type=model --prefix=I
 ng generate service weather/services/weather

## Location
ng generate module location --routing --module app.module
ng generate component location/province-list
ng generate component location/town-list
ng generate component location/fav-locations
ng generate component location/search
ng generate component location/popular-locations

ng generate component location/town-list

ng generate interface location/models/province --type=model --prefix=I
ng generate interface location/models/town --type=model --prefix=I
ng generate interface location/models/autonomy --type=model --prefix=I
ng generate service location/services/location

## Users
ng generate module users --routing --module app.module
ng generate component users/user-login
ng generate component users/user-profile
ng generate component users/user-register

ng generate component users/avatar

ng generate interface users/models/user --type=model --prefix=I
ng generate service users/services/users

MÓDULO RECOMENDACIONES - PROPAGANDA REGISTRO Y RECOMENDACIONES PERSONALES


## Auth
* ng generate module auth --routing --module app.module
* ng generate service auth/auth
* ng generate component auth/login
* ng generate component auth/register
* ng generate interceptor auth/jwt

npm install jwt-decode


## Recommendation
ng generate module recommendations --routing --module app.module
ng generate component recommendations/personal-recommendations
ng generate component recommendations/banner
ng generate interface recommendations/models/recommendation
ng generate service recommendations/services/recommendation

## Agregando Angular Material
ng add @angular/material -y --theme=indigo-pink --typography=true

## ORGANIZACIÓN POR MÓDULOS (27/06)
* USER MODULE 
    - Login 
    - Form
    - Propaganda registro
    - Datos personales/ perfil (?)
* LOCATION MODULE 
    - Ubicaciones favoritas 
    - Localidades más buscadas (lista/galería/carrusel?)
    - Listado provincias
    - Listado de municipios -> acceso desde provincias 
    - Buscador (Provincia --> localidad)
* WEATHER MODULE 
    - Detalle día
    - Variación x horas
    - Variación 5 días
* RECOMENDATION MODULE 
    - Recomendaciones día
    - recomendaciones personales
* LAYOUT 
    - Footer
    - Navbar (menú)

## API

La api que estamos usando es 
" https://www.el-tiempo.net/api/json/v2/provincias/[CODPROV]/municipios/[ID] "

* en CODPROV metemos el id de la provincia y en ID, el del municipioEl [ID] son los primeros cinco dígitos del dato CODIGOINE que podrás encontrar, por ejemplo, en el comando anterior. Debes sustituir el [ID] por los cincos primeros dígitos del CODIGOINE.
* Seguún la propia página: 
"El [ID] son los primeros cinco dígitos del dato CODIGOINE que podrás encontrar, por ejemplo, en el comando anterior. Debes sustituir el [ID] por los cincos primeros dígitos del CODIGOINE."
* el listado de municipios y de provincias los hemos extraido de la página de la api (el-tiempo.net/api)

## Opciones del MENÚ
* Inicio (página principal)
* Provincias (provincelist/gallery)
* Perfil (perfil - solo usuarios) / Registro (no usuarios)
* El tiempo hoy (Detalle tiempo) -- cuando sepamos sacar la ubicación, la sacamos, de momento podemos poner una ubicación por defecto

## BUSCADOR: 

Se habló de dos opciones de buscador
* 1 - Buscador de escritura --> [x] Puede dar más errores ( si no existe la búsqueda) [v] Más libertad, aspecto más sencillo
* 2 - Botón select con opciones de provincias y luego opciones de municipios (seleccionar primero provincia y espués municipio) --> [v] Es más seguro que la opción selecionada existe [x] Más feo

## SHARED MODULE
 Además de los posibles pipes, anotaciones y cosas comunes, es un buen lugar para poner un archivo de constantes y así evitar poner números mágicos

## AVATAR
Aprovechand el código de ejemplo de Alan, podemos añadir una imagen de perfil editable en un formulario aparte