'use client';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  type?: string;
  className?: string;
};

const Input = ({ placeholder, type, className, ...rest }: InputProps) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <label>
      <input
        {...rest}
        type={type}
        value={inputText}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={`w-[21.438rem] h-[3.125rem] border-solid border-2 border-[#CED4DA] rounded-lg placeholder-[#82829B] p-[0.625rem] ${className}`}
      />
    </label>
  );
};
export default Input;
