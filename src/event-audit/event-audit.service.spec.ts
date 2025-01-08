import { Test, TestingModule } from '@nestjs/testing';
import { EventAuditService } from './event-audit.service';

describe('EventAuditService', () => {
  let service: EventAuditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventAuditService],
    }).compile();

    service = module.get<EventAuditService>(EventAuditService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
