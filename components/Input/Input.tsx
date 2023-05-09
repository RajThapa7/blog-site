import { InputHTMLAttributes } from "react";

export default function Input({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      name=""
      id=""
      className="w-full rounded-md bg-white p-3 px-4 text-gray-600 outline-none ring-2 ring-gray-200 focus:ring-blue-500"
      {...props}
    />
  );
}
