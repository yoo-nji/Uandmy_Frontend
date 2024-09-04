import React, { ChangeEvent, useState } from 'react';

interface CountInputProps {
  maxCount?: number;
  placeholder?: string;
  className?: string;
  inputType?: 'input' | 'textarea';
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
}

export default function CountInput({
  maxCount = 100,
  placeholder = '내용을 입력하세요',
  className = '',
  inputType = 'input',
  rows = 3,
  value: externalValue,
  onChange: externalOnChange,
}: CountInputProps) {
  const [internalValue, setInternalValue] = useState<string>('');
  const value = externalValue !== undefined ? externalValue : internalValue;
  const count = value.length;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newValue = e.target.value;
    if (externalValue === undefined) {
      setInternalValue(newValue);
    }
    externalOnChange?.(newValue);
  };

  const inputProps = {
    className: 'w-full bg-transparent outline-none',
    maxLength: maxCount,
    placeholder: placeholder,
    onChange: handleChange,
    value: value,
  };

  return (
    <div
      className={`flex flex-col px-[22px] py-[14px] rounded-lg text-[#82829B] text-[14px] border-[#CED4DA] border-solid border-2 placeholder-[#82829B] ${className}`}>
      {inputType === 'input' ? (
        <input type="text" {...inputProps} />
      ) : (
        <textarea {...inputProps} rows={rows} />
      )}
      <div className="flex justify-end mt-2">
        <span>{count}</span>/<span>{maxCount}</span>
      </div>
    </div>
  );
}
