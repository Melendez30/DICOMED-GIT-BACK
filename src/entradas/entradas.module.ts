import { Module } from '@nestjs/common';
import { EntradasService } from './entradas.service';
import { EntradasController } from './entradas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entradas } from './entities/entrada.entity';

@Module({
  imports:[TypeOrmModule.forFeature([entradas])],
  controllers: [EntradasController],
  providers: [EntradasService]
})
export class EntradasModule {}
