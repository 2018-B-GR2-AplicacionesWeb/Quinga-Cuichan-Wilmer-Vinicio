import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsuarioService} from "./usuario/usuario.service";
import {UsuarioModule} from "./usuario/usuario.module";
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario-entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '172.31.103.216',
            port: 3306,
            username: 'vinicioQ',
            password: '98765432',
            database: 'quingavinicio',
            synchronize: true,
            entities: [
                UsuarioEntity
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
