import { Test, TestingModule } from '@nestjs/testing';
import { EventAuditController } from './event-audit.controller';
import { EventAuditService } from './event-audit.service';

describe('EventAuditController', () => {
  let controller: EventAuditController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventAuditController],
      providers: [EventAuditService],
    }).compile();

    controller = module.get<EventAuditController>(EventAuditController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
