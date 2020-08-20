import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import actions from "../redux/actions/todoAction";
import Navbar from "../components/Navbar";

const Home = ({ todo: { loading, todos }, getTodos }) => {
  const [theme, setTheme] = React.useState(true);

  React.useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <React.Fragment>
      <div className={theme ? "theme-dark" : "theme-light"}>
        <div className="container bg-default min-w-full min-h-screen">
          <nav>
            <Navbar theme={theme} change={changeTheme} />
          </nav>

          {/* <div className="p-4 m-4 bg-primary rounded text-center">
            <h1 className="text-2xl font-bold text-white">Todo List App</h1>
          </div> */}

          {/* <div className="px-4">
            <Switcher value={theme} changeTheme={changeTheme} />
          </div> */}

          {/* <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 class="text-3xl font-bold leading-tight text-gray-900">
                Todo List
              </h1>
            </div>
          </header>

          <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                  <div className="p-4 m-4">
                    <ol>
                      {todos &&
                        todos.map((todo, index) => (
                          <TodoList key={index} todo={todo} />
                        ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </main> */}
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
};

// get state to props
const mapStateToProps = (state) => ({
  todo: state.todoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch({ type: actions.GET_TODOS_START }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
