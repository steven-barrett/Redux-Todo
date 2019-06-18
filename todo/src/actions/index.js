export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const addNewTodo = newTodo => {
  console.log(newTodo);
  return {
    type: ADD_NEW_TODO,
    payload: newTodo
  };
};

export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const toggleCompleted = index => {
  console.log(index);
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};
