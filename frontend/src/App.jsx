import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import FruitList from './components/Fruits';
import AddFruitForm from './components/AddFruitForm';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorFallback from './components/ErrorFallback';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="App">
            <header className="App-header">
              <h1>Fruit Management System</h1>
            </header>
            <main className="App-main">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={
                    <>
                      <AddFruitForm />
                      <FruitList />
                    </>
                  } />
                </Routes>
              </Suspense>
            </main>
          </div>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;
