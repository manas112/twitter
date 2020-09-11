import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './index.css';
const TodoForm = ({ saveTodo }) => {
  
  
  const [value, setValue] = useState('');

  return (
    <form
         onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        setValue('');
      }}
    >
      <TextField
        variant="outlined"
        placeholder="What's Happening?"
        margin="normal"
        
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>

    
    
    
  );
};

export default TodoForm;