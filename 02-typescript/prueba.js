//02-observables.ts
const rxjs = require('rxjs');
//con el signo de dolar es observable
const numeros$ = rxjs.of(1, 2, 3, 4, 5, 6);
//subcribe la mas importante
//3 funciones
numeros$
    .subscribe(
//cuandotodo este bn
(ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('En error', error);
}, 
//cuando de complete algo
() => {
});
