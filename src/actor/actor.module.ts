import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { ActorEntity } from './entities/actor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from 'src/movie/movie.module';

@Module({
  imports: [MovieModule],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
