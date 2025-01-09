export class CreateEventAuditDto {
  event: string;
  user: string;
  description: string;
  custom_attributes?: Record<string, any>;
}
