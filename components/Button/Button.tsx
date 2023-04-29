import classNames from "@/utils/className";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}
export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={classNames(
        className,
        "transition-smooth rounded-md bg-blue-500 p-3 px-4 font-semibold text-white hover:bg-blue-600"
      )}
    >
      {children}
    </button>
  );
}
