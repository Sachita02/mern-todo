import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import TodoApp from './TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for the app
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
