import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CheckoutDocument = Checkout & mongoose.Document;

@Schema()
export class Checkout {
  @Prop([{ type: mongoose.SchemaTypes.ObjectId, ref: 'Resource' }])
  resourceId: string;

  @Prop({ type: Number })
  count: number;

  @Prop({ type: Number })
  total: number;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  phone: string;

  @Prop({ type: String })
  city: string;

  @Prop({ type: String })
  street: string;

  @Prop({ type: String })
  house: string;
}

export const CheckoutSchema = SchemaFactory.createForClass(Checkout);
