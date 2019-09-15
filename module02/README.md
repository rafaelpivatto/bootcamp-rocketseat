# Docker

docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

docker start database

docker stop database

# Sequelize

yarn sequelize migration:create --name=<migration-name>

yarn sequelize db:migrate

yarn sequelize db:migrate:undo

yarn sequelize db:migrate:undo:all
