import { ADD_NEW_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
    todo: [
      { task: 'Go Shopping', completed: true },
      { task: 'Go to the Bank', completed: false }
    ]
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            const newTask = { task: action.payload, completed: false };
            return {
                ...state,
                todo: [...state.todo, newTask]        
            }
        case TOGGLE_COMPLETED:
            return {
            ...state,
            todo: state.todo.map((task, index) => {
                if (action.payload === index) {
                return {
                    ...task,
                    completed: !task.completed
                };
                } else {
                return task;
                }
            })
    
            }
        default:
            return state;
    }
}

export default reducer;