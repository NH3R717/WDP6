npm i debug express morgan morgan-debug pg sequelize sequelize-cli uuid supertest

npm i --save-dev nodemon

note multiple files, check react props types

npx sequelize model:generate --name users --attributes avatar:string,userId:UUID,city:string,state:string,tags:int --force

npx sequelize model:create --name posts --attributes name:string,password:string,userId:UUID --force

npx sequelize model:create --name tags --attributes name:string,password:string,userId:UUID --force

npx sequelize model:create --name COMMENTS --attributes name:string,password:string,userId:UUID --force
