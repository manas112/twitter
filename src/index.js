import ReactDOM from 'react-dom';
import './index.css';
import TodoForm from './TodoForm';
import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import TodoList from './TodoList';
import  DateTime  from './DateTime';


const App = () => {

  const [todos, setTodos] = useState([]);
  return (
    <div1 className="container">
      <div className="App">
      <Typography component="h1" variant="h2">
        Tweets
      </Typography>

      <TodoForm 
      saveTodo={(todoText) => {
        const trimmedText = todoText.trim();
    
        if (trimmedText.length > 0) {
          setTodos([...todos, trimmedText]);
        }
      }} />
      <TodoList
       todos={todos}
       deleteTodo={(todoIndex) => {
         const newTodos = todos.filter((_, index) => index !== todoIndex);
     
         setTodos(newTodos);
       }}
        />

        
    </div>
    </div1>
    
  );
};
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

