/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

export default function Navbar({ theme, change }) {
  const [open, setOpen] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    setMobile(false);
  };

  const handleOpenMobile = () => {
    setMobile(!mobile);
  };

  return (
    <div>
      <nav className="bg-primary">
        {/* Web App */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src={require("../assets/logo.png")}
                  alt="Workflow logo"
                />
              </div>

              {/* Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div className="px-3 py-2 rounded-md text-sm font-medium text-white bg-inverse focus:outline-none focus:text-white focus:bg-inverse">
                    <a href="#">
                      <p>Todo App</p>
                    </a>
                  </div>

                  <div className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-inverse focus:outline-none focus:text-white focus:bg-inverse">
                    <a href="#">
                      <p>Calendar</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Menu */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  onClick={change}
                  className="text-white px-4 w-auto h-8 bg-primary rounded-full hover:bg-inverse active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                >
                  <div>
                    {theme ? <Brightness7Icon /> : <Brightness4Icon />}
                    {theme ? <span> Dark</span> : <span> Light</span>}
                  </div>
                </button>
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={handleOpen}
                      className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src={require("../assets/avatar.jpg")}
                        alt="avatar"
                      />
                    </button>
                  </div>

                  <div
                    className={`${
                      !open ? `hidden` : null
                    } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}
                  >
                    <div
                      className="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                      onClick={handleClose}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-300"
                        role="menuitem"
                      >
                        Your Profile
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-300"
                        role="menuitem"
                      >
                        Settings
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-300"
                        role="menuitem"
                      >
                        Sign Uut
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden text-inverse">Todo App</div>

            {/* Hamburger Menu */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={handleOpenMobile}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile App */}
        <div className={`${!mobile ? "hidden" : null} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="block px-3 py-2 rounded-md text-base font-medium text-white bg-inverse focus:outline-none focus:text-white focus:bg-inverse">
              <a href="#">Todo App</a>
            </div>

            <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-inverse focus:outline-none focus:text-white focus:bg-inverse">
              <a href="#">Calendar</a>
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5 space-x-3">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={require("../assets/avatar.jpg")}
                  alt="avatar"
                />
              </div>
              <div className="space-y-1">
                <div className="text-base font-medium leading-none text-white">
                  Agus D. Sasongko
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  agus@todoapp.com
                </div>
              </div>
            </div>
            <div onClick={handleClose} className="mt-3 px-2 space-y-1">
              <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-inverse focus:outline-none focus:text-white focus:bg-inverse">
                <a href="#">Your Profile</a>
              </div>

              <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-inverse focus:outline-none focus:text-white focus:bg-inverse">
                <a href="#">Settings</a>
              </div>

              <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-inverse focus:outline-none focus:text-white focus:bg-inverse">
                <a href="#">Sign Out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  theme: PropTypes.bool,
  change: PropTypes.func.isRequired,
};
