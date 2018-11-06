//01-tipos-variabñes.ts


//duck typing ->duck
let nombre: any = 'Adrian';

nombre = '1';
let edad: number | string = 21.2;
edad = '12';

let casado: boolean = false;

casado = true;
casado = null;
casado = undefined;
const arregloNumeros: number[] | number[] | any = [1, 2, 3];

arregloNumeros.push('12');


const vinicio: {//interface
    nombre: string;
    apellidos?: string;
    edad?: number;
    estado?: 'Activo' | 'inactivo';
    saludar?: (nombre: string) => string;
} = {//Json
    nombre: 'vinicio',

};
vinicio.apellidos = 'Quinga';

const fecha: Date = new Date();


const saludarDos = (nombre: string): string => {
    return ''

};

function saludar(
    nombre: string,
    apellido?: string,
    ...otrosNombres: number[]
): string | number {
    return 'hola';
}


const respuestaSaludar = <number> saludar('vinicio', 'Quinga');


saludar('vinicio', 'Quinga', 1, 1, 1, 1, 1, 1, 1);

class UsuarioClase {
    nombre: string;

}

interface UsuarioInterface {
    nombre: string;

}

const usuario = {
    nombre: 'Vinicio'
};






