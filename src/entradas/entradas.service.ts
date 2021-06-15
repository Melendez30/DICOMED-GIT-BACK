import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { entradas } from './entities/entrada.entity';

@Injectable()
export class EntradasService {

  constructor(
    @InjectRepository(entradas)
    private entradasRepository: Repository<entradas>,
  ){}

  async agregarEntrada(entrada: entradas) {
    const agregarEntrada = await this.entradasRepository.save(this.entradasRepository.create(entrada)).then((res) => {
      if(res.id_entrada){
        return {
          codigo:'OK',
          detalle:'',
          mensaje:'ENTRADA REGISTRADA CORRECTAMENTE.'
        }
      }else{
        return {
          codigo:'ERROR',
          detalle:'',
          mensaje:'A OCURRIDO UN ERROR AL REGISTRAR ENTRADA.'
        }
      }
    });
    return agregarEntrada;
  }

  async consultarEntradas() {
    const consultarEntradas = await this.entradasRepository.find();
    return consultarEntradas;
  }

  async actualizarEntrada(entrada: entradas) {
    const actualizarEntrada = await this.entradasRepository.update(entrada.id_entrada, entrada).then((res) => {
      if(res.affected > 0){
        return {
          codigo:'OK',
          detalle:'',
          mensaje:'ENTRADA ACTUALIZADA CORRECTAMENTE.'
        }
      }else{
        return {
          codigo:'ERROR',
          detalle:'',
          mensaje:'A OCURRIDO UN ERROR AL ACTUALIZAR ENTRADA.'
        }
      }
    });
    return actualizarEntrada;
  }

  async eliminarEntrada(id: number) {
    const eliminarEntrada = await this.entradasRepository.delete(id).then((res) => {
      if(res.affected > 0){
        return {
          codigo:'OK',
          detalle:'',
          mensaje:'ENTRADA ELIMINADA CORRECTAMENTE.'
        }
      }else{
        return {
          codigo:'ERROR',
          detalle:'',
          mensaje:'A OCURRIDO UN ERROR AL ELIMINAR ENTRADA.'
        }
      }
    });
    return eliminarEntrada;
  }
}
