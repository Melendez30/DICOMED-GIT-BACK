import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCreacionProductoDto } from './dto/create-creacion-producto.dto';
import { UpdateCreacionProductoDto } from './dto/update-creacion-producto.dto';
import { creacion_productos } from './entities/creacion-producto.entity';
import { getManager } from 'typeorm';
import { entradas } from 'src/entradas/entities/entrada.entity';
import { salidas } from 'src/salidas/entities/salida.entity';

@Injectable()
export class CreacionProductosService {
  constructor(
    @InjectRepository(creacion_productos)
    private productosRepository: Repository<creacion_productos>,
  ) {}

  async buscarCodigoDeBarrar(codigo: any) {
    const entityManager = getManager();
    const consultar = await entityManager
      .createQueryBuilder(creacion_productos, 'creacion_productos')
      .select('creacion_productos.nombre', 'nombre')
      .addSelect('creacion_productos.descripcion', 'descripcion')
      .addSelect('creacion_productos.clave_imss', 'clave_imss')
      .where(`creacion_productos.codigo_barras = '${codigo}'`);
    const resultado = consultar.getRawMany().then((res) => {
      return res;
    });
    return resultado;
  }

  async tablaGeneral() {
    const entityManager = getManager();
    const consultar = await entityManager
      .createQueryBuilder(creacion_productos, 'creacion_productos')
      .select('creacion_productos.nombre', 'producto')
      .addSelect('creacion_productos.descripcion', 'descripcion')
      .addSelect('creacion_productos.codigo_barras', 'codigo_barras')
      .addSelect('creacion_productos.laboratorio', 'laboratorio')
      .addSelect('creacion_productos.clave_imss', 'clave_imss')
      .addSelect('creacion_productos.ubicacion', 'ubicacion')
      .addSelect('creacion_productos.lote', 'lote')
      .addSelect('creacion_productos.caducidad', 'caducidad')
      .addSelect('entrada.fecha_entrada', 'fecha_entrada')
      .addSelect('entrada.piezas_entrada', 'piezas_entrada')
      .addSelect('entrada.proveedor', 'proveedor')
      .addSelect('salida.cliente', 'cliente')
      .addSelect('salida.fecha_salida', 'fecha_salida')
      .addSelect('salida.piezas_salida', 'piezas_salida')
      .addSelect('salida.num_guia', 'num_guia')
      .addSelect('salida.orden_compra', 'orden_compra')
      .addSelect(
        'IFNULL(entrada.piezas_entrada, 0) - IFNULL(salida.piezas_salida, 0)',
        'piezas_almacen',
      )
      .leftJoin(
        entradas,
        'entrada',
        'entrada.nombre = creacion_productos.nombre',
      )
      .leftJoin(salidas, 'salida', 'salida.nombre = creacion_productos.nombre');
    const resultado = await consultar.getRawMany().then((res) => {
      return res;
    });
    for (let i = 0; i < resultado.length; i++) {
      const almacen = resultado[i].piezas_entrada + resultado[i].piezas_salida;
    }
    return resultado;
  }

  async agregarProducto(producto: creacion_productos) {
    const agregarProducto = await this.productosRepository
      .save(this.productosRepository.create(producto))
      .then((res) => {
        if (res.id_creacion) {
          return {
            codigo: 'OK',
            detalle: '',
            mensaje: 'PRODUCTO CREADO CORRECTAMENTE.',
          };
        } else {
          return {
            codigo: 'ERROR',
            detalle: '',
            mensaje: 'A OCURRIDO UN ERROR AL CREAR PRODUCTO.',
          };
        }
      });
    return agregarProducto;
  }

  async consultarProductos() {
    const consultarProductos = await this.productosRepository.find();
    return consultarProductos;
  }

  async actualizarProducto(producto) {
    const actualizarProducto = await this.productosRepository
      .update(producto.id_creacion, producto)
      .then((res) => {
        if (res.affected > 0) {
          return {
            codigo: 'OK',
            detalle: '',
            mensaje: 'PRODUCTO ACTUALIZADO CORRECTAMENTE.',
          };
        } else {
          return {
            codigo: 'ERROR',
            detalle: '',
            mensaje: 'A OCURRIDO UN ERROR AL ACTUALIZAR PRODUCTO.',
          };
        }
      });
    return actualizarProducto;
  }

  async eliminaraProducto(id: number) {
    const eliminarProducto = await this.productosRepository
      .delete(id)
      .then((res) => {
        if (res.affected > 0) {
          return {
            codigo: 'OK',
            detalle: '',
            mensaje: 'PRODUCTO ELIMINADO CORRECTAMENTE.',
          };
        } else {
          return {
            codigo: 'ERROR',
            detalle: '',
            mensaje: 'A OCURRIDO UN ERROR AL ELIMINAR PRODUCTO.',
          };
        }
      });
    return eliminarProducto;
  }
}
