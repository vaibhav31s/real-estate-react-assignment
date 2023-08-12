import React from "react";
import { FaHouseUser, FaHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-transparent ">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="https://asdf.com/" className="flex items-center">
          <FaHouseUser className="text-4xl" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Estatery
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col  md:pt-1 mt-5 border border-gray-100 rounded-lg  md:flex-row md:space-x-1 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block outline-2  rounded-lg  hover:bg-indigo-300 m-3  text-white   md:bg-transparent md:text-indigo-700 md:p-3 dark:text-white md:dark:text-indigo-500"
                aria-current="page"
              >
                Rent
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block outline-2  rounded-lg  hover:bg-indigo-300 m-3  text-white   md:bg-transparent md:text-indigo-700 md:p-3 dark:text-white md:dark:text-indigo-500"
              >
                Buy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block outline-2  rounded-lg  hover:bg-indigo-300 m-3  text-white   md:bg-transparent md:text-indigo-700 md:p-3 dark:text-white md:dark:text-indigo-500"
              >
                Sell
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block outline-2  rounded-lg  hover:bg-indigo-300 m-3  text-white   md:bg-transparent md:text-indigo-700 md:p-3 dark:text-white md:dark:text-indigo-500"
              >
                <div className="-mt-1 bg-transparent">
                  <select className=" bg-transparent font-bold rounded-lg text-sm  border-none focus:ring-0">
                    <option className="text-left" value="500-2,500">
                      {" "}
                      Manage Properties
                    </option>
                    <option className="text-left" value="2500-3,500">
                      {" "}
                      $2500-$3,500{" "}
                    </option>
                    <option className="text-left" value="3500-5,500">
                      {" "}
                      $3500-$5,500{" "}
                    </option>
                  </select>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block outline-2  rounded-lg  hover:bg-indigo-300 m-3  text-white   md:bg-transparent md:text-indigo-700 md:p-3 dark:text-white md:dark:text-indigo-500"
              >
                <div className=" -ml-3">
                  <select className="font-bold rounded-lg text-sm bg-transparent border-none focus:ring-0">
                    <option className="text-left" value="1">
                      {" "}
                     Resources
                    </option>
                    <option className="text-left" value="2">
                      {" "}
                      $2500-$3,500{" "}
                    </option>
                    <option className="text-left" value="3">
                      {" "}
                      $3500-$5,500{" "}
                    </option>
                  </select>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div className="flex flex-wrap gap-8">
          <button className="  rounded-lg px-6 py-2 text-white items-center justify-center outline-10 border-2">
            <span className="text-indigo-600 font-bold">Login</span>
          </button>
          <button className=" bg-indigo-600 rounded-lg px-6 py-2 text-white items-center justify-center">
            <span className="font-bold">Sign Up</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
