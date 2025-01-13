export class CreateEventAuditDto {
  trace_id: string;

  user: {
    first_name: string; 
    last_name: string; 
    email: string; 
  };

  event: 'login' | 'logout' | 'password_reset' | 'create';

  description: string;

  before_data?: Record<string, any>;

  after_data?: Record<string, any>;

  custom_attributes?: Record<string, any>;
}
