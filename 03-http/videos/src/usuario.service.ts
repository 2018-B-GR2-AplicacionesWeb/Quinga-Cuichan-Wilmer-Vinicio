import {Injectable} from "@nestjs/common";


@Injectable()
//se crea la clase
//el controlador maneja el request y response

export class UsuarioService {

    //array de usuarios

    usuarios: Usuario[] = [
        {
            nombre: 'Adrian',
            biografia: 'Doctor',
            id: 1
        },
        {
            nombre: 'Vicente',
            biografia: 'Maestro',
            id: 2
        },
        {
            nombre: 'Carolina',
            biografia: 'Diseñadora',
            id: 3
        }
    ];
    registroActual = 4;


    //para crear recive el usuario
    crear(nuevoUsuario: Usuario): Usuario {
        nuevoUsuario.id = this.registroActual;
        this.registroActual++;
        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }

    actualizar(idUsuario: number,
               nuevoUsuario: Usuario): Usuario {
        const indiceUsuario = this
            .usuarios
            .findIndex(
                (usuario) => usuario.id === idUsuario
            );
        this.usuarios[indiceUsuario] = nuevoUsuario;
        return nuevoUsuario;
    }

    borrar(idUsuario: number): Usuario {
        const indiceUsuario = this
            .usuarios
            .findIndex(
                (usuario) => usuario.id === idUsuario
            );
        const usuarioBorrado = JSON.parse(
            JSON.stringify(this.usuarios[indiceUsuario])
        );
        this.usuarios.splice(indiceUsuario, 1);
        return usuarioBorrado;
    }

    buscarPorId(idUsuario: number) {
        return this.usuarios
        // .find(u=>u.id === idUsuario);
            .find(
                (usuario) => {
                    return usuario.id === idUsuario
                }
            );
    }


}


//se crea una interfaz sive para tipar

export interface Usuario {
    id: number;
    nombre: string;
    biografia: string;
}