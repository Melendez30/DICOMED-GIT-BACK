import { Module } from '@nestjs/common';
import { SalidasService } from './salidas.service';
import { SalidasController } from './salidas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { salidas } from './entities/salida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([salidas])],
  controllers: [SalidasController],
  providers: [SalidasService]
})
export class SalidasModule {}
