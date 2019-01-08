import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {LibroEntity} from "../libro/libro.entity";


@Entity('')
export class PaginaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    texto: string;

    @ManyToOne(
        type => LibroEntity,
        libro => libro.paginas
    )
    libro: LibroEntity;

}