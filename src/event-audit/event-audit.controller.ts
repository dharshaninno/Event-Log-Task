import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventAuditService } from './event-audit.service';
import { CreateEventAuditDto } from './dto/create-event-audit.dto';

@Controller('event-audit')
export class EventAuditController {
  constructor(private readonly eventAuditService: EventAuditService) {}

  @Post()
  async createEventLog(@Body() createEventAuditDto: CreateEventAuditDto) {
    console.log("check dto passing controller --> ",createEventAuditDto)
    return this.eventAuditService.createEventAuditLog(createEventAuditDto);
  }
  

  @Get()
  async getAllEventLog() {
    return this.eventAuditService.getAllEventLog();
  }
}

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.eventAuditService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateEventAuditDto: UpdateEventAuditDto) {
//     return this.eventAuditService.update(+id, updateEventAuditDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.eventAuditService.remove(+id);
//   }
// }
