import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreacionProductosModule } from './creacion-productos/creacion-productos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { creacion_productos } from './creacion-productos/entities/creacion-producto.entity';
import { EntradasModule } from './entradas/entradas.module';
import { entradas } from './entradas/entities/entrada.entity';
import { SalidasModule } from './salidas/salidas.module';
import { salidas } from './salidas/entities/salida.entity';
import { join } from 'path'
import { ServeStaticModule } from '@nestjs/serve-static';
import { ExcelModule } from './excel/excel.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist','frontend')
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'admin',
      database: 'dicomed',
      entities: [
        creacion_productos,
        entradas,
        salidas],
      synchronize: false,
      autoLoadEntities: false,
    }),
    CreacionProductosModule,
    EntradasModule,
    SalidasModule,
    ExcelModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
