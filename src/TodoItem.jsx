import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span 
        onClick={() => toggleTodo(todo.id)} 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.task}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">X</button>
    </li>
  );
};

export default TodoItem;
