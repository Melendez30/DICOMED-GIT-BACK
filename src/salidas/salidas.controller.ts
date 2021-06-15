import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { SalidasService } from './salidas.service';
import { CreateSalidaDto } from './dto/create-salida.dto';
import { UpdateSalidaDto } from './dto/update-salida.dto';
import { salidas } from './entities/salida.entity';

@Controller('salidas')
export class SalidasController {
  constructor(private readonly salidasService: SalidasService) {}

  // ESTE CREA UNA SALIDA
  // TIENES QUE MANDAR
  // 0) nombre
  // 1) codigo_barras
  // 2) descripcion
  // 3) labortorio
  // 4) clave_imss
  // 5) cliente
  // 6) lote
  // 7) caducidad
  // 8) fecha_salida
  // 9) piezas_salida
  @Post('agregar')
  @HttpCode(200)
  async agregarSalida(@Body() salida: salidas) {
    return this.salidasService.agregarSalida(salida);
  }

  // ESTE MANDA TODAS LAS SALIDAS
  @Post('todos')
  @HttpCode(200)
  consultarSalidas() {
    return this.salidasService.consultarSalidas();
  }

  // ESTE ACTUALIZAR UNA SALIDA
  @Post('actualizar')
  @HttpCode(200)
  actualizarEntrada(@Body() salida: salidas) {
    return this.salidasService.actualizarSalida(salida);
  }

  // ESTE ELIMINA UNA SALIDA
  @Post('eliminar')
  @HttpCode(200)
  eliminarSalida(@Body('id') id: any) {
    return this.salidasService.eliminarSalida(id);
  }

}
