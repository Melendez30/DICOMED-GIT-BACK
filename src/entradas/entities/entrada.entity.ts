import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class entradas {
    @PrimaryGeneratedColumn()
    id_entrada: number;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
    @Column()
    laboratorio: string;
    @Column()
    clave_imss: string;
    @Column()
    proveedor: string;
    @Column()
    lote: string;
    @Column()
    caducidad: string;
    @Column()
    fecha_entrada: string;
    @Column()
    piezas_entrada: string;
    @Column()
    codigo_barras: string;
    @Column()
    folio_prov: string;
}
