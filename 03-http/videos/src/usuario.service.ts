import {Injectable} from "@nestjs/common";

//servicio, debe de tener la toda la  logica
@Injectable()
export class UsuarioService {

    usuarios: Usuario[] = [
        {
            nombre: 'Vinicio',
            biografia: 'Doctor',
            id: 1
        },
        {
            nombre: 'Wilmer',
            biografia: 'Maestro',
            id: 2
        },
        {
            nombre: 'Joselyn',
            biografia: 'Diseñadora',
            id: 3
        }
    ];

    registroActual = 4;

    //añadir nuevo usuario
    crear(nuevoUsuario: Usuario): Usuario {
        nuevoUsuario.id = this.registroActual;
        this.registroActual++;

        this.usuarios.push();
        return nuevoUsuario;

    }

    //actualizar usuario
    actualizar(idUsuario: number, nuevoUsuario: Usuario): Usuario {

        const indiceUsuario = this
            .usuarios
            .findIndex(
                (usuario) => usuario.id === Number(idUsuario)
            );

        this.usuarios[indiceUsuario] = nuevoUsuario;
        return nuevoUsuario;


    }
    //borrar

    borrar(idUsuario: number): Usuario {

        const indiceUsuario = this
            .usuarios
            .findIndex(
                (usuario) => usuario.id === idUsuario
            );

        const usuarioBorrado = JSON.parse(JSON.stringify(this.usuarios[indiceUsuario]));//clonar un arreglo
        this.usuarios.splice(indiceUsuario, 1);

        return usuarioBorrado;
    }

}


export interface Usuario {
    id: number;
    nombre: string;
    biografia: string;
}