# Blog
An example of a blog written in React with a MongoDB database. 

## Start Server
npx babel-node src/server.js

## Setup
Both the front end (React) and the backend (Node.js) need to be running to work.
- run "yarn start" in blog-backend directory
- run "yarn start" in blog directory

## Endpoints

### Query Upvote Endpoint using CURL
curl --header "Content-Type: application/json"  --request POST  http://localhost:8000/api/articles/learn-react/upvote

### Query Comment Endpoint using CURL
curl --header "Content-Type: application/json"  --request POST  http://localhost:8000/api/articles/learn-react/add-comment --data '{ "username": "me", "text": "I love this article again! wooo"} '
