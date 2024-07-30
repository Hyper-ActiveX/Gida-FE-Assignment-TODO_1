import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './InputTask.css';

const InputTask = ({ newTodoTitle, setNewTodoTitle }) => {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <span><input
                type='text'
                className='inputText'
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
            /></span>
            <FontAwesomeIcon icon={faAngleUp} className='completed-icon-up1' />
            <FontAwesomeIcon icon={faAngleDown} className='completed-icon-down1' />
            <FontAwesomeIcon icon={faTrashCan} className='delete' />
        </div>
    );
};

export default InputTask;
