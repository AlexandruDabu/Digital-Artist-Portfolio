# Portfolio Management Application

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Backend Installation (NestJS)](#backend-installation-nestjs)
   - [Frontend Installation (React)](#frontend-installation-react)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Testing](#testing)

## Introduction
This is a simple web application for managing a portfolio of works for a digital artist. The application allows the artist to add, update, and delete works from the portfolio. Artists can also upload images and add links to their works.

## Features
- User-friendly UI/UX design.
- CRUD operations for managing portfolio works.
- Image upload functionality using Cloudinary.
- Option to show/hide works in the portfolio.
- Responsive design for all screen sizes using MUI React.
- Link to client websites.
- Testing to ensure error-free functionality.

## Technology Stack
- **Frontend:** React + TSX
- **Backend:** NestJS
- **Database:** PostgreSQL
- **Styling:** MUI React + CSS

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/)
- [Cloudinary](https://cloudinary.com/) account (for image uploads)

### Backend Installation (NestJS)
1. Clone the repository:
   ```bash
   git clone https://github.com/username/portfolio-management.git
   cd portfolio-management/backend
2. Install backend dependencies:
    npm install
3. Set up .env variables:
    ```bash
    DB_USERNAME=your_db_username
    DB_PASSWORD=your_db_password
    DB_HOST=your_db_host
    DB_PORT=your_db_port
    DB_DATABASE=your_db_name
4. Run the NestJS dev server:
    npm run start:dev

### Frontend Installation (React)
1. Navigate to frontend
    cd ../frontend
2. Install frontend dependencies:
    npm install
3. Set up .env variables:
    ```bash
    VITE_CLOUDINARY_NAME=your_cloudinary_name
    VITE_UPLOAD_PRESET=your_upload_preset
4. Run the React dev server:
    npm run start:dev

### Testing
1. Navigate to backend
    cd ../backend
2. Run the tests
    npm run test:e2e
