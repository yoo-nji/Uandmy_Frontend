'use client';
import CheckSvg from '../../../public/images/CheckSvg';

type CheckBoxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const CheckBox = ({ label, checked, onChange }: CheckBoxProps) => {
  return (
    <div className="flex items-center">
      <label
        htmlFor={`checkbox-${label}`}
        className={`flex items-center w-auto h-[2.5rem] cursor-pointer box-border border-2 rounded-lg pl-1 pr-2 ${
          checked ? 'bg-[#EFE9FF] border-blue' : 'border-[#D9D9D9]'
        }`}>
        <input
          id={`checkbox-${label}`}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="appearance-none w-4 h-4 rounded-lg peer -ml-2 focus:outline-none focus:ring-0 focus:border-transparent "
        />
        <CheckSvg fillColor={checked ? '#6224FD' : '#E9E9E9'} />
        <span className={`ml-2 ${checked ? 'text-blue' : 'text-black'}`}>
          {label}
        </span>
      </label>
    </div>
  );
};

export default CheckBox;
