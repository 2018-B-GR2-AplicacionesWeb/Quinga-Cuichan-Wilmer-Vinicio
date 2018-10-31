/*


// 08-promesas.js


const promesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenidoLeido);
                    }
                }
            );
        }
    );
};

const promesaEscritura = (
    nombreArchivo,
    contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
};

console.log(promesa);
promesa('07-texto.txt')
    .then(
        (contenido) => {
            console.log('Ok', contenido);
            return promesaEscritura(
                '07-texto.txt',
                contenido + 'Nuevo Contenido');
            // Promesa
        }
    )
    .then(
        (contenidoCompleto) => {
            console.log(contenidoCompleto);
        }
    )
    .catch(
        (error) => {
            console.log('Mal', error);
        }
    );



//deber ejecicio a promesa
*/


//convertir en appenfile

const fs = require('fs');


const appendFile = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoLeidoDelArchivo) => {
                    if (error) {
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeidoDelArchivo,
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    // Devolver el contenido
                                    resolve(contenidoLeidoDelArchivo)
                                }
                            }
                        );
                    } else {
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeidoDelArchivo,
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    // Devolver el contenido
                                    resolve(contenidoLeidoDelArchivo + 'nuevo contenido')
                                }
                            }
                        )
                    }
                }
            );
        }
    )

}


appendFile('07-texto.txt', 'nuevoContenido' )
    .then(
        (contenido) => {
            console.log(contenido);
            return promesaEscritura('09-texto.txt', contenido + 'Adios amigos');
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );