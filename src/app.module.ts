import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EventAuditModule } from './event-audit/event-audit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot("mongodb+srv://dharshan:dharshan@cluster0.4wdqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
    EventAuditModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor() {
  //   console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debugging log
  // }
}