# Express API Project

A real-world style Node.js + Express REST API project.

This project has:

- Express server setup
- Separate routes, controllers, services, middleware, config, and data folders
- Three main APIs: users, products, and todos
- Dummy business data for users and products
- External open-source API call for todos using JSONPlaceholder
- Fallback todo data if the external API is unavailable
- Basic request logging, 404 handling, and centralized error handling

## Requirements

- Node.js 18 or newer

## Install

```bash
npm install
```

## Run

```bash
npm start
```

For development with auto-restart:

```bash
npm run dev
```

The server runs on:

```text
http://localhost:5000
```

## Project Structure

```text
.
├── index.js
├── package.json
└── src
    ├── app.js
    ├── config
    │   └── env.js
    ├── controllers
    │   ├── healthController.js
    │   ├── productController.js
    │   ├── todoController.js
    │   └── userController.js
    ├── data
    │   ├── products.js
    │   ├── todos.js
    │   └── users.js
    ├── middleware
    │   ├── errorHandler.js
    │   ├── notFoundHandler.js
    │   └── requestLogger.js
    ├── routes
    │   ├── healthRoutes.js
    │   ├── index.js
    │   ├── productRoutes.js
    │   ├── todoRoutes.js
    │   └── userRoutes.js
    └── services
        ├── productService.js
        ├── todoService.js
        └── userService.js
```

## APIs

### Root

```text
GET /
```

Returns project info and available endpoints.

### Health

```text
GET /api/health
```

Returns server status, uptime, and timestamp.

### Users

```text
GET /api/users
GET /api/users/:id
```

Optional filters:

```text
GET /api/users?role=editor
GET /api/users?active=true
```

### Products

```text
GET /api/products
GET /api/products/:id
```

Optional filters:

```text
GET /api/products?category=electronics
GET /api/products?inStock=true
```

### Todos

```text
GET /api/todos
```

Calls:

```text
https://jsonplaceholder.typicode.com/todos?_limit=5
```

If the public API fails, fallback dummy data is returned.

## Environment Variables

```text
PORT=5000
TODO_API_URL=https://jsonplaceholder.typicode.com/todos?_limit=5
```

## Quick Test URLs

```text
http://localhost:5000/
http://localhost:5000/api/health
http://localhost:5000/api/users
http://localhost:5000/api/users/1
http://localhost:5000/api/products
http://localhost:5000/api/products/101
http://localhost:5000/api/todos
```
