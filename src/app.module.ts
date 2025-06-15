import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [TaskModule, MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
