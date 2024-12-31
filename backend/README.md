# FastAPI Fruits API

A robust RESTful API for managing fruits, built with FastAPI. This API provides CRUD operations for managing a list of fruits with proper validation and error handling.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete fruits
- **Validation**: Strict validation for fruit names
- **Error Handling**: Proper HTTP status codes and error messages
- **CORS Support**: Configured for frontend integration
- **Documentation**: Automatic OpenAPI/Swagger documentation
- **In-Memory Storage**: Simple storage for demonstration purposes

## Requirements

- Python 3.8+
- FastAPI
- Uvicorn
- Pydantic

## Installation

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
4. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
5. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Server

Start the development server:
```bash
uvicorn main:app --reload
```

The API will be available at:
- http://localhost:8000

## API Documentation

The API provides automatic documentation:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## API Endpoints

### GET /fruits
Retrieve all fruits

### POST /fruits
Add a new fruit

### PUT /fruits/{fruit_id}
Update an existing fruit

### DELETE /fruits/{fruit_id}
Delete a fruit

## Testing

You can test the API using the included `test_main.http` file in VSCode with the REST Client extension.


