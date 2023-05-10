import { InputHTMLAttributes } from "react";

export default function Input({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      name=""
      id=""
      className="w-full rounded-md bg-white p-3 px-4 text-gray-600 outline-none ring-2 ring-gray-200 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100 dark:ring-gray-500 dark:focus:ring-blue-400"
      {...props}
    />
  );
}
