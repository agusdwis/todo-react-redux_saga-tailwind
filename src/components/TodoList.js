import React from "react";
import PropTypes from "prop-types";

import Fab from "@material-ui/core/Fab";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SaveIcon from "@material-ui/icons/Save";

export default function TodoList({
  todo,
  complete,
  open,
  edit,
  value,
  loading,
  handleOpen,
  handleClose,
  handleDelete,
  handleEdit,
  handleChange,
  handleEditSubmit,
}) {
  return (
    <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4 md:h-40 grid grid-cols-12">
        <div onClick={handleClose} className="col-span-10 text-sm mb-2">
          {edit !== todo.id ? (
            <p onDoubleClick={(e) => handleEdit(todo.id)} className="mouse">
              {todo.title}
            </p>
          ) : (
            <textarea
              onChange={handleChange}
              value={value === "" ? todo.title : value}
              className="max-w-full h-32 resize border rounded focus:outline-none focus:shadow-outline"
            />
          )}
        </div>
        <div
          className={`${
            todo.completed ? "hidden" : null
          } relative inline-block text-left col-span-2`}
        >
          {edit !== todo.id ? (
            <button
              onClick={(e) => handleOpen(todo.id)}
              className="mouse focus:outline-none"
            >
              <MoreVertIcon />
            </button>
          ) : (
            <button
              onClick={(e) => handleEditSubmit(todo.id)}
              className="text-green-700 ml-2 mouse focus:outline-none"
            >
              <SaveIcon />
            </button>
          )}

          <div
            className={`${
              open !== todo.id ? "hidden" : null
            } origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg`}
          >
            <div
              className="rounded-md bg-white shadow-xs"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1 mouse">
                <button
                  onClick={(e) => handleEdit(todo.id)}
                  className="mouse focus:outline-none"
                >
                  <div className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                    Edit
                  </div>
                </button>
              </div>
              <div className="border-t border-gray-100"></div>
              <div className="py-1 mouse">
                <button
                  onClick={(e) => handleDelete(todo.id)}
                  className="mouse focus:outline-none"
                >
                  <div className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                    Delete
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={handleClose}
        className="px-4 pt-4 pb-2 mouse focus:outline-none"
      >
        <span className="inline-block mouse bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {todo.completed ? "#Completed" : "Uncompleted"}
        </span>
        {!todo.completed ? (
          <Fab
            color="primary"
            className="focus:outline-none mouse"
            style={{ width: "35px", height: "20px" }}
            onClick={(e) => complete(todo.id)}
          >
            <DoneIcon />
          </Fab>
        ) : (
          <Fab
            color="secondary"
            className="focus:outline-none mouse"
            style={{ width: "35px", height: "20px" }}
            onClick={(e) => complete(todo.id)}
          >
            <ClearIcon />
          </Fab>
        )}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  todo: PropTypes.object,
  complete: PropTypes.func.isRequired,
  open: PropTypes.number,
  edit: PropTypes.number,
  value: PropTypes.string,
  loading: PropTypes.bool,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleChange: PropTypes.func,
  handleEditSubmit: PropTypes.func,
};
