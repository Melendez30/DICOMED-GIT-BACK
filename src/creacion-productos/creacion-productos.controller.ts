import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreacionProductosService } from './creacion-productos.service';
import { CreateCreacionProductoDto } from './dto/create-creacion-producto.dto';
import { UpdateCreacionProductoDto } from './dto/update-creacion-producto.dto';
import { creacion_productos } from './entities/creacion-producto.entity';

@Controller('productos')
export class CreacionProductosController {
  constructor(
    private readonly creacionProductosService: CreacionProductosService,
  ) {}

  @Post('codigo/buscar')
  @HttpCode(200)
  async leerCodigoBarras(@Body('codigo') codigo: any) {
    return this.creacionProductosService.buscarCodigoDeBarrar(codigo);
  }

  @Post('')
  @HttpCode(200)
  tablaGeneral() {
    return this.creacionProductosService.tablaGeneral();
  }

  // ESTE CREA UN PRODUCTO
  // TIENES QUE MANDAR
  // 0) nombre
  // 1) codigo_barras
  // 2) descripcion
  // 3) laboratorio
  // 4) clave_imss
  // 5) ubicacion
  // 6) lote
  @Post('agregar')
  @HttpCode(200)
  crearProdcuto(@Body() producto: creacion_productos) {
    return this.creacionProductosService.agregarProducto(producto);
  }

  // ESTE MANDA TODOS LOS PRODUCTOS
  @Post('todos')
  @HttpCode(200)
  consultarProducto() {
    return this.creacionProductosService.consultarProductos();
  }

  // ESTE ACTUALIZA UN PROUCTO
  // TIENES QUE MANDAR
  // 1) id del producto al actualizar
  @Post('actualizar')
  @HttpCode(200)
  actualizrProducto(@Body() producto: creacion_productos) {
    return this.creacionProductosService.actualizarProducto(producto);
  }

  // ESTE ELIMINA UN PROUCTO
  // TIENES QUE MANDAR
  // 1) id del producto a eliminar
  @Post('eliminar')
  @HttpCode(200)
  eliminarProducto(@Body('id') id: any) {
    return this.creacionProductosService.eliminaraProducto(id);
  }
}
