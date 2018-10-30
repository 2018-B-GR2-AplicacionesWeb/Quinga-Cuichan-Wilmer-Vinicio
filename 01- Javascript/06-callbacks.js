// 06-callbacks.js


const fs = require('fs')
console.log('inicio');
fs.readFile('06-texto.txt', //nombreArchivo
    'utf-8',


    (error, textoLeidoDelArchivo) => {

        if (error) {

            try {
                throw new Error(error);


            } catch (e) {
                console.log(e)
            }

        }
        else {


            fs.writeFile(
                '06-texto.txt',
                textoLeidoDelArchivo + 'mundo',
                (err) => {
                    if (err) console.log('Error');
                    console.log('Archivo actualizado');


                }
            );

            //aqui
            //  console.log(textoLeidoDelArchivo);

        }
    }
);

//aqui


console.log('fin');

