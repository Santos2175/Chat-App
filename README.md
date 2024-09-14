# Connectify - [Live Demo](https://chat-app-qo06.onrender.com)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Contact](#contact)

## Introduction

This project is a full-stack web application that allows users to manage tasks, providing both a frontend for users to interact with and a backend that stores user data. The application demonstrates CRUD operations, authentication, and dynamic updates using MERN stack.

## Features

- User authentication (Signup/Login)
- Create, Read, and Delete (CRUD) operations
- Protected routes with JWT
- Responsive UI using React
- API integration with Express and MongoDB
- Error handling and form validation
- Uses socket-io for real-time communication
- Uses context api for authorization and zustand for conversations storage at frontend

  ## Technologies Used

### Frontend:
- **React** - For building the user interface
- **Tailwind CSS** - For styling

### Backend:
- **Node.js** - For backend server
- **Express.js** - For API and routing
- **Socket-io** For real-time communication
- **MongoDB** - As the database
- **Mongoose** - For MongoDB object modeling

### Others:
- **JWT** - For user authentication
- **fetch** - For API requests
- **Bcrypt.js** - For password hashing

## Prerequisites

Before starting, ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **MongoDB** (Locally or MongoDB Atlas)
- **Git** (for version control)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Santos2175/Chat-App.git

2. In the current directory where there is package.json, write following code for installing backend dependencies
   ```bash
   npm install

3. For frontend dependencies
   ```bash
   cd frontend
   npm install

### Running the project
1. For backend, in the current root folder
   ```bash
   npm run server

2. For frontend.
   ```bash
   cd frontend
   npm run dev

## Environment Variables

You will need to set up the following environment variables in the `.env` file for the backend:

PORT=<br>
JWT_SECRET=<br>
MONGO_DB_URI=

## Contact

For any questions or feedback:
- **Santosh Gurung** - [santoshgurung2175@gmail.com](mailto:santoshgurung2175@gmail.com)
- **GitHub** - [https://github.com/Santos2175](https://github.com/Santos2175)



