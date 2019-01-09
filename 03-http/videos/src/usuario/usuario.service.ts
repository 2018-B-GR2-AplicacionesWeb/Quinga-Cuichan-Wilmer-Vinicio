import {Inject, Injectable} from "@nestjs/common";
import {FindManyOptions} from "../../node_modules/typeorm/find-options/FindManyOptions";
import {Repository} from "typeorm";
import {UsuarioEntity} from "./usuario-entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsuarioService {
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

    //constructores nest
    //Inyectar dependencias

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>,
    ) {

    }


    buscar(parametros?: FindManyOptions<UsuarioEntity>)
        : Promise<UsuarioEntity[]> {
        return this._usuarioRepository.find(parametros);
    }


    async crear(nuevoUsuario: Usuario): Promise<UsuarioEntity> {

        //instanciar una entidad -> create()
        const usuarioEntity = this._usuarioRepository
            .create(nuevoUsuario);

        //guardar una entidad en la base de datos -> sabe
        const usuarioCreado = await this._usuarioRepository
            .save(usuarioEntity);

        return usuarioCreado;
    }


    actualizar(idUsuario: number,
               nuevoUsuario: Usuario): Promise<UsuarioEntity> {

        nuevoUsuario.id = idUsuario;
        const usuarioEntity = this._usuarioRepository.create(nuevoUsuario);
        return this._usuarioRepository.save(usuarioEntity)

    }


    borrar(idUsuario: number): Promise<UsuarioEntity> {

        //crea una instanica de le entidad
        const usuarioEntityAEliminar = this._usuarioRepository.create(
            {
                id: idUsuario
            }
        );
        return this._usuarioRepository.remove(usuarioEntityAEliminar)
    }


    buscarPorId(idUsuario: number): Promise<UsuarioEntity> {
        return this._usuarioRepository.findOne(idUsuario);//acepta el identificador
    }

    buscarPorNombreOBiografia(busqueda: string): Usuario[] {
        return this.usuarios.filter(
            (usuario) => {

                // Si la busqueda contiene algo del nombre
                const tieneAlgoEnElnombre = usuario
                    .nombre.includes(busqueda); // True / False

                // Si la busqueda contiene algo de la bio
                const tieneAlgoEnLaBio = usuario
                    .biografia.includes(busqueda);// True / False

                return tieneAlgoEnElnombre || tieneAlgoEnLaBio;
            }
        )
    }


    async login(username: string, password: string)
        : Promise<boolean> {
        // 1) Buscar al usuario por username
        // 2) Comparar si el password es igual al password

        const usuarioEncontrado = await this._usuarioRepository
            .findOne({
                where: {
                    username: username
                }
            });
        if (usuarioEncontrado) {

            if (usuarioEncontrado.password === password) {
                return true;
            } else {
                return false;
            }

        } else {
            return false;
        }


    }



}




export interface Usuario {
    id: number;
    nombre: string;
    biografia: string;
}