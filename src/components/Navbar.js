import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const { isLogin, userInfo } = useSelector((state) => state.mainReducer);

  return (
    <nav className="bg-white z-30 w-full fixed shadow-sm shadow-slate-300">
      <div className="w-11/12 h-navbar mx-auto flex flex-row items-center justify-between px-5">
        <h3 className="text-2xl font-bold">Cinta Coding</h3>
        <div>
          <button className="m-0 px-5 py-2 text-lg font-semibold text-gray-400 border-b-2 border-b-blue-400">
            Post
          </button>
        </div>
        <div className="flex flex-row items-center gap-2">
          {!isLogin && Object.keys(userInfo).length === 0 ? (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          ) : (
            <Fragment>
              <span className="md:text-2xl font-bold">Welcome,</span>
              <Link to="/user">
                <strong className="md:text-2xl font-bold text-blue-400">
                  {userInfo.username}
                </strong>
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
