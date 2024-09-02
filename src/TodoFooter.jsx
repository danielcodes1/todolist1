import React from 'react';

const TodoFooter = ({ clearCompleted }) => {
  return (
    <div className="todo-footer">
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoFooter;

