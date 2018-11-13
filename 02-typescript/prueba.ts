//02-observables.ts

declare var require: any;

const rxjs = require('rxjs');

//con el signo de dolar es observable
const numeros$ = rxjs.of(1, 2, 3, 4, 5, 6,);

//subcribe la mas importante
//3 funciones
numeros$
  /*  .subscribe(
        //cuandotodo este bn
        (ok) => {
            //esta funcion se ejecuta cuando complilas es codigo
            console.log('En ok', ok)

        },
        (error) => {
            console.log('En error', error)

        },
        //cuando de complete algo
        () => {

        }
    );*/