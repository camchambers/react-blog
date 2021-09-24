# Blog
An example of a blog written in React with a MongoDB database inspired by the course [React: Creating and Hosting a Full-Stack Site](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site). This site was bootstraped with [Create React App](https://create-react-app.dev/). 

## Requirements
- NodeJS
- NPM
- MongoDB

## Setup
- Create an articles collection in MongoDB
- Run ```npm start``` in the blog-backend folder to start the local development server
- Visit http://localhost:8000 to view the site

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
