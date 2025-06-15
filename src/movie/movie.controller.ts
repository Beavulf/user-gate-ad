import { Controller, Get, Post, Query, Body, Headers, Req } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller({
  path: 'movie',
  host: ['localhost']
})
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  test(@Query() query: any){
    return `Film ${JSON.stringify(query)}`
  }

  @Post()
  create(@Body() body: {title: string}) {
    return `Body ${JSON.stringify(body)}`
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    return headers
  }

  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: string) {
    return userAgent
  }

  @Get('request')
  getRequestDetails(@Req() req: Request) {
    return req.headers
  }
}
