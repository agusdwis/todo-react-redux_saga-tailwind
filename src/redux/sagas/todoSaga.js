import { put, call, takeEvery, takeLatest } from "redux-saga/effects";

// import all actions
import actions from "../actions/todoAction";
import API from "../api/todoApi";

// get todos
function* getTodos() {
  try {
    yield put({ type: actions.SET_LOADING });

    const response = yield call(API.getAllTodos);

    yield put({ type: actions.GET_TODOS_SUCCEEDED, payload: response.data });
  } catch (err) {
    yield put({ type: actions.GET_TODOS_FAILED, message: err.message });
  }
}

function* createTodo({ payload }) {
  try {
    yield put({ type: actions.SET_LOADING });

    const newTodo = yield call(API.createNewTodo, payload);

    yield put({ type: actions.SET_TODO_SUCCEEDED, payload: newTodo });
  } catch (err) {
    yield put({ type: actions.SET_TODO_FAILED, message: err.message });
  }
}

function* deleteTodo({ payload }) {
  try {
    yield put({ type: actions.SET_LOADING });

    const todo = yield call(API.deleteExistedTodo, payload);

    yield put({ type: actions.DELETE_TODO_SUCCEEDED, payload: todo });
  } catch (err) {
    yield put({ type: actions.DELETE_TODO_FAILED, message: err.message });
  }
}

function* editTodo({ payload }) {
  try {
    yield put({ type: actions.SET_LOADING });

    const todo = yield call(API.editExistedTodo, payload);

    yield put({ type: actions.EDIT_TODO_SUCCEEDED, payload: todo });
  } catch (err) {
    yield put({ type: actions.EDIT_TODO_FAILED, message: err.message });
  }
}

function* completeTodo({ payload }) {
  try {
    yield put({ type: actions.SET_LOADING });

    const todo = yield call(API.completeExistedTodo, payload);

    yield put({ type: actions.COMPLETE_TODO_SUCCEEDED, payload: todo });
  } catch (err) {
    yield put({ type: actions.COMPLETE_TODO_FAILED, message: err.message });
  }
}

export default function* todoSaga() {
  yield takeEvery(actions.GET_TODOS_START, getTodos);
  yield takeLatest(actions.SET_TODO_START, createTodo);
  yield takeEvery(actions.DELETE_TODO_START, deleteTodo);
  yield takeEvery(actions.EDIT_TODO_START, editTodo);
  yield takeEvery(actions.COMPLETE_TODO_START, completeTodo);
}
