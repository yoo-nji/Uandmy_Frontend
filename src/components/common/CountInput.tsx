import React, { ChangeEvent, forwardRef } from 'react';

interface CountInputProps {
  value: string;
  onChange: (value: string) => void;
  maxCount?: number;
  placeholder?: string;
  className?: string;
  inputType?: 'input' | 'textarea';
  rows?: number;
}

const CountInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  CountInputProps
>(
  (
    {
      value,
      onChange,
      maxCount = 100,
      placeholder = '내용을 입력하세요',
      className = '',
      inputType = 'input',
      rows = 3,
    },
    ref,
  ) => {
    const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      onChange(e.target.value);
    };

    const count = value?.length || 0;

    const commonProps = {
      className: `w-full bg-transparent outline-none ${className}`,
      maxLength: maxCount,
      placeholder: placeholder,
      onChange: handleChange,
      value: value || '',
    };

    return (
      <div className="flex flex-col px-[22px] py-[14px] rounded-lg text-[#82829B] text-[14px] border-[#CED4DA] border-solid border-2 placeholder-[#82829B]">
        {inputType === 'input' ? (
          <input
            type="text"
            ref={ref as React.Ref<HTMLInputElement>}
            {...commonProps}
          />
        ) : (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={rows}
            {...commonProps}
          />
        )}
        <div className="flex justify-end mt-2">
          <span>{count}</span>/<span>{maxCount}</span>
        </div>
      </div>
    );
  },
);

CountInput.displayName = 'CountInput';

export default CountInput;
