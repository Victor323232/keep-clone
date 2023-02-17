import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TaskProviders } from './entities/task.providers';
import { TasksService } from './tasks.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...TaskProviders,
    TasksService,
  ],
})
export class TaskModule {}