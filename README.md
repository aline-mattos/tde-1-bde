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

![image (1)](https://github.com/user-attachments/assets/799607d9-9dda-4189-a0c8-a0a6462d2e16)

O Banco de Dados “todo_list” foi criado com a tabela “Task”. Uma tarefa (task) contém: um ID auto incrementado ao ser criado, que também é a primary key; um título; uma descrição; e um booleano para saber se a tarefa foi completa ou não. Abaixo podemos ver que a lista de tarefas está vazia por enquanto.
![image (2)](https://github.com/user-attachments/assets/a38e0174-cb87-4adf-9406-ee7161968260)

### 2. Desenvolver uma aplicação cliente que se conecte ao banco de dados e realize operações básicas (CRUD): aplicação cliente em Nest.JS com os códigos abaixo.

A aplicação foi criada com o projeto intitulado “projeto-crud” no VS Code.
<img src="https://github.com/user-attachments/assets/10803433-922c-4657-a4b3-8a935f2465b2" alt="image (3)"height="300">
A pasta “tasks”foi criada e, dentro dela, outros arquivos para criar as tarefas e lidar com o CRUD no back end. Como a entidade de “task”, o controller, o service e os DTOs (Data Transfer Object).

#### Arquivos relacionados à tarefa:

```bash
$ npm install
```


- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).
