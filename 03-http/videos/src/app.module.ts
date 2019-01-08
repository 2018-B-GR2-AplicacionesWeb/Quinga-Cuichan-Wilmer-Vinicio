import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsuarioService} from "./usuario/usuario.service";
import {UsuarioModule} from "./usuario/usuario.module";
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario-entity";
import {LibroEntity} from "./libro/libro.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '172.31.103.225',
            port: 3306,
            username: 'vinicioQ',
            password: '98765432',
            database: 'quingavinicio',
            synchronize: true,//
            dropSchema:false,//para una base de datos ya  creadaen true se borrar siempre los datos
            entities: [
                UsuarioEntity,//tabla papa
                LibroEntity
            ]

        }),
        UsuarioModule
    ], // Modulos
    controllers: [AppController], // Controllers
    providers: [
        AppService,
    ], // Servicios
})
export class AppModule {
}
