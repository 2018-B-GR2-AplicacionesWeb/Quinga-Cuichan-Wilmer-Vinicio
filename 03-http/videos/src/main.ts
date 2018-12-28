//const core = require('@nestjs/core').NestFactory; js


import {NestFactory} from '@nestjs/core';//ts


import * as httpserver from 'http-server';//libreria hecha en js importar paquetes
import {Options} from 'http-server'//js

import {AppModule} from './app.module';
import {of} from "rxjs";
import {fromArray} from "rxjs/internal/observable/fromArray";
//import {a} from "./mi-codigo"; //importo la variable a del archivo mi-codigo

async function bootstrap() {
   // console.log(a);
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);//puerto
}

bootstrap();

