// todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.description = action.payload.description;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

export const { addTodo, toggleTodo, editTodo, setFilter } = todosSlice.actions;

export const selectFilteredTodos = (state) => {
  const { todos, filter } = state.todos;
  if (filter === 'done') {
    return todos.filter((todo) => todo.isDone);
  } else if (filter === 'notDone') {
    return todos.filter((todo) => !todo.isDone);
  } else {
    return todos;
  }
};

export default todosSlice.reducer;
