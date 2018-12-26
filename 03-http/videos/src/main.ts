// importar paquetes
// const NestFactory = require('@nestjs/core').NestFactory; //js
import {NestFactory} from '@nestjs/core'; // ts

import {Options} from 'http-server' //js


import {AppModule} from './app.module';
import {ajax} from "rxjs/ajax";
import {a} from "./mi-codigo"; //permite exportar variables de otro archivo

async function bootstrap() {
    console.log(a)//variable importada
    const app = await NestFactory.create(AppModule);
    app.set('view engine', 'ejs');
    await app.listen(3000);
}

bootstrap();


