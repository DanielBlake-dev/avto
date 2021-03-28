import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResourceDocument = Resource & Document;

@Schema()
export class Resource {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: Number })
  is_available: number;

  @Prop({ type: String })
  color: string;

  @Prop({ type: String })
  size: string;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
