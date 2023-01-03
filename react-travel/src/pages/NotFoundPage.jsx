import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center flex-col">
      <div className="max-w-[1000px] mx-auto text-center">
        <NavLink to="/" className="w-full">
          <img src="logo.png" alt="" className="w-[50%] mx-auto" />
        </NavLink>
        <p className="text-[60px] py-10 font-bold text-center">
          Oops! Page not found!
        </p>
        <NavLink to="/" className="max-w-[120px]">
          <button className="text-center bg-primary text-white text-3xl py-4 rounded-lg w-[250px] mx-auto">
            Back to home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
