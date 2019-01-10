//libro.entity.ts

import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario-entity";
import {PaginaEntity} from "../pagina/pagina.entity";

//entidad nombre de la tabla LIBRO
@Entity('libro')
export class LibroEntity {

    @PrimaryGeneratedColumn()//identificador
    id: number;

     //columna
    @Column(
        {
            name: 'nombre',
            type: 'varchar',
            length: 50
        }
    )
    nombre: string;


    @ManyToOne(// relacion muchos a uno
        type => UsuarioEntity, //tipo relacion de muchos a unos
        usuario => usuario.libros //cual donde se guarda
    )
    usuario: UsuarioEntity;


    @OneToMany(
        type => PaginaEntity,
        pagina => pagina.libro
    )

    paginas: PaginaEntity[];
}