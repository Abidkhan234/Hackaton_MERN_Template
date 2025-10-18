import { useField } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordInput = ({ name, placeholderText }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={name} className="font-medium ms-1">
        Password
      </label>
      <div className="flex items-center w-full rounded-md border border-green-500 px-2 py-2">
        <input
          type={showPassword ? "text" : "password"}
          className="grow outline-none text-sm font-medium"
          autoComplete="off"
          placeholder={placeholderText}
          id={name}
          {...field}
        />
        <button
          type="button"
          className="shrink-0 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Eye className="size-5" strokeWidth={2} />
          ) : (
            <EyeOff className="size-5" strokeWidth={2} />
          )}
        </button>
      </div>
      {meta.error && meta.touched && (
        <p className="absolute sm:ms-2 ms-1 -bottom-6 text-red-500 font-medium text-sm">
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
