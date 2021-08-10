import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { EntradasService } from './entradas.service';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { entradas } from './entities/entrada.entity';

@Controller('entradas')
export class EntradasController {
  constructor(private readonly entradasService: EntradasService) {}

  // ESTE CREA UNA ENTRADA
  // TIENES QUE MANDAR
  // 0) nombre
  // 1) descripcion
  // 2) laboratorio
  // 3) clave_imss
  // 4) proveedor
  // 5) lote
  // 6) caducidad
  // 7) fecha_entrada
  // 8) piezas_entrada
  // 9) codigo de barras
  @Post('agregar')
  @HttpCode(200)
  crearEntrada(@Body() entrada: entradas) {
    return this.entradasService.agregarEntrada(entrada);
  }

  // ESTE MANDA TODAS LAS ENTRADAS
  @Post('todos')
  @HttpCode(200)
  consultarProductos() {
    return this.entradasService.consultarEntradas();
  }

  // ESTE ACTUALIZA UNA ENTRADA
  // TIENES QUE MANDAR
  // id de la entrada a actualizar
  @Post('actualizar')
  @HttpCode(200)
  actualizarEntrada(@Body() entrada: entradas) {
    return this.entradasService.actualizarEntrada(entrada);
  }

  // ESTE ELIMINA UNA ENTRADA
  // TIENES QUE MANDAR
  // id de la entrada a eliminar
  @Post('eliminar')
  @HttpCode(200)
  eliminarProducto(@Body('id') id: any) {
    return this.entradasService.eliminarEntrada(id);
  }

}
