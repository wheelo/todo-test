import React, { Component } from 'react';
import Todos from './container/Todos';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: ''
    }
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      value
    });
  }

  onComplete = index => {
    const { todos } = this.state;

    if (index >= 0) {
      this.setState({
        todos: [...todos.slice(0, index), { value: todos[index].value, isCompleted: true }, ...todos.slice(index + 1)]
      });
    }
    
  }

  onAdd = () => {
    const { value } = this.state;
    if (value) {
      this.setState(({ todos }) => {
        return {
          todos: [...todos, { isCompleted: false, value }]
        };
        console.log('todos:', todos);
      });
    }
  }

  onDelete = index => {
    const { todos } = this.state;

    if (index >= 0) {
      this.setState({
        todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
      });
    }
  }

  render() {
    const { value, todos } = this.state;

    return (
      <div className="App">
        <input type="text" value={value} onChange={this.onChange} />
        <input disabled={!value} type="button" value="Add" onClick={this.onAdd} />
        <Todos todos={todos} onComplete={this.onComplete} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
