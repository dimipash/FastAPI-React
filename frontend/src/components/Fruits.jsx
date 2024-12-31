import React, { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import api from "../api";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddFruitForm from './AddFruitForm';

const Fruits = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const { showBoundary } = useErrorBoundary();

  const fetchFruits = async () => {
    try {
      setLoading(true);
      const response = await api.get('/fruits');
      setFruits(response.data.fruits);
      setError(null);
    } catch (error) {
      setError('Failed to fetch fruits');
      showBoundary(error);
    } finally {
      setLoading(false);
    }
  };

  const addFruit = async (fruitName) => {
    try {
      await api.post('/fruits', { name: fruitName });
      await fetchFruits();
    } catch (error) {
      setError('Failed to add fruit');
      showBoundary(error);
    }
  };

  const updateFruit = async (index) => {
    try {
      await api.put(`/fruits/${index}`, { name: editValue });
      setEditIndex(null);
      await fetchFruits();
    } catch (error) {
      setError('Failed to update fruit');
      showBoundary(error);
    }
  };

  const deleteFruit = async (index) => {
    try {
      await api.delete(`/fruits/${index}`);
      await fetchFruits();
    } catch (error) {
      setError('Failed to delete fruit');
      showBoundary(error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  const handleCloseError = () => {
    setError(null);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AddFruitForm addFruit={addFruit} />
      </Grid>
      
      {fruits.map((fruit, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              {editIndex === index ? (
                <div>
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => updateFruit(index)}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
              ) : (
                <Typography variant="h6" component="div">
                  {fruit.name}
                </Typography>
              )}
              <div>
                <IconButton 
                  aria-label="edit" 
                  onClick={() => {
                    setEditIndex(index);
                    setEditValue(fruit.name);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton 
                  aria-label="delete" 
                  onClick={() => deleteFruit(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Fruits;
