import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

// get all todos
export const getAllTodos = async () => {
  const todos = await axios.get("todos?_limit=10");

  return todos;
};

// create new todo
export const createNewTodo = async (title) => {
  const todo = await axios.post("todos", {
    title,
    completed: false,
  });

  return todo;
};

// edit exist todo
export const editExistedTodo = async (id, title) => {
  const todo = await axios.patch(`todos/${id}`, {
    title,
  });

  return todo;
};

// delete exist todo
export const deleteExistedTodo = async (id) => {
  await axios.delete(`todos/${id}`);

  return id;
};

// complete exist todo
export const completeExistedTodo = async (id) => {
  const todo = await axios.patch(`todos/${id}`, {
    completed: true,
  });

  return todo;
};

export default {
  getAllTodos,
  createNewTodo,
  editExistedTodo,
  deleteExistedTodo,
  completeExistedTodo,
};
