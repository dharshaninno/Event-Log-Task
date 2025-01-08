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
    console.log("check dto passing in service",createEventAuditDto)
    console.log("check eventlog service",eventLog);
    return eventLog.save();
  }

  async getAllEventLog(): Promise<EventAudit[]> {
    return this.eventAuditModel.find().exec();
  }
}




//   findOne(id: number) {
//     return `This action returns a #${id} eventAudit`;
//   }

//   update(id: number, updateEventAuditDto: UpdateEventAuditDto) {
//     return `This action updates a #${id} eventAudit`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} eventAudit`;
//   }
// }
