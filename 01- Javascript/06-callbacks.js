// 06-callbacks.js


const fs = require('fs')
console.log('inicio');
fs.readFile('06-texto.txt', //nombreArchivo
    'utf-8',


    (error, textoLeidoDelArchivo) => {

        if (error) {

            try{
                throw new Error(error);


            }catch (e) {
                console.log(e)
            }

        }
        else{
            console.log(textoLeidoDelArchivo);

        }
    }
);


console.log('fin');

