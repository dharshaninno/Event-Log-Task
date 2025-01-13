import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventAuditService } from './event-audit.service';
import { CreateEventAuditDto } from './dto/create-event-audit.dto';

@Controller('event-audit')
export class EventAuditController {
  constructor(private readonly eventAuditService: EventAuditService) {}

  @Post()
  async createEventLog(@Body() createEventAuditDto: CreateEventAuditDto) {
    return this.eventAuditService.createEventAuditLog(createEventAuditDto);
  }
  
  @Get()
  async getAllEventLog() {
    return this.eventAuditService.getAllEventLog();
  }
}

