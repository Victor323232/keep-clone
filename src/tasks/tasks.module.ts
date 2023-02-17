import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TaskProviders } from './entities/task.providers';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [
    ...TaskProviders,
    TasksService,
  ],
})
export class TaskModule {}