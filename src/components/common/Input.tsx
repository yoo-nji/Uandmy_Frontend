'use client';
import { forwardRef, InputHTMLAttributes } from 'react';
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  className?: string;
  type?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = 'text', className, ...rest }, ref) => {
    return (
      <label>
        <input
          {...rest}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={`w-[21.438rem] h-[3.125rem] border-solid border-2 border-[#CED4DA] rounded-lg placeholder-[#82829B] p-[0.625rem] ${className}`}
        />
      </label>
    );
  },
);

Input.displayName = 'Input';
export default Input;
