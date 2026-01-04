# Simple Book Tracking API
This project implements a basic CRUD (Create, Read, Update, Delete) REST API using Node.js and Express.js to manage book records.

## Features
- Add a new book
- View all books
- View a book by ID
- Update book details
- Delete a book
- Update multiple books
- Delete multiple books

## Technologies Used
- Node.js
- Express.js
- Postman

## How to Run

Install dependencies:
```bash
npm install
```
## Start the server:
```bash
node index.js
```

## API Endpoints
- POST /books – Add a new book
- GET /books – Get all books
- GET /books/:id – Get book by ID
- PUT /books/:id – Update book
- DELETE /books/:id – Delete book

## Testing
All CRUD operations were tested using Postman by sending HTTP requests to the respective endpoints.
The database operations were verified using MongoDB Compass.

## Notes
- MongoDB must be running locally on port 27017.
- MongoDB Compass is used only for visualization and verification.
- Book records are stored in the libraryDB database under the books collection.
