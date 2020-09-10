import ReactDOM from 'react-dom';
import './index.css';
import TodoForm from './TodoForm';
import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import TodoList from './TodoList';
import  DateTime  from './DateTime';
import Box from '@material-ui/core/Box';
import { positions } from '@material-ui/system';


const App = () => {

  const [todos, setTodos] = useState([]);
  return (
    
    
      <div className="App">
      <Box bgcolor="info.main" m={-4} mb={2}>
      <Typography component="h1" variant="h2">
        Twitter
      </Typography>
      </Box>
      
      <hi className="container">Date</hi>
        <DateTime/>
        

        
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

    
  );
};
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

