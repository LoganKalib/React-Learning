import { forwardRef } from "react";
const inputStyle =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

const Input = forwardRef(({ isTextArea, label, ...props }, ref) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} {...props} className={inputStyle} />
      ) : (
        <input ref={ref} {...props} className={inputStyle} />
      )}
    </p>
  );
});

export default Input;
