## Installation
```bash
npm install 
```
## run server
```bash
grunt serve
```
## routes
```bash
'/login': 	show login page
'/logout': 	logout and redirect to '/'
'/new-post': 	show new-post page
'/edit-post': 	show edit-post page
'/posts': 	show all posts
'/': 	home page
```

## User API
```bash
'/api/user': 		User API
GET    '/api/user/:id': 	Get User by Id
POST   '/api/user': 	Add new user
PUT    '/api/user/:id': 	Update User by Id
DELETE '/api/user/:id': 	Delete User by Id 
```

## Posts API
```bash
'/api/posts':       	Posts API
GET    '/api/posts/': 	Get all Posts
POST   '/api/posts': 	Add new Post
GET    '/api/posts/:id': 	Get Post by Id
PUT    '/api/posts/:id': 	Update Post by Id
DELETE '/api/posts/:id': 	Delete Post by Id
```

## Comments API
```bash
'/api/comments':    	Comments API
POST   '/api/comments': 	Add new Comment
DELETE '/api/comments/:id': 	Delete Comment by id
```
