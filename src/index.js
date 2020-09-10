import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import TodoForm from './TodoForm';
import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import TodoList from './TodoList';
import  DateTime  from './DateTime';
import Box from '@material-ui/core/Box';
import {useLocalState} from './hooks'


const App = () => {

  const [todos, setTodos] = useState([]);
  return (
    
    
      <div className="App">
        <img src="/images/twee.jpg"  alt="" />
      <Box bgcolor="info.main" m={-1} mb={4}>
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



