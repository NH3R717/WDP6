npm i debug express morgan morgan-debug pg sequelize sequelize-cli uuid supertest

npm i --save-dev nodemon

note multiple files, check react props types

npx sequelize model:create --name user --attributes id:uuid,username:string,password:string,avatar:blob,city:string,stateId:integer,tagsId:integer,postId:integer,commentsId:string --force

npx sequelize model:create --name post --attributes id:UUID,title:string,content:text,commentCount:integer,userId:integer,tagsId:string,totalVotes:integer,commentsId:string --force

npx sequelize model:create --name tags --attributes id:UUID,name:string,icon:blob,count:integer --force

npx sequelize model:create --name comments --attributes id:UUID,content:string,userName:string,count:integer --force

npx sequelize model:create --name state --attributes id:UUID,state:string --force

npx sequelize migration:generate --name users-post-relationship --force

npx sequelize migration:generate --name tags-users-relationship --force

npx sequelize migration:generate --name tags-post-relationship --force

/ `npx sequelize db:create`

/ `npx sequelize db:migrate`

/ test 

[x] addComment( { postId, text } )
[x] addToWatched(tagId)
[x] addVote( { postId, direction } ) // example direction: 1 for up vote, -1 for down vote
[x] deletePost(postId)
[x] fetchPost(postId)
[x] fetchPosts( { type } || { tag } ) // example type: 'popular'
[x] fetchUserPosts()
[x] fetchWatching()
[x] removeFromWatched(tagId)
fetchUser(userId)