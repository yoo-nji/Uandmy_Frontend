'use client';
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  className?: string;
};

const Input = ({ placeholder, className, ...rest }: InputProps) => {
  return (
    <label>
      <input
        {...rest}
        className={`w-[21.438rem] h-[3.125rem] border-solid border-2 border-[#CED4DA] rounded-lg placeholder-[#82829B] p-[0.625rem] ${className}`}
      />
    </label>
  );
};
export default Input;
