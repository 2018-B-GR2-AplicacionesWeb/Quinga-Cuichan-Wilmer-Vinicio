//libro.entity.ts

import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario-entity";
import {PaginaEntity} from "../pagina/pagina.entity";

@Entity('libro')
export class LibroEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            name: 'nombre',
            type: 'varchar',
            length: 50
        }
    )

    nombre: string;


    @ManyToOne(//muchos a uno
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