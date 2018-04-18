import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.js'

class TodoList extends Component {
  render() {
    let { todos, onTodoClick } = this.props
    return (
      <ul>
        {todos.map((item,index)=>{
          return <Todo onClick={ () => onTodoClick(item.id) } key={ item.id } { ...item }></Todo>
        })}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos:PropTypes.arrayOf(
    PropTypes.shape({
      completed:PropTypes.bool.isRequired,
      text:PropTypes.string.isRequired,
      id:PropTypes.number.isRequired
    })
  ),
  onTodoClick:PropTypes.func.isRequired,
};

export default TodoList;