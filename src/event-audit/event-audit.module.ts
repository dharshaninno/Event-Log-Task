import { Module } from '@nestjs/common';
import { EventAuditService } from './event-audit.service';
import { EventAuditController } from './event-audit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventAudit, EventAuditSchema } from './entities/event-audit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: EventAudit.name, schema: EventAuditSchema }]),
  ],
  controllers: [EventAuditController],
  providers: [EventAuditService],
})
export class EventAuditModule {}
