import React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="100vh"
      p={3}
    >
      <Alert 
        severity="error" 
        variant="filled"
        sx={{ mb: 2, width: '100%', maxWidth: '600px' }}
      >
        Something went wrong: {error.message}
      </Alert>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={resetErrorBoundary}
      >
        Try Again
      </Button>
    </Box>
  );
};

export default ErrorFallback;
