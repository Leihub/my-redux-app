import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import VisibleTodoListBox from './container/VisibleTodoList'
import AddTodo from './container/AddTodo'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoListBox />
        <Footer />
      </div>
    );
  }
}

export default App;
