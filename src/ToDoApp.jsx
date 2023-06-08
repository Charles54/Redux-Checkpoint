import React from 'react';
import { Container } from 'react-bootstrap';
import AddTask from './AddTask';
import ListTask from './ListTask';

const TodoApp = () => {
  return (
    <Container>
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
    </Container>
  );
};

export default TodoApp;
