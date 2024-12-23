import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Get all todos
export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}/todos`);
    return response.data;
  } catch (err) {
    console.error('Error fetching todos:', err);
    return [];
  }
};

// Add a new todo
export const addTodo = async (text) => {
  try {
    const response = await axios.post(`${API_URL}/todos`, { text });
    return response.data;
  } catch (err) {
    console.error('Error adding todo:', err);
    return null;
  }
};

// Delete a todo
export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/todos/${id}`);
    return response.data;
  } catch (err) {
    console.error('Error deleting todo:', err);
    return null;
  }
};
