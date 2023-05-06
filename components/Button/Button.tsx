import classNames from "@/utils/className";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  isSecondary?: boolean;
}
export default function Button({
  isSecondary = false,
  className,
  children,
}: ButtonProps) {
  const classes = isSecondary
    ? "bg-gray-400 hover:bg-gray-500"
    : "bg-blue-500 hover:bg-blue-600";
  return (
    <button
      className={classNames(
        className,
        `transition-smooth rounded-md p-3 px-4 font-semibold text-white ${classes}`
      )}
    >
      {children}
    </button>
  );
}
