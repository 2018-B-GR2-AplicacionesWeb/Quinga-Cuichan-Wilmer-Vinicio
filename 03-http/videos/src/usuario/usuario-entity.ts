import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {LibroEntity} from "../libro/libro.entity";


@Entity('db_usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;


    @Index()//buscar
    @Column(
        {
            name: 'nombre_primero',
            type: 'varchar',
            length: 50,
            default: 'nombre'
        }
    )
    nombre: string;

    @Column(
        {
            nullable: true,//valor nulo
        }
    )
    biografia: string;

    @BeforeInsert()//trigger
    antesDeInsertar() {
        console.log('Ejecutandose antes de insertar');
    }

    @BeforeInsert()//trigger
    verificarFuncion() {
        console.log('Ejecuta despues de antes de insetar');
    }

    @OneToMany(//uno a muchos
        type => LibroEntity, //tipo de datos un usuario libro
        libro => libro.usuario //cual es la campo FK
    )

    libros: LibroEntity[];
}