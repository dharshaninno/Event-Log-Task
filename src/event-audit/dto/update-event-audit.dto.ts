import { PartialType } from '@nestjs/mapped-types';
import { CreateEventAuditDto } from './create-event-audit.dto';

export class UpdateEventAuditDto extends PartialType(CreateEventAuditDto) {}
