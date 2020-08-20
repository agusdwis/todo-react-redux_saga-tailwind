import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import actions from "../redux/actions/todoAction";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import CardModal from "../components/AddTodo";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Home = ({
  todo: { loading, todos },
  getTodos,
  completeTodo,
  setTodo,
  deleteTodo,
  editTodo,
}) => {
  const [theme, setTheme] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(0);
  const [edit, setEdit] = React.useState(0);

  React.useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = () => {
    setTheme(!theme);
  };

  const complete = (id) => {
    completeTodo(id);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setValue("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setTodo(value);
    setValue("");
    setModal(false);
  };

  const handleOpen = (id) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(0);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
    setOpen(0);
  };

  const handleEdit = (id) => {
    setEdit(id);
    setOpen(0);
  };

  const handleEditSubmit = (id) => {
    editTodo(id, value);
    setValue("");
    setEdit(0);
  };

  return (
    <React.Fragment>
      <div className={theme ? "theme-dark" : "theme-light"}>
        {modal ? (
          <CardModal
            value={value}
            handleChange={handleChange}
            handleClose={handleCloseModal}
            handleSubmit={handleSubmit}
          />
        ) : null}
        <div className="container bg-default min-w-full min-h-screen">
          <nav>
            <Navbar theme={theme} change={changeTheme} />
          </nav>

          <header className="bg-secondary shadow">
            <div className="flex items-center justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-primary">
                Todo App
              </h1>
              <Fab
                onClick={handleOpenModal}
                color="secondary"
                className="focus:outline-none mouse"
              >
                <AddIcon />
              </Fab>
            </div>
          </header>

          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="border-1 border-dashed bg-secondary border-gray-200 rounded-lg h-96">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {todos &&
                      todos
                        .filter((item) => item.completed === false)
                        .map((todo, index) => (
                          <TodoList
                            key={index}
                            todo={todo}
                            open={open}
                            edit={edit}
                            value={value}
                            loading={loading}
                            complete={(e) => complete(e)}
                            handleClose={handleClose}
                            handleOpen={(e) => handleOpen(e)}
                            handleDelete={(e) => handleDelete(e)}
                            handleEdit={(e) => handleEdit(e)}
                            handleChange={handleChange}
                            handleEditSubmit={handleEditSubmit}
                          />
                        ))}
                    {todos &&
                      todos
                        .filter((item) => item.completed === true)
                        .map((todo, index) => (
                          <TodoList
                            key={index}
                            todo={todo}
                            complete={(e) => complete(e)}
                          />
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

// props validation
Home.propTypes = {
  todos: PropTypes.array,
  loading: PropTypes.bool,
  getTodos: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  setTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

// get state to props
const mapStateToProps = (state) => ({
  todo: state.todoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch({ type: actions.GET_TODOS_START }),
  completeTodo: (id) =>
    dispatch({ type: actions.COMPLETE_TODO_START, payload: id }),
  setTodo: (title) =>
    dispatch({ type: actions.SET_TODO_START, payload: title }),
  deleteTodo: (id) =>
    dispatch({ type: actions.DELETE_TODO_START, payload: id }),
  editTodo: (id, title) =>
    dispatch({ type: actions.EDIT_TODO_START, id, title }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
