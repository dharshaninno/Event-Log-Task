import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EventAudit extends Document {
  @Prop({ required: true })
  event: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Object, default: null }) 
  custom_attributes?: Record<string, any>;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const EventAuditSchema = SchemaFactory.createForClass(EventAudit);