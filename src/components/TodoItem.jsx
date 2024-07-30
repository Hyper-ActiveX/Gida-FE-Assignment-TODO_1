import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} />
            <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
            <FontAwesomeIcon icon={faAngleUp} className={todo.completed ? 'completed-icon-up' : ''}/>
            <FontAwesomeIcon icon={faAngleDown} className={todo.completed ? 'completed-icon-down' : ''}/>
            <FontAwesomeIcon onClick={() => onDelete(todo.id)} icon={faTrashCan} />
        </div>
    );
};

export default TodoItem;
