/**
 * 单个todo
 */

import React, { Component } from 'react';

const Todo = ({ todo, toggleCheckboxChange }) => {
    if (todo && todo.value && (todo.isCompleted === false)) {
    return (<div>
        <label>
            <input
                type="checkbox"
                value={todo.value}
                checked={todo.isCompleted}
                onChange={toggleCheckboxChange}
            />
            {todo.value}
        </label>
    </div>);
    }
    else {
        return null;
    }
}

export default Todo;

