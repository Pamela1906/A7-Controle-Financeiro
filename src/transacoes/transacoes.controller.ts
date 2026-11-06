
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';

@Controller('transacoes')
export class TransacoesController {
  constructor(
    private readonly transacoesService: TransacoesService,
  ) {}

  @Post()
  async criar(@Body() dados: {
    descricao: string;
    valor: number;
    tipo: string;
    categoria: string;
    consumoConsciente: boolean;
  }) {
    return this.transacoesService.criar(dados);
  }

  @Get()
  async listar() {
    return this.transacoesService.listar();
  }
}
