import { AddTodo, DeleteTodo, Reset } from "./types";

export const addTodo = (todoObject) => (dispatch) => {
  dispatch({
    type: AddTodo,
    payload: todoObject,
  });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DeleteTodo,
    payload: id,
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: Reset,
  });
};
