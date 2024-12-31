import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
  Stack
} from '@mui/material';
import { useErrorBoundary } from 'react-error-boundary';

const AddFruitForm = ({ addFruit }) => {
  const [fruitName, setFruitName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { showBoundary } = useErrorBoundary();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!fruitName.trim()) {
      setError('Fruit name cannot be empty');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await addFruit(fruitName);
      setFruitName('');
    } catch (error) {
      setError('Failed to add fruit');
      showBoundary(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{ 
        maxWidth: '500px',
        margin: '0 auto',
        padding: 2
      }}
    >
      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Fruit Name"
          variant="outlined"
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
          error={!!error}
          helperText={error}
          disabled={loading}
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading || !fruitName.trim()}
          startIcon={loading ? <CircularProgress size={20} /> : null}
        >
          {loading ? 'Adding...' : 'Add Fruit'}
        </Button>

        {error && (
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        )}
      </Stack>
    </Box>
  );
};

export default AddFruitForm;
