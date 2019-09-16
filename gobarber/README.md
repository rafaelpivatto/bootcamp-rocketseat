### Requirements:

- Node v10+
- Yarn v1.17+
- Docker 19+

# Docker

- docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

- docker start database

To stop...

- docker stop database

# start dev

- yarn install

- yarn dev

# start debugging

- launch.json (vscode)

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

- yarn debug

# Sequelize commands

To create a new migration

- yarn sequelize migration:create --name=migration-name

To run migration

- yarn sequelize db:migrate

To undo the last migration

- yarn sequelize db:migrate:undo

To undo all migrations

- yarn sequelize db:migrate:undo:all
