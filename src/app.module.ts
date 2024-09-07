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
