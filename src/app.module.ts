import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './tasks/tasks.module';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
