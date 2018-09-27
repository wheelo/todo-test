import React, { Component } from 'react';
import Todo from '../components/Todo.js';
import Complete from '../components/Complete.js';


import PropTypes from 'prop-types';

class Todos extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { todos } = this.props;
        const TodosComp = todos.map((todo, index) => {
            return <Todo todo={todo} key={index} toggleCheckboxChange={() => this.props.onComplete(index)} />;
        });

        const CompleteComp = todos.map((todo, index) => {
            return <Complete todo={todo} key={index} onDelete={() => this.props.onDelete(index)} />;
        });

        return (
            <div>
                {TodosComp}
                完成的
                {CompleteComp}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    onComplete: PropTypes.func.isRequired
}


export default Todos;