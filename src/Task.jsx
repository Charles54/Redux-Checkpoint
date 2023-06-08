import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from './todosSlice';
import { Form } from 'react-bootstrap';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({
      id
    }));
  };

  const handleEdit = (e) => {
    const newDescription = e.target.value;
    dispatch(editTodo({
      id,
      description: newDescription
    }));
  };

  return (
    <Form.Group className="mb-3">
      <Form.Check
        type="checkbox"
        checked={isDone}
        onChange={handleToggle}
        label={description}
      />
      <Form.Control
        type="text"
        value={description}
        onChange={handleEdit}
      />
    </Form.Group>
  );
};

export default Task;