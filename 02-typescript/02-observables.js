//declare var Promise: any;
var fs = require('fs');
var rxjs = require('rxjs');
var map = require('rxjs/operators').map;
var distinct = require('rxjs/operators').distinct;
var concat = require('rxjs/operators').concat;
var numeros$ = rxjs.of(1, true, 1, { nombre: 'vinicio' }, ['oli'], function () {
});
//@
var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log('I get called:', res === 123); // Devuelve: true
});
promise["catch"](function (err) {
    // Nuca es utilizado
});
