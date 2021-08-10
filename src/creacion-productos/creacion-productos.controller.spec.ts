import { Test, TestingModule } from '@nestjs/testing';
import { CreacionProductosController } from './creacion-productos.controller';
import { CreacionProductosService } from './creacion-productos.service';

describe('CreacionProductosController', () => {
  let controller: CreacionProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreacionProductosController],
      providers: [CreacionProductosService],
    }).compile();

    controller = module.get<CreacionProductosController>(CreacionProductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
