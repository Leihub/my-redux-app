import React, { Component } from 'react';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import {toggleTodo} from '../redux/action'

const getVisibleTodos = (todos,filter) => {
  switch(filter){
    case 'SHOW_COMPLETED':
      return todos.filter(t=>t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t=> !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }

}
const mapStateToProps = (state) => {
  return {
    todos:getVisibleTodos(state.todos,state.visibilityFilter)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick:id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoListBox = connect(mapStateToProps,mapDispatchToProps)(TodoList) 

export default VisibleTodoListBox;