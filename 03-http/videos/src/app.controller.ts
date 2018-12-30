import {
    Controller,
    Get,
    HttpCode,
    HttpException,
    Param,
    Query,
    Request,
    Response,
    Headers,
    Res,
    Post, Body
} from '@nestjs/common';
import {AppService} from './app.service';
import {Observable, of} from "rxjs";
import {Usuario, UsuarioService} from "./usuario.service";
//import {Usuario} from "./mi-codigo";

// controlador gestionaba el protocolo http, recive el request, y enviar el response
//decorador -> funcion
// se ejecuta antes de algo

//http://192.168.1.2:3000/Usuario/saludar   Metodos -> get
//http://192.168.1.2:3000/Notas/salir       metodo -> post
//http://192.168.1.2:3000/Notas/registrar  metodo -> put
//http://192.168.1.2:3000/Notas/borrar  metodo -> delete
//http://192.168.1.2:3000/Notas


@Controller('Usuario') //decoradores


export class AppController {

    //importar servicios al controlador necesita estar registrados en el nesr

    // constructor no es un constructor normal

    constructor(
        private readonly _usuarioService: UsuarioService,)
    // private readonly _appService:AppService
    {
    }


    // nombre: String = 'Vinicio';


    // @Get('saludar')

    //saludar(): string {//metodo
    //  return 'Hola Mundo'
    //}

    @Get('saludar')
    saludar(
        @Query() queryParams, //devuelve un json
        @Query('nombre') nombre,
        @Headers('seguridad') seguridad,
    ): string {//metodo
        return nombre;
    }


    // /Usuarios/segmentoUno/12/segmentoDos
    @Get('segmentoUno/:idUsuario/segmentoDos')

    ruta(
        @Param() todosParametrosRuta, //devuelve un json
        @Param('idUsuario') idUsuario,
    ): string {//metodo
        return idUsuario;
    }


    @Get('despedirse')
    @HttpCode(201)

    despedirse(): Promise<String> {//metodo
        return new Promise<String>(
            (resolve, reject) => {
                //resolve('Adios');
                //  reject('Error!')
                throw new HttpException({
                        mensaje: 'Error en despedirse',
                    }, 400
                )
            }
        );
    }

    //nest por defecto 200 status code
    @Get('tomar')
    @HttpCode(201)

    tomar(): string {//metodo
        return 'Estoy Borracho'
    }

    @Get('saludarObservable')

    saludarObservable(): Observable<String> {//metodo
        return of('Hola mundo Observable');
    }

/////////////////////////////////////////////////////////////////////////////
    //logica en el controlador,
    //ejemplo
    //cliente renderiza
    @Get('inicio')
    inicio(
        @Res() response //todas las variables de la respuesta

    ) {
        response.render('inicio', {//inicio.ejs
            nombre: 'Vinicio',
            arreglo: this._usuarioService.usuarios //llama a la nueva clase creada
        });

    }


//metodo borrar
    //query params, body params, parametros de ruta, parametros desde el cliente
    @Post('borrar/:idUsuario')//parametros de ruta
    borrar(
        @Param('idUsuario') idUsuario: String,
        @Res() response //todas las variables de la respuesta, envia el resquet

    ) {

        this._usuarioService.borrar(Number(idUsuario));  //metodo en la clase usuario.service.ts


        response.redirect('/Usuario/inicio')//cuando se borrar un usuario se dirige a la misma pagina

    }


    @Get('crear-usuario')
    crearUsuario(
        @Res() response
    ) {
        response.render(
            'crear-usuario'
        )
    }

    @Post('crear-usuario')
    crearUsuarioFormulario(
        @Body() usuario: Usuario,
        @Res() response
    ) {

        this._usuarioService.crear(usuario);
      //  response.redirect('/Usuario/inicio');

    }


}
