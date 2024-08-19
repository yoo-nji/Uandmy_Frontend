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
      <input
        id={`checkbox-${label}`}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="w-4 h-4 appearance-none cursor-pointer rounded-lg peer border-[#D9D9D9]  checked:border-[#6224FD] "
      />
      <label
        htmlFor={`checkbox-${label}`}
        className="flex items-center  w-auto h-[2.5rem] cursor-pointer box-border border-2 border-[#D9D9D9] rounded-lg px-2 checked:border-[#6224FD] checked:text-[#6224FD">
        <CheckSvg fillColor={isChecked ? '#6224FD' : '#E9E9E9'} />
        <span className="ml-1">{label}</span>
      </label>
    </div>
  );
};
export default CheckBox;
