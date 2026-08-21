# Restaurant Management API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)** for managing restaurants, menus, and user authentication.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Restaurants](#restaurants)
  - [Menu Management](#menu-management)
- [Authentication Middleware](#authentication-middleware)

---

## Features
- **User Authentication**: Secure user registration and login using JWT (JSON Web Tokens) and password hashing with `bcryptjs`.
- **Restaurant CRUD Operations**: Create, read, update, and delete restaurant listings.
- **Search & Filtering**: Query restaurants by `city` or `cuisine`, with pagination support (`page`, `limit`).
- **Top Rated Restaurants**: Quick endpoint to retrieve top-rated restaurants.
- **Menu Management**: Full CRUD operations for menu items linked to specific restaurants.
- **Request Logging**: Custom logging middleware for monitoring incoming requests.

---

## Tech Stack
- **Node.js**: Server runtime environment.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB & Mongoose**: Database and ODM library.
- **JSON Web Token (jwt)**: Authentication & Authorization.
- **bcryptjs**: Password hashing.

---

## Project Structure
```text
Antara Palwankar 150096725126/
├── config/
│   └── db.js                 # Database connection setup
├── controllers/
│   ├── authController.js     # User registration & login logic
│   ├── menuController.js     # Menu CRUD handlers
│   └── restaurantController.js # Restaurant CRUD handlers
├── middleware/
│   ├── auth.js               # JWT verification middleware
│   └── logger.js             # Request logging middleware
├── models/
│   ├── Menu.js               # Menu Mongoose Schema
│   ├── Restaurant.js         # Restaurant Mongoose Schema
│   └── User.js               # User Mongoose Schema
├── routes/
│   ├── authRoutes.js         # Auth routes (/register, /login)
│   ├── menuRoutes.js         # Menu routes
│   └── restaurantRoutes.js   # Restaurant routes
├── package.json
└── server.js                 # Express application entry point
```

---

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB server running locally or a MongoDB Atlas URI

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Antaraaaa14/Antara--assignment-3-restaurant-management-api.git
   cd "Antara--assignment-3-restaurant-management-api/Antara Palwankar 150096725126"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/restaurant_db
   JWT_SECRET=mysecretkey
   ```
4. Run the application:
   ```bash
   # Start in production mode
   npm start

   # Start in development mode (with nodemon)
   npm run dev
   ```

---

## API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/register` | Register a new user | No |
| `POST` | `/login` | User login (returns JWT token) | No |

### Restaurants
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/restaurants` | Get all restaurants (supports query filters) | No |
| `GET` | `/restaurants/top` | Get top-rated restaurants | No |
| `GET` | `/restaurants/:id` | Get details of a single restaurant | No |
| `POST` | `/restaurants` | Add a new restaurant | Yes |
| `PUT` | `/restaurants/:id` | Update restaurant details | Yes |
| `DELETE` | `/restaurants/:id` | Delete a restaurant | Yes |

### Menu Management
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/restaurants/:id/menu` | Get all menu items for a restaurant | No |
| `POST` | `/restaurants/:id/menu` | Add a menu item to a restaurant | Yes |
| `PUT` | `/menu/:id` | Update a menu item | Yes |
| `DELETE` | `/menu/:id` | Delete a menu item | Yes |

---

## Authentication Middleware
For routes marked as requiring authentication, include the JWT token in the `Authorization` header:

```http
Authorization: Bearer <your_jwt_token>
```
