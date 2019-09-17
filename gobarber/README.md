# GoBarber

### Example learned application

Made in node, express, sequelize, jwt, yup, sucrase and some other stuff

### Requirements:

- [Node v10+](https://nodejs.org)
- [Yarn v1.17+](https://yarnpkg.com)
- [Docker 19+](https://docs.docker.com/install)

### To run database docker image

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

To start or stop container...

```
docker start|stop database
```

### To start

To install node dependencies

```
yarn install
```

To create database

```
yarn sequelize db:migrate
```

To start an application in dev mode

```
yarn dev
```

### To start in debug mode

- add in vscode launch.json

```json
"configurations": [
  {
    "type": "node",
    "request": "attach",
    "name": "Launch Program",
    "protocol": "inspector"
  }
]
```

Run:

```
yarn debug
```

And then, start debug (Launch Program)

### Some sequelize commands

To create a new migration

```
yarn sequelize migration:create --name=migration-name
```

To run migration

```
yarn sequelize db:migrate
```

To undo the last migration

```
yarn sequelize db:migrate:undo
```

To undo all migrations

```
yarn sequelize db:migrate:undo:all
```
