
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transacao {
  @Prop({ required: true })
  descricao!: string;

  @Prop({ required: true, type: Number, min: 0 })
  valor!: number;

  @Prop({ required: true, enum: ['receita', 'despesa'] })
  tipo!: string;

  @Prop({ required: true })
  categoria!: string;

  @Prop({ required: true, type: Boolean })
  consumoConsciente!: boolean;
}

export type TransacaoDocument = Transacao & Document;

export const TransacaoSchema = SchemaFactory.createForClass(Transacao);
