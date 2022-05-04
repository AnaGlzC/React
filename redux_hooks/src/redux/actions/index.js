import { ADD_TODO, DELETE_TODO } from "./types";

export const addTodoAction = (todo) => ({
    type: "ADD_TODO",
    payload: todo,
  });
  
  export const deleteTodoAction = todoId => ({
      type: 'DELETE_TODO',
      payload: todoId
  })