import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class salidas {
    @PrimaryGeneratedColumn()
    id_salida: number;
    @Column()
    nombre: string;
    @Column()
    codigo_barras: string;
    @Column()
    descripcion: string;
    @Column()
    laboratorio: string;
    @Column()
    clave_imss: string;
    @Column()
    cliente: string;
    @Column()
    lote: string;
    @Column()
    caducidad: string; 
    @Column()
    fecha_salida: string;
    @Column()
    piezas_salida: string
    @Column()
    num_guia: string;
    @Column()
    orden_compra: string;
}
