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
    Post
} from '@nestjs/common';
import {AppService} from './app.service';
import {Observable, of} from "rxjs";


//decorador -> funcion
// se ejecuta antes de algo

//http://192.168.1.2:3000/Usuario/saludar   Metodos -> get
//http://192.168.1.2:3000/Notas/salir       metodo -> post
//http://192.168.1.2:3000/Notas/registrar  metodo -> put
//http://192.168.1.2:3000/Notas/borrar  metodo -> delete
//http://192.168.1.2:3000/Notas


@Controller('Usuario') //decoradores


export class AppController {

    usuarios = [
        {
            nombre: 'Vinicio',
            id: 1
        },
        {
            nombre: 'Wilmer',
            id: 2

        },
        {
            nombre: 'Joselyn',
            id: 3

        }
    ];


    nombre: String = 'Vinicio';

    constructor(
        private readonly appService: AppService) {
    }

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
    //ejemplo
    //cliente renderiza
    @Get('inicio')
    inicio(
        @Res() response //todas las variables de la respuesta

    ) {
        response.render('inicio', {//inicio.ejs
            nombre: 'Vinicio',
            arreglo: this.usuarios //variable creada en el principio
        });

    }

//metodo borrar
    //query params, body params, parametros de ruta, parametros desde el cliente
    @Post('borrar/:idUsuario')//parametros de ruta
    borrar(
        @Param('idUsuario') idUsuario,
        @Res() response //todas las variables de la respuesta

    ) {
//borrar un dato del array, dependiendo del id
        const indiceUsuario = this
            .usuarios
            .findIndex(
                (usuario) => usuario.id === Number(idUsuario)
            );
        this.usuarios.splice(indiceUsuario, 1);


        response.render('inicio', {//inicio.ejs
            nombre: 'Vinicio',
            arreglo: this.usuarios
        });

    }


}
