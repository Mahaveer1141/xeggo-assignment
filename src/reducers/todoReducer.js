import { AddTodo, DeleteTodo, Reset } from "../actions/types";

const initState = {
  todos: [],
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case AddTodo:
      return { ...state, todos: [...state.todos, action.payload] };
    case DeleteTodo:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload),
      };
    case Reset:
      return initState;
    default:
      return state;
  }
};
