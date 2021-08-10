import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { entradas } from 'src/entradas/entities/entrada.entity';
import { Repository } from 'typeorm';
import { CreateSalidaDto } from './dto/create-salida.dto';
import { UpdateSalidaDto } from './dto/update-salida.dto';
import { salidas } from './entities/salida.entity';

@Injectable()
export class SalidasService {

  constructor(
    @InjectRepository(salidas)
    private salidasRepository: Repository<salidas>
  ){}

  async agregarSalida(salida: salidas) {
    const agregarSalida = await this.salidasRepository.save(this.salidasRepository.create(salida)).then((res) => {
      if(res.id_salida){
        return {
          codigo:'OK',
          detalle:'',
          mensaje:'SALIDA REGISTRADA CORRECTAMENTE.'
        }
      }else{
        return {
          codigo:'ERROR',
          detalle:'',
          mensaje:'A OCURRIDO UN ERROR AL REGISTRAR SALIDA.'
        }
      }
    });
    return agregarSalida;
  }

  async consultarSalidas() {
    const consultarSalidas = await this.salidasRepository.find();
    return consultarSalidas;
  }

  async actualizarSalida(salida: salidas) {
    const actualizarSalida = await this.salidasRepository.update(salida.id_salida, salida).then((res) => {
      if(res.affected) {
        return {
          codigo:'OK',
          detalle:'',
          mensaje:'SALIDA ACTUALIZADA CORRECTAMENTE.'
        }
      }else{
        return {
          codigo:'ERROR',
          detalle:'',
          mensaje:'A OCURRIDO UN ERROR AL ACTUALIZAR SALIDA.'
        }
      }
    });
    return actualizarSalida;
  }

  async eliminarSalida(id: number) {
    const eliminarSalida = await this.salidasRepository.delete(id).then((res) => {
      if(res.affected > 0){
        return {
          codigo:'OK',
          detalle:'',
          mensaje:'SALIDA ELIMINADA CORRECTAMENTE.'
        }
      }else{
        return {
          codigo:'ERROR',
          detalle:'',
          mensaje:'A OCURRIDO UN ERROR AL ELIMINAR SALIDA.'
        }
      }
    });
    return eliminarSalida;
  }
}
