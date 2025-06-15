import { Injectable } from '@nestjs/common';
import { TaskService } from 'src/task/task.service';

@Injectable()
export class MovieService {
    constructor (private readonly taskService: TaskService) {}
}
