# React Fruit Management App

A modern React application for managing fruits, built with Vite and Material UI. This frontend application connects to the FastAPI Fruits API to provide a complete CRUD interface.

## Features

- **Material UI Design**: Modern and responsive UI components
- **CRUD Operations**: Create, Read, Update, and Delete fruits
- **Error Handling**: Graceful error handling and recovery
- **Loading States**: Visual feedback during API operations
- **Form Validation**: Client-side validation for fruit names
- **Theming**: Customizable Material UI theme
- **Routing**: Single-page application routing

## Requirements

- Node.js 16+
- npm 8+

## Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at:
- http://localhost:5173

## Project Structure

```
frontend/
├── public/            # Static assets
├── src/
│   ├── api/           # API client configuration
│   ├── assets/        # Images and other assets
│   ├── components/    # Reusable components
│   ├── App.css        # Main styles
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── .eslintrc.js       # ESLint configuration
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies and scripts
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Testing

The application includes comprehensive error handling and can be tested by:
1. Simulating network errors
2. Testing form validation
3. Testing edge cases in the API


