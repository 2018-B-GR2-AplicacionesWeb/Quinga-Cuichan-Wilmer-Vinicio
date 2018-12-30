import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsuarioService} from "./usuario.service";

@Module({
    imports: [],//modulos
    controllers: [AppController], //controllers
    providers: [//servicios
        AppService,
        UsuarioService // (usuario.service.ts)se encuentra registrados en el nest y se puede utilizar
    ],
})
export class AppModule {
}
