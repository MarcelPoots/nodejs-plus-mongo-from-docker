#A sample application in NodeJs that runs with MongoDb in a local docker.

start docker with command:

docker-compose up --build

intialize the project after cloing from Git:

npm i

If you want to build the project from scratch:

npm init -y

npm i express mongoose

npm i --save-dev nodemon dotenv

create a .env file with content:

DATABASE_URL=mongodb://localhost/testdb

then run application with:

npm run devStart
