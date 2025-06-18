import { Controller, Get, Post, Query, Body, Headers, Req, Param, Put, Delete } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDTO } from './dto/movie.dto';

@Controller({
  path: 'movie',
  host: ['localhost']
})
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll() {
    return await this.movieService.findAll();
  }

  @Post()
  async create(@Body() dto: MovieDTO) {
    return await this.movieService.create(dto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.movieService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: MovieDTO) {
    return await this.movieService.update(id, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.movieService.delete(id);
  }
}
