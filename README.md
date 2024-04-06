
# Vue Todo

A simple Todo list app using the MEVN stack (MongoDB, Express, Vue, Node) with TypeScript and Vuetify, all running in Docker for easy setup and deployment.




## Features

- **Todo Management**: Easily add, edit, and delete todos.
- **Modern UI**: Built with Vue.js and Vuetify for a responsive and modern user interface.
- **Type Safety**: Uses TypeScript to enhance code reliability and maintainability.
- **Docker Integration**: Simplifies setup and deployment with Docker containers.


## Run Locally

Prerequisites: [Docker](https://www.docker.com/)

Clone the project

```bash
  git clone https://github.com/jeffnawroth/vue-todo
```

Go to the project directory

```bash
  cd vue-todo
```

Start up the application

```bash
  docker compose up
```

Visit [localhost](http://localhost)



## API Reference

#### Get all todos

```http
  GET /localhost:8080/todos
```

#### Get todo

```http
  GET /localhost:8080/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo to fetch |

#### Create todo

```http
  POST /localhost:8080/todos/
```

#### Update todo

```http
  PUT /localhost:8080/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo to update |

#### Delete todo

```http
  DELETE /localhost:8080/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo to delete |