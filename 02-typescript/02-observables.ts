// 02-observables.ts
declare var require: any;
//declare var Promise: any;

const fs = require('fs');


const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;


const numeros$ = rxjs.of(1, true, 1, {nombre: 'vinicio'}, ['oli'], function () {

});

console.log(numeros$);

numeros$
    .pipe(
        distinct(),
        map(
            (valorActual) => {
                return {
                    data: valorActual


                };

            }
        )
    )

    .subscribe(
        (ok) => {
            console.log('En ok', ok);
        },
        (error) => {
            console.log('Error:', error);
        },
        () => {
            console.log('Complete');
        },
    );


const promesita = (funciona: boolean): Promise<string> => {

    return new Promise(
        (resolver, reject) => {
            if (funciona) {
                resolver(' :) ');

            }
            else {
                reject(' :( ');

            }


        }
    )
};

const promesita$= rxjs.from(promesita(false));
promesita$
    .subscribe(
        (ok) => {
            console.log('Promesita bien', ok)
        },
        (error) => {

            console.log('Promesita mal', error)

        },
        () => {
            console.log('completado')


        }
    );


const observableConcatenado$ = numeros$
    .pipe(
      concat(promesita$)
        map(

            ()=>{

                console.log('Ejecuto');
                return
                data: valorActual

            }

        )
    )


observableConcatenado$
    .subscribe(

        (ok) => {
            console.log('Promesita bien', ok)
        },
        (error) => {

            console.log('Promesita mal', error)

        },
        () => {
            console.log('completado')


        }

    );
