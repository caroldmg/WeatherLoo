import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'admin', // sustituir por variable de entorno
            // password: process.env.NEST_PASSWORD,
            database: 'backend_weatherloo',
            entities: [
                // __dirname + 'src/**/*.model.ts'
                //AGREGAR LAS ENTIDADES
               
            ],
            synchronize: true, // generar tablas automáticamente en base a entidades
            logging: true
        })
    ]
})
export class DatabaseModule {}
