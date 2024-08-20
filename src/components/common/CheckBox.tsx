'use client';
import { useState } from 'react';
import CheckSvg from '../../../public/images/CheckSvg';

type LabelProps = {
  label: string;
};

const CheckBox = ({ label }: LabelProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center">
      <label
        htmlFor={`checkbox-${label}`}
        className={`flex items-center w-auto h-[2.5rem] cursor-pointer box-border border-2 rounded-lg pl-1 pr-2 ${
          isChecked ? 'bg-[#EFE9FF] border-primary' : 'border-[#D9D9D9]'
        }`}>
        <input
          id={`checkbox-${label}`}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="appearance-none w-4 h-4 rounded-lg peer -ml-2 focus:outline-none focus:ring-0 focus:border-transparent "
        />
        <CheckSvg fillColor={isChecked ? '#6224FD' : '#E9E9E9'} />
        <span className={`ml-2 ${isChecked ? 'text-primary' : 'text-black'}`}>
          {label}
        </span>
      </label>
    </div>
  );
};

export default CheckBox;
