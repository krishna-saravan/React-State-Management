import React from 'react'
import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from './TodoSlice'

const TodoList = () => {
  const idRef = useRef(1);
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        dispatch(addTodo({ id: idRef.current++, text: newTodo }));
        setNewTodo('');
      }
    };
  
    const handleDeleteTodo = (id) => {
      dispatch(deleteTodo(id));
    };
  
    const handleEditTodo = (id, newText) => {
      dispatch(editTodo({ id, text: newText }));
    };
  
    return (
      <div>
        <div>
          <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.id} - 
              {todo.text}
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              <button onClick={() => handleEditTodo(todo.id, prompt('Edit todo', todo.text))}>Edit</button>
            </li>
          ))}
        </ul>
        
      </div>
    );
  };

  export default TodoList;