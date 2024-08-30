import React from 'react';

interface tagProps {
  label: string;
}

const TagBox = ({ label }: tagProps) => {
  return (
    <div className="h-[1.625rem] px-[.5rem] py-[.0625rem] bg-[#F5F1FF] border-[.0625rem] border-[#EBE9F5] rounded text-xs text-[#41364A] flex justify-center items-center">
      {label}
    </div>
  );
};

export default TagBox;
