import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

function Button(props) {
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={classNames({
          "flex justify-center items-center gap-2 text-white p-2 rounded-lg": true,
          "bg-rose-600": props.red,
          "bg-blue-500": props.blue,
        })}
      >
        {props.icon}
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        type={props.type || "submit"}
        onClick={props.onClick}
        className={classNames({
          "flex justify-center items-center gap-2 text-white p-2 rounded-lg": true,
          "bg-rose-600": props.red,
          "bg-blue-500": props.blue,
        })}
      >
        {props.icon}
        {props.children}
      </button>
    );
  }
}

export default Button;
