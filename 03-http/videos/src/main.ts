// const NestFactory = require('@nestjs/core').NestFactory; //js
import {NestFactory} from '@nestjs/core'; // ts
// import * as httpserver from 'http-server'; // js
import {Options} from 'http-server'; // js
import {AppModule} from './app.module';
//import {} from './mi-codigo';
//const a = require('./mi-codigo').a;
//const session = require('express-session');
import * as session from 'express-session';

const FileStore = require('session-file-store')(session);//se guarda la session


async function bootstrap() {
    //console.log(a)
    const app = await NestFactory.create(AppModule);


    //sesion
    app.use(
        session(
            {
                name: 'server-session-id',
                secret: 'no sera de tomar un tragito',
                resave: false,
                saveUninitialized: true,
                cookie: {secure: false},
                store: new FileStore

            }
        )
    );

    app.set('view engine', 'ejs');

    await app.listen(3000);
}

bootstrap();


//configuracion del servidor web aqui
//typeORM bases de datos