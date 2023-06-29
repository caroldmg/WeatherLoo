## COMANDOS
* nest new backend --skip-git --package-manager npm
* cd backend
* npm install --save @nestjs/typeorm typeorm mysql2

### Módulos
- Database
nest generate module database
Añadir configuración mySQL 
<!-- La contraseña de mySQL deberá ser como variable de entorno para que podamos acceder todas sin modificar el archivo -->
Crear base de datos backend_weatherloo en mySQL workbench

- Autonomy
nest generate module autonomy
nest generate controller autonomy
nest generate service autonomy
Crear autonomy.entity.ts a mano 

- Provinces
nest generate module provinces
nest generate controller provinces
nest generate service provinces
Crear provinces.entity.ts a mano 

- Towns
nest generate module towns
nest generate controller towns
nest generate service towns
Crear towns.entity.ts a mano 

- Users
nest generate module  users
nest generate controller  users
nest generate service  users
Crear users.entity.ts a mano 

- Fav-Locations
nest generate module  fav-locations
nest generate controller  fav-locations
nest generate service  fav-locations
Crear fav-locations.entity.ts a mano

- Local-Weather
nest generate module  local-weather
nest generate controller  local-weather
nest generate service  local-weather
Crear local-weather.model.ts a mano

- Recomendation
nest generate module  recomendation
nest generate controller  recomendation
nest generate service  recomendation
Crear recomendation.model.ts a mano