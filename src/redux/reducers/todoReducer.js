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
    case actions.GET_TODOS_SUCCEEDED: // done
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    // get todo fail
    case actions.GET_TODOS_FAILED: // done
      return {
        message: action.message,
      };
    // add todo
    case actions.SET_TODO_SUCCEEDED: // done
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        loading: false,
      };
    // set todo fail
    case actions.SET_TODO_FAILED: // done
      return {
        message: action.message,
      };
    // edit todo success
    case actions.EDIT_TODO_SUCCEEDED:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
            };
          }
          return todo;
        }),
      };
    // edit todo fail (patch)
    case actions.EDIT_TODO_FAILED:
      return {
        message: action.message,
      };
    // delete todo success
    case actions.DELETE_TODO_SUCCEEDED: // done
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        loading: false,
      };
    // delete todo fail
    case actions.DELETE_TODO_FAILED: // done
      return {
        message: action.message,
      };
    // todo complete suceed
    case actions.COMPLETE_TODO_SUCCEEDED: // done
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) => {
          if (todo.id === action.updates.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    // todo complete faile
    case actions.COMPLETE_TODO_FAILED: // done
      return {
        message: action.message,
      };
    // default value
    default:
      return state;
  }
};
