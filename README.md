# FastAPI + React Full Stack Application

A complete full-stack application built with FastAPI for the backend and React for the frontend. This project demonstrates modern web development practices with a focus on clean architecture and best practices.

## Technology Stack

### Backend
- **FastAPI**: Modern, fast (high-performance) web framework
- **Pydantic**: Data validation and settings management
- **Uvicorn**: ASGI server for Python web applications

### Frontend
- **React**: JavaScript library for building user interfaces
- **Vite**: Next generation frontend tooling
- **Material UI**: React component library for faster and easier web development
- **React Router**: Declarative routing for React

## Features

### Backend
- RESTful API with CRUD operations
- Data validation and error handling
- CORS support for frontend integration
- Automatic API documentation (Swagger/ReDoc)
- In-memory storage (for demonstration purposes)

### Frontend
- Modern Material UI design
- Responsive and accessible components
- Form validation and error handling
- Loading states and feedback
- Theming and customization
- Single-page application routing

## Installation

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Backend
Start the FastAPI server:
```bash
uvicorn main:app --reload
```
The API will be available at http://localhost:8000

### Frontend
Start the development server:
```bash
npm run dev
```
The application will be available at http://localhost:5173

## Project Structure

```
fastapi-react/
├── backend/            # FastAPI backend
│   ├── main.py         # Main application file
│   ├── requirements.txt# Python dependencies
│   └── README.md       # Backend documentation
├── frontend/           # React frontend
│   ├── public/         # Static assets
│   ├── src/            # Application source code
│   ├── package.json    # Frontend dependencies
│   └── README.md       # Frontend documentation
└── README.md           # Main project documentation
```


