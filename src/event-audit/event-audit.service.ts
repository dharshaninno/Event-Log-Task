import { Injectable } from '@nestjs/common';
import { CreateEventAuditDto } from './dto/create-event-audit.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventAudit } from './entities/event-audit.schema';

@Injectable()
export class EventAuditService {
  constructor(@InjectModel(EventAudit.name)private eventAuditModel: Model<EventAudit>,
) {}

  async createEventAuditLog(createEventAuditDto: CreateEventAuditDto): Promise<EventAudit> {
    const eventLog = new this.eventAuditModel(createEventAuditDto);
    return eventLog.save();
  }

  async getAllEventLog(): Promise<EventAudit[]> {
    return this.eventAuditModel.find().exec();
  }
}
