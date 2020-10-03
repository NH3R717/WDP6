npm i debug express morgan morgan-debug pg sequelize sequelize-cli uuid supertest

npm i --save-dev nodemon

note multiple files, check react props types

npx sequelize model:generate --name user --attributes id:uuid,username:string,password:string,avatar:string,city:string,state:string,tags:array --force

npx sequelize model:generate --name post --attributes id:UUID,title:string,content:string,commentCount:integer,user:array,tags:array,votes:array,comment:array --force

npx sequelize model:generate --name tags --attributes id:UUID,tags:string --force

npx sequelize model:generate --name comments --attributes id:UUID,comments:array --force

npx sequelize migration:generate --name users-entries-relationship -- force
