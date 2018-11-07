//01-tipos-variabñes.ts
//duck typing ->duck
let nombre = 'Adrian';
nombre = '1';
let edad = 21.2;
edad = '12';
let casado = false;
casado = true;
casado = null;
casado = undefined;
const arregloNumeros = [1, 2, 3];
arregloNumeros.push('12');
const vinicio = {
    nombre: 'vinicio',
};
vinicio.apellidos = 'Quinga';
const fecha = new Date();
const saludarDos = (nombre) => {
    return '';
};
function saludar(nombre, apellido, ...otrosNombres) {
    return 'hola';
}
const respuestaSaludar = saludar('vinicio', 'Quinga');
saludar('vinicio', 'Quinga', 1, 1, 1, 1, 1, 1, 1);
class UsuarioClase {
}
const usuario = {
    nombre: 'Vinicio'
};
