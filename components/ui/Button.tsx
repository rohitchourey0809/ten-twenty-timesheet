import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  children,
  loading,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={clsx(
        "w-full rounded-md bg-blue-600 py-3 text-white font-medium transition-all duration-200 hover:bg-blue-700 disabled:opacity-60",
        className
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}