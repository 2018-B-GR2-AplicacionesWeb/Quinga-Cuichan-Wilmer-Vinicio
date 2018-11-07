//07-callback-propios.js

//la funcion acepta el nombre del archivo y el contenido del archivo


const fs = require('fs');

let contenidoFinal = 'Inicial';

function appendFile(nombreArchivo,
                    contenidoArchivo,
                    callback
) {

    //1-> leer archivo
    //2-> concatenamos el contenido
    //3-> si no existe se crea el archivo

    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error, contenidoLeido) => {

            if (error) {
                //cuando no exite se escribe el archviC
                const contenido = contenidoArchivo;
                //se escribe el archivo
                fs.writeFile(
                    nombreArchivo,//nombre del archivo
                    contenido,//contenido del archivo
                    //y el callback
                    (err) => {
                        if (err) {

                            callback(err);

                        }
                        else {
                            //callbacks
                            //devolver algo que ocurria en el fututo
                            //return contenido; no se puede
                            //no se puede   contenidoFinal=contenido;
                            //cuando llegue el error esta undefined
                            callback(undefined, contenido);

                        }

                    }
                );
            }
            else {
                // cuando si existe concatenamos el contenido
                const contenido = contenidoLeido + contenidoArchivo;

                //se escribe el archivo
                fs.writeFile(
                    nombreArchivo,//nombre del archivo
                    contenido,//contenido del archivo
                    //y el callback
                    (err) => {


                        if (err) {
                            callback(err);

                        }
                        else {

                            callback(undefined, contenido);

                        }


                    }
                );

            }


        }
    );

}

appendFile('07-texto.txt',
    '\nAdios',
    (error, contenidoTexto) => {

        if (error) {
            console.log(error)
        }
        else {
            console.log(contenidoTexto);
        }

    }
);
//asincronico callback resolvio devolver la respuesta  con callback
//para devolver una respuesta asincronica


//problema el mas dificil
//me acepte un arreglo //['A','B','C']
//Indice de posicion de arreglo
//0-A.txt
//1-B.txt asi




