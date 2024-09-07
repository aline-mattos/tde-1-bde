import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './task.service'
import { Task } from './task.service';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-tasks.dto';

@Controller('Task')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    console.log(createTaskDto)
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post()
  update(@Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.tasksService.update(updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.tasksService.remove(id);
  }
}
