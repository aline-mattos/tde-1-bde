import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private repo: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.repo.create(createTaskDto);
    const savedTask = await this.repo.save(task);
    return savedTask;
  }
  async findAll(): Promise<Task[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Task> {
    return this.repo.findOneBy({ id });
  }

  async update(updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.repo.update(updateTaskDto.id, updateTaskDto);
    return this.findOne(updateTaskDto.id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
export { Task };

