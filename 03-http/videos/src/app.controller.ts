//principal

import {
    Get,
    Controller,
    Request,
    Response,
    Headers,
    HttpCode,
    HttpException,
    Query,
    Param,
    Res,
    Post, Body, Session, BadRequestException
} from '@nestjs/common';
import {AppService} from './app.service';
import {Observable, of} from "rxjs";
import {Usuario, UsuarioService} from "./usuario/usuario.service";
import * as ts from "typescript/lib/tsserverlibrary";


@Controller()

export class AppController {


    constructor(
        private readonly _usuarioService: UsuarioService,
    ) {

    }


    @Get('saludar')
    saludar(
        @Query() queryParams,
        @Query('nombre') nombre,
        @Headers('seguridad') seguridad,
        @Session() sesion
    ): string { // metodo!
        console.log('sesion', sesion);

        return nombre;
    }


    // /Usuario/segmentoUno/12/segmentoDos
    @Get('segmentoUno/:idUsuario/segmentoDos')
    ruta(
        @Param() todosParametrosRuta,
        @Param('idUsuario') idUsuario,
    ): string { // metodo!
        return idUsuario;
    }


    @Get('despedirse')
    @HttpCode(201)
    despedirse(): Promise<string> {
        return new Promise<string>(
            (resolve, reject) => {

                throw new HttpException({
                        mensaje: 'Error en despedirse',
                    },
                    400);
            }
        );
    }


    @Get('tomar')
    @HttpCode(201)
    tomar(): string { // metodo!
        return 'Estoy borracho';
    }


    @Get('saludarObservable')
    saludarObservable(): Observable<string> { // metodo!
        return of('Hola mundo');
    }


    //login
    @Post('login')
    @HttpCode(200)
    async loginMetodo(//recive los datos
        //cuando se manda del formulario es tipo body
        @Body('username') username: string,
        @Body('password') password: string,
        @Res() response,
        @Session() sesion
    ) {
        const identificado = await this._usuarioService
            .login(username, password);

        if (identificado) {

            sesion.usuarios = username;
            response.redirect('/saludar');

        } else {
            throw new BadRequestException({mensaje: 'Error login'})
        }

    }

    //mostrar la interfaz
    @Get('login')
    loginVista(
        @Res() response
    ) {
        response.render('login');
    }

}
