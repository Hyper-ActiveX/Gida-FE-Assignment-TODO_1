import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <TodoList />
            </main>
        </div>
    );
};

export default App;
