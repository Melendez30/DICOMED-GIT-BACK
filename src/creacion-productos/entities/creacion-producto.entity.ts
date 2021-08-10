import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class creacion_productos {
  @PrimaryGeneratedColumn()
  id_creacion: number;
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
  ubicacion: string;
  @Column()
  lote: string;
  @Column()
  caducidad: string;
}
