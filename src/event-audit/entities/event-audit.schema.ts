import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EventAudit extends Document {
  @Prop({ required: true })
  trace_id: string;

  @Prop({
    required: true,
    type: {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      email: { type: String, required: true },
    },
  })
  user: {
    first_name: string;
    last_name: string;
    email: string;
  };

  @Prop({ required: true })
  event: string;

  @Prop({ type: Object, default: null })
  before_data?: Record<string, any>;

  @Prop({ type: Object, default: null })
  after_data?: Record<string, any>;

  @Prop({ type: Object, default: null })
  custom_attributes?: Record<string, any>;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({
    required: true,
    get: function (this: EventAudit) {
      const name = `${this.user.first_name} ${this.user.last_name}`;
      const eventDescription =
        this.event === 'reseller_create'
          ? `${name} created a new reseller with email ${this.user.email}`
          : `${name} performed the event: ${this.event} with email ${this.user.email}`;

      return eventDescription;
    },
  })
  description: string;
}

export const EventAuditSchema = SchemaFactory.createForClass(EventAudit);
