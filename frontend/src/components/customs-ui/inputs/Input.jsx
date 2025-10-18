import { useField } from "formik";
import React from "react";

const Input = ({ name, placeholderText, labelText, type = "text" }) => {
  const [field, meta] = useField(name);
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={name} className="ms-1 font-medium">
        {labelText}
      </label>
      <input
        type={type}
        className="py-2 font-medium text-sm px-2 border border-green-500 rounded-md outline-none"
        placeholder={placeholderText}
        autoComplete="off"
        id={name}
        {...field}
      />
      {meta.error && meta.touched && (
        <p className="absolute sm:ms-2 ms-1 -bottom-6 text-red-500 font-medium text-sm">
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default Input;
