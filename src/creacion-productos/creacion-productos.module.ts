import { Module } from '@nestjs/common';
import { CreacionProductosService } from './creacion-productos.service';
import { CreacionProductosController } from './creacion-productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { creacion_productos } from './entities/creacion-producto.entity';

@Module({
  imports:[TypeOrmModule.forFeature([creacion_productos])],
  controllers: [CreacionProductosController],
  providers: [CreacionProductosService]
})
export class CreacionProductosModule {}
