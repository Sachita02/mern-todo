import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodoApp.css'; // Import the CSS file

const TodoApp = () => {
    // State variables
    const [todos, setTodos] = useState([]);  // To store fetched todos
    const [todo, setTodo] = useState('');    // To store new todo input

    // Fetch todos from the backend when the component mounts
    useEffect(() => {
        axios.get('http://localhost:5000/api/todos')
            .then(response => {
                setTodos(response.data);  // Store todos in state
            })
            .catch(err => console.log('Error fetching todos:', err));
    }, []); // Empty array ensures this runs only once after the component mounts

    // Function to add a new todo
    const addTodo = () => {
        if (todo.trim()) { // Check if the input is not empty or just spaces
            axios.post('http://localhost:5000/api/todos', { text: todo })
                .then(response => {
                    setTodos([...todos, response.data]);  // Update todos list with the new todo
                    setTodo('');  // Clear the input field
                })
                .catch(err => console.log('Error adding todo:', err));
        }
    };

    // Function to delete a todo
    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/api/todos/${id}`)
            .then(() => {
                // Remove the deleted todo from the todos list
                setTodos(todos.filter(todo => todo._id !== id));
            })
            .catch(err => console.log('Error deleting todo:', err));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}  // Update input value on change
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add Todo</button>

            {/* Render the list of todos */}
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        {todo.text}  {/* Display todo text */}
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
