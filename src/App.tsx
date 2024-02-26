import * as React from 'react';
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

// @Ethan I'm going to use sudo code to discuss questions/topics that come up while i'm coding.
// I do understand that it is not a conventional way of communication or using sudo code
// please let me know how to leave small questions for discuss as such.

// [TO THINK ABOUT] 
// @Ethan functional declaration cs functional expression
// i do know the main different is hoisting, meaning that JS engine will
// put in memory(initialize) the function
// in the real world is there any use cases you may come across?
// when it does make sense to put it in the global scope?

// example below is function expression. function expression is not hoisted.
const App = () => (
  <div className="body-wrapper">
    <h1>Todo List</h1>
    <AddTodoForm />
    <TodoList />
  </div>
)

export default App