import React, { useState } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './TodoList.css';
import InputTask from './InputTask';
import SignupModal from './SignUp/SignupModal'; // Import the SignupModal component

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track if user is logged in
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility

  // Function to fetch the first 20 todos
  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const initialTodos = response.data.slice(0, 20); // Fetch only the first 20 todos
      setTodos(initialTodos);
      localStorage.setItem('todos', JSON.stringify(initialTodos));
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Function to handle signup
  const handleSignup = async () => {
    setLoggedIn(true); // Update logged-in status
    await fetchTodos(); // Fetch first 20 todos when signed up
  };

  const addTodo = async () => {
    if (newTodoTitle.trim() === '') return;

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title: newTodoTitle, completed: false });
      const newTodo = response.data;
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setNewTodoTitle(''); // Clear the input field
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className='todo-body'>
      <div className='welcomeDiv'>
        <div className='welcome'>
          <h2>Hello,</h2>
          <p>Get started by creating your first checklist.</p>
        </div>
      </div>

      <div className='container'>
        <div className="todo-list">
          <div className='todo-head'>Design System</div>
          <div className='listItems'>
            {loggedIn ? (
              todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggleComplete={toggleComplete} />
              ))
            ) : (
              <p>Please sign up to see your tasks.</p>
            )}
            {loggedIn && <InputTask newTodoTitle={newTodoTitle} setNewTodoTitle={setNewTodoTitle} />}
            {loggedIn && (
              <div className="add-and-pagination">
                <div className='pagination'>👁 Completed 1 of 6</div>
                <button className='addTodo' onClick={addTodo}>+ Add Task</button>
              </div>
            )}
          </div>
        </div>
        {!loggedIn && (
          <div className="signup">
            <p>Sign up to unlock recurring tasks, publishing, collaborating and more.</p>
            <button onClick={handleSignup}>Sign up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
