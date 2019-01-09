//usuario.module.ts
//decorador para modulos

//logica del controlador aqui
import {Module} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioController} from "./usuario.controller";
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario-entity";


@Module({
    imports: [
        //repositorio
        TypeOrmModule
            .forFeature(
                [UsuarioEntity]
            )
    ],
    controllers: [
        UsuarioController
    ],
    providers: [
        UsuarioService
    ],
    exports: [
        UsuarioService
    ]

})

export class UsuarioModule {

}