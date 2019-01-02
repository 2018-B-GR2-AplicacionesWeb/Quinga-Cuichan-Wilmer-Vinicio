import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('db_usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
        
    nombrePrimero: string;

    @Column()
    biografia: string;

}