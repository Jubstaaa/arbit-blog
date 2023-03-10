import React from "react";
import { Field } from "formik";

function Input(props) {
  return (
    <>
      <label htmlFor={props.name} className="font-semibold text-gray-600">
        {props.label}
      </label>
      <Field
        id={props.name}
        name={props.name}
        as={props.type || "input"}
        className={`w-full h-32 py-2 px-3 sm:py-4 sm:px-5 border border-gray-200 rounded-md shadow-sm resize-none outline-none disabled:text-gray-500 disabled:bg-gray-100 ${props.className}`}
        disabled={props.disabled}
        required={props.required}
        readOnly={props.readOnly}
      ></Field>
    </>
  );
}

export default Input;
