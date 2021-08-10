import { Test, TestingModule } from '@nestjs/testing';
import { CreacionProductosService } from './creacion-productos.service';

describe('CreacionProductosService', () => {
  let service: CreacionProductosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreacionProductosService],
    }).compile();

    service = module.get<CreacionProductosService>(CreacionProductosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
