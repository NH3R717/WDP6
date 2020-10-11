npm i debug express morgan morgan-debug pg sequelize sequelize-cli uuid supertest

npm i --save-dev nodemon

note multiple files, check react props types

<!-- migration reset / undo -->

npx sequelize model:create --name user --attributes id:uuid,username:string,password:string,avatar:blob,city:string,stateId:integer,tagsId:integer,postId:integer,commentsId:string --force

npx sequelize model:create --name post --attributes id:UUID,title:string,content:text,commentCount:integer,userId:integer,tagsId:integer,totalVotes:integer,commentsId:integer --force

npx sequelize model:create --name tags --attributes id:UUID,name:string,icon:blob,count:integer --force

npx sequelize model:create --name comments --attributes id:UUID,content:string,userName:string,count:integer --force

npx sequelize model:create --name state --attributes id:UUID,state:string --force

npx sequelize migration:generate --name user-post-relationship

npx sequelize migration:generate --name user-comments-relationship

npx sequelize migration:generate --name user-tags-relationship

npx sequelize migration:generate --name post-tags-relationship

npx sequelize migration:generate --name post-comments-relationship

npx sequelize migration:generate --name user-state-relationship

/ `npx sequelize db:migrate:undo:all`
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

update – migrations / models (*)

