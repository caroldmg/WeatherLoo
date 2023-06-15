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
ng generate service location/services/location

ng generate module users --routing --module app.module
ng generate component users/user-list
ng generate component users/user-detail
ng generate component users/user-form
ng generate interface users/models/user --type=model --prefix=I
ng generate service users/services/users

## API

La api que estamos usando es 
" https://www.el-tiempo.net/api/json/v2/provincias/[CODPROV]/municipios/[ID] "

* en CODPROV metemos el id de la provincia y en ID, el del municipioEl [ID] son los primeros cinco dígitos del dato CODIGOINE que podrás encontrar, por ejemplo, en el comando anterior. Debes sustituir el [ID] por los cincos primeros dígitos del CODIGOINE.
* Seguún la propia página: 
"El [ID] son los primeros cinco dígitos del dato CODIGOINE que podrás encontrar, por ejemplo, en el comando anterior. Debes sustituir el [ID] por los cincos primeros dígitos del CODIGOINE."
* el listado de municipios y de provincias los hemos extraido de la página de la api (el-tiempo.net/api)