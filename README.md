Estudante: Aline Belomo de Mattos

## Projeto de Arquitetura Cliente-Servidor para um Sistema de Banco de Dados

**Objetivo**: Desenvolver e configurar uma arquitetura cliente-servidor para um banco de dados relacional usando MySQL ou PostgreSQL.

**Tarefas**:
1. Configurar o servidor de banco de dados em uma máquina virtual ou servidor local.
2. Desenvolver uma aplicação cliente que se conecte ao banco de dados e realize operações básicas (CRUD).
3. Implementar a comunicação entre cliente e servidor usando SQL para interagir com o banco de dados.

**Entrega**: Relatório com a configuração realizada, código-fonte da aplicação cliente e demonstração funcional.

Configuração realizada: criação de um projeto em nest.js na máquina local e o banco de dados MySQL no MySQL Workbench. A aplicação é uma lista de tarefas.

### 1. Configurar o servidor de banco de dados em uma máquina virtual ou servidor local: Banco de dados MySQL.

<img src="https://github.com/user-attachments/assets/799607d9-9dda-4189-a0c8-a0a6462d2e16" height="400">

O Banco de Dados “todo_list” foi criado com a tabela “Task”. Uma tarefa (task) contém: um ID auto incrementado ao ser criado, que também é a primary key; um título; uma descrição; e um booleano para saber se a tarefa foi completa ou não. Abaixo podemos ver que a lista de tarefas está vazia por enquanto.

<img src="https://github.com/user-attachments/assets/a38e0174-cb87-4adf-9406-ee7161968260" height="90">

### 2. Desenvolver uma aplicação cliente que se conecte ao banco de dados e realize operações básicas (CRUD): aplicação cliente em Nest.JS com os códigos abaixo.

A aplicação foi criada com o projeto intitulado “projeto-crud” no VS Code.

<img src="https://github.com/user-attachments/assets/10803433-922c-4657-a4b3-8a935f2465b2" height="500">

A pasta “tasks”foi criada e, dentro dela, outros arquivos para criar as tarefas e lidar com o CRUD no back end. Como a entidade de “task”, o controller, o service e os DTOs (Data Transfer Object).

#### Arquivos relacionados à tarefa:

##### projeto-crud\src\tasks\task.entity.ts

```bash
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ default: false })
  is_done: boolean;
}
```

##### projeto-crud\src\tasks\task.service.ts

```bash
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
```

##### projeto-crud\src\tasks\task.controller.ts

```bash
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
```
##### projeto-crud\src\tasks\task.module.ts

```bash
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksService } from './task.service';
import { TasksController } from './task.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
```
##### projeto-crud\src\tasks\create-task.dto.ts

```bash
export class CreateTaskDto {
    title: string;
    description: string;
    is_done: boolean;
  }
```

##### projeto-crud\src\tasks\update-tasks.dto.ts

```bash
export class UpdateTaskDto {
    id: number;
    title: string;
    description: string;
    is_done: boolean;
  }
```

![image (4)](https://github.com/user-attachments/assets/3dff52b7-260a-46b8-a5bd-45314550b7a5)
Acima, o projeto rodando.

### 3. Implementar a comunicação entre cliente e servidor usando SQL para interagir com o banco de dados.

Em src no projeto temos “app.modules.ts”que é onde a conexão com o banco de dados foi criada.

##### projeto-crud\src\app.module.ts

```bash
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity'; // Ajuste o caminho conforme necessário
import { TasksModule } from './tasks/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'senha1234',
      database: 'todo_list',
      entities: [Task],
      synchronize: true,
      logging: true,
    }),
    TasksModule,
  ],
})
export class AppModule {}
```

## Demonstração Funcional:

