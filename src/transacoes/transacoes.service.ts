
import {
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Transacao,
  TransacaoDocument,
} from './schemas/transacao.schema';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectModel(Transacao.name)
    private readonly transacaoModel: Model<TransacaoDocument>,
  ) {}

  async criar(dados: {
    descricao: string;
    valor: number;
    tipo: string;
    categoria: string;
    consumoConsciente: boolean;
  }): Promise<Transacao> {

    if (
      typeof dados?.descricao !== 'string' ||
      !dados.descricao.trim() ||
      typeof dados.valor !== 'number' ||
      !Number.isFinite(dados.valor) ||
      dados.valor <= 0 ||
      !['receita', 'despesa'].includes(dados.tipo) ||
      typeof dados.categoria !== 'string' ||
      !dados.categoria.trim() ||
      typeof dados.consumoConsciente !== 'boolean'
    ) {
      throw new BadRequestException(
        'Dados invalidos. Verifique os campos da transacao.',
      );
    }

    const transacao = new this.transacaoModel(dados);
    return await transacao.save();
  }

  async listar() {
    const historico = await this.transacaoModel.find().exec();

    let saldoTotal = 0;
    let totalDespesas = 0;
    let totalGastoImpulso = 0;

    for (const transacao of historico) {
      if (transacao.tipo === 'receita') {
        saldoTotal += transacao.valor;
      }

      if (transacao.tipo === 'despesa') {
        saldoTotal -= transacao.valor;
        totalDespesas += transacao.valor;

        if (transacao.consumoConsciente === false) {
          totalGastoImpulso += transacao.valor;
        }
      }
    }

    return {
      historico,
      metricas: {
        saldoTotal,
        totalDespesas,
        totalGastoImpulso,
      },
    };
  }
}
