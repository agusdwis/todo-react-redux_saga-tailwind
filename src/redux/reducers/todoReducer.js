import actions from "../actions/todoAction";

// define states
const initialState = {
  loading: false,
  todos: [],
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    // set loading
    case actions.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    // get todos success
    case actions.GET_TODOS_SUCCEEDED:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    // get todo fail
    case actions.GET_TODOS_FAILED:
      return {
        message: action.message,
      };
    // add todo
    case actions.SET_TODO_SUCCEEDED:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        loading: false,
      };
    // set todo fail
    case actions.SET_TODOS_FAILED:
      return {
        message: action.message,
      };
    // edit todo success
    case actions.EDIT_TODO_SUCCEEDED:
      return {
        ...state,
        todos: state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              ...actions.updates,
            };
          }
          return todo;
        }),
      };
    // edit todo fail (patch)
    case actions.EDIT_TODOS_FAILED:
      return {
        message: action.message,
      };
    // delete todo success
    case actions.DELETE_TODO_SUCCEEDED:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        loading: false,
      };
    // delete todo fail
    case actions.DELETE_TODOS_FAILED:
      return {
        message: action.message,
      };
    // todo complete fail
    case actions.COMPLETE_TODO_FAILED:
      return {
        message: action.message,
      };
    // default value
    default:
      return state;
  }
};
