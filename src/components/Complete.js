/**
 * 单个todo
 */

import React, { Component } from 'react';

const Todo = ({ todo, onDelete }) => {

    if (todo && todo.isCompleted) {
        return (<div>
            <label>
                <span>
                    {todo.value}
                </span>
            </label>
            <input type="button" value="Delete" onClick={onDelete} />
        </div>);
    }
    else {
        return null;
    }

}

export default Todo;

