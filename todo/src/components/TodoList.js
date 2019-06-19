import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleCompleted } from '../actions';

import './TodoList.css';

class TodoList extends React.Component {
    state = {
        newTask: ''
    }

handleChanges = e => {
    this.setState({ newTask: e.target.value });
    };

addTask = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTask);
    this.setState({ newTask: '' });
}
    
toggleCompleted = (e, index) => {
    e.preventDefault();
    this.props.toggleCompleted(index);
}
    render() {
        return (
            <React.Fragment>
            <div className="todo-list">
            {this.props.todo.map((todo, index) => (
            <h4 onClick={e => this.toggleCompleted(e, index)} key={index}>
              <p className='todo-task'>{todo.task}</p>
              <p className='todo-completed'>{`Completed:  ${todo.completed.toString()}`}</p>
              <hr />
            </h4>
          ))}
            </div> <br />
            <div className='input-div'> 
            <input
            type="task"
            value={this.state.newTask}
            onChange={this.handleChanges}
            placeholder="Add new task"
            />
            <button onClick={this.addTask}>Add Task</button>
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
      todo: state.todo
    };
  };
  
  export default connect(
    mapStateToProps,
    { addNewTodo, toggleCompleted }
  )(TodoList);
  