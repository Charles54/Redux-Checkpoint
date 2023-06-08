import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredTodos } from './todosSlice';
import Task from './Task';

const ListTask = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <div>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          description={todo.description}
          isDone={todo.isDone}
        />
      ))}
    </div>
  );
};

export default ListTask;