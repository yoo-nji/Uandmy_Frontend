import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-5 w-10 rounded-full ${
              isChecked ? 'bg-[#8655FF]' : 'bg-white border border-[#8655FF]'
            }`}></div>
          <div
            className={`absolute left-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full transition ${
              isChecked ? 'translate-x-[1.25rem] bg-white ' : 'bg-[#8655FF]'
            }`}></div>
        </div>
      </label>
    </>
  );
};

export default ToggleSwitch;
