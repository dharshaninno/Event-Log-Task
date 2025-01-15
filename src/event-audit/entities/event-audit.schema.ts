import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EventAudit extends Document {
  @Prop({ required: true })
  trace_id: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  event: string;

  @Prop({
    required: true,
    get: function (this: EventAudit) {
      let eventDescription = '';
      switch (this.event) {
        case 'reseller_create':
          eventDescription = `${this.user} created a new reseller with email ${this.user}`;
          break;
        case 'reseller_update':
          eventDescription = `${this.user} updated reseller information with email ${this.user}`;
          break;
        case 'password_reset':
          eventDescription = `${this.user} reset their password with email ${this.user}`;
          break;
        case 'logout':
          eventDescription = `${this.user} logged out with email ${this.user}`;
          break;
        default:
          eventDescription = `${this.user} performed the event: ${this.event} with email ${this.user}`;
          break;
      }
      return eventDescription;
    },
  })
  description: string;

  @Prop({ type: Object, default: null })
  before_data?: Record<string, any>;

  @Prop({ type: Object, default: null })
  after_data?: Record<string, any>;

  @Prop({ type: Object, default: null })
  custom_attributes?: Record<string, any>;

  @Prop({ default: Date.now })
  created_at: Date;
}

export const EventAuditSchema = SchemaFactory.createForClass(EventAudit);
