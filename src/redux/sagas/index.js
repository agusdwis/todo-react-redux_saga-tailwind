import { spawn } from "redux-saga/effects";

// Sagas
import todoSaga from "./todoSaga";

// Export root sags
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!");

  yield spawn(todoSaga);
}
