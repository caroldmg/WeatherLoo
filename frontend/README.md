## COMANDOS
ng new frontend --routing --skip-git --style=css

ng generate component layout/navbar
ng generate component layout/footer

ng generate module weather --routing --module app.module
ng generate component weather/weather-detail
ng generate component weather/weather-list-hours
ng generate component weather/weather-list-sevenDays
ng generate interface weather/models/weather --type=model --prefix=I
 ng generate service weather/services/weather


ng generate module location --routing --module app.module
ng generate component location/province-list
ng generate component location/province-gallery
ng generate component location/town-list
ng generate interface location/models/province --type=model --prefix=I
ng generate interface location/models/town --type=model --prefix=I
ng generate interface location/models/autonomy --type=model --prefix=I
ng generate service location/services/location

ng generate module users --routing --module app.module
ng generate component users/user-list
ng generate component users/user-detail
ng generate component users/user-form
ng generate interface users/models/user --type=model --prefix=I
ng generate service users/services/users


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