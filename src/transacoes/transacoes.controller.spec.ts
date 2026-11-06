
import { Test, TestingModule } from '@nestjs/testing';
import { TransacoesController } from './transacoes.controller';
import { TransacoesService } from './transacoes.service';

describe('TransacoesController', () => {
  let controller: TransacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransacoesController],
      providers: [
        {
          provide: TransacoesService,
          useValue: {
            criar: jest.fn(),
            listar: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TransacoesController>(
      TransacoesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
