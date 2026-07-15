import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>

        <input
          ref={ref}
          className={clsx(
            'w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-600',
            className,
          )}
          {...props}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
