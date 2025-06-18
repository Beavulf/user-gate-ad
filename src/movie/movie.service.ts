import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieDTO } from './dto/movie.dto';

@Injectable()
export class MovieService {
    constructor (
        @InjectRepository(MovieEntity) private readonly movieRepository: Repository<MovieEntity>,
    ) {}

    async findAll():Promise<MovieEntity[]> {
        return this.movieRepository.find({order: {created_at: 'DESC'}});
    }

    async create(dto: MovieDTO):Promise<MovieEntity> {
        const movie = this.movieRepository.create(dto);
        return await this.movieRepository.save(movie);
    }

    async findById(id: string):Promise<MovieEntity> {
        const movie = await this.movieRepository.findOne({where: {id}});
        if (!movie) throw new NotFoundException();
        return movie;
    }

    async update(id: string, dto: MovieDTO):Promise<Boolean> {
        const movie = await this.findById(id);
        Object.assign(movie, dto);

        await this.movieRepository.save(movie);
        return true;
    }

    async delete(id: string):Promise<string> {
        const movie = await this.findById(id);
        await this.movieRepository.remove(movie);

        return movie.id;
    }
}
