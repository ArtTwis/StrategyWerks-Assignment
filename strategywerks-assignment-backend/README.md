# StrategyWerks-Assignment

Problem Statement: Advanced Front-End Development with Virtual Scrolling

# Backend Project

## Overview

This is a backend project developed using Node.js and the Express.js framework. It integrates with MongoDB for database management and uses Mongoose as the Object Data Modeling (ODM) library to facilitate data interaction.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM library for MongoDB and Node.js, providing a schema-based solution to model application data.

## Installation

To get started with this project, follow these steps:

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/ArtTwis/StrategyWerks-Assignment.git
    ```

2.  **Navigate to the Project Directory**

    ```bash
    cd StrategyWerks-Assignment/strategywerks-assignment-backend
    ```

3.  **Install Dependencies**

    ```bash
    npm install
    ```

4.  **Setup Environment Variables**

> Create a .env file in the root directory and configure your environment variables

    ```bash
    PORT=8000
    CORS_ORIGIN=\*
    MONGODB_URI=mongodb+srv://mongodb:mongodb@mongodbcluster.cib51al.mongodb.net
    STRATEGY_WERKS_API_VERSION=v1
    ```

5.  **Start the Server**

    ```bash
    npm run start
    ```

## API Documentation

### Routes

#### GET http://localhost:8000/api/v1/route/movies?\_limit=6&\_page=1

- Description: Retrieves a list of movies from the database with optional pagination.
- Route: `/api/v1/route/movies`
- Method: GET
- Query Parameters:
  - `limit` (optional): Number of movies to return per page. Default is 10
  - `page` (optional): Page number to fetch. Default is 1
- Response:
  ```
    {
  "statusCode": 201,
  "data": [
    {
      "_id": "573a1390f29313caabcd42e8",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTY.jpg",
      "title": "The Great Train Robbery",
      "fullplot": "Among the earliest existing films in American cinema",
      "released": "1903-12-01T00:00:00.000Z",
      "directors": [
        "Edwin S. Porter"
      ],
      "rated": "TV-G",
      "lastupdated": "2015-08-13 00:27:59.177000000",
      "year": 1903,
      "imdb": {
        "rating": 7.4,
        "votes": 9847,
        "id": 439,
        "_id": "66c65bd9bdf550294c20afa6"
      },
      "countries": [
        "USA"
      ],
      "type": "movie",
    },
    ...
  ],
  "message": "Record retrieved successfully..",
  "success": true
  }
  ```
