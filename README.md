# Blog
An example of a blog using a MERN STACK (MongoDB, Express, React, and Node).

Inspired by the course [React: Creating and Hosting a Full-Stack Site](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site). 

This site was bootstraped with [Create React App](https://create-react-app.dev/). 

## Requirements
- NodeJS
- NPM
- MongoDB


## Installation

1. Clone the repo
```
git clone git@github.com:camchambers/react-blog.git
```
2. Change into react-blog-react-backend directory
```
cd react-blog\react-backend
```
3. Install required packages
```
npm install
```
4. Start MongoDB (ensure it is installed first)
```
mongod
```
5. Import the articles database or create new articles within the database

6. Run the project
```
npm start
```
7. Visit the site by navigating to http://localhost:8000 

## Endpoints

The following curl commands can be used to query/test endpoints.

### Upvote Endpoint
```
curl --header "Content-Type: application/json"  --request POST  http://localhost:8000/api/articles/learn-react/upvote
```
### Comment Endpoint
```
curl --header "Content-Type: application/json"  --request POST  http://localhost:8000/api/articles/learn-react/add-comment --data '{ "username": "Sam", "text": "I love this article!"} 
```
