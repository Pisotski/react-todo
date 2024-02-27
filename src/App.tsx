import * as React from 'react';
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => (
  <div className="body-wrapper">
    <h1>Todo List</h1>
    <AddTodoForm />
    <TodoList />
  </div>
)

export default App