import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
      className={`bg-blue-400 text-white text-base font-bold py-2 px-9 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
