'use client';
import Image, { StaticImageData } from 'next/image';

interface JobPops {
  id: string;
  label: string;
  img: StaticImageData;
  isSelected: boolean;
  onClick: () => void;
}

const JobCard = ({ id, label, img, isSelected, onClick }: JobPops) => {
  return (
    <>
      <div
        key={id}
        className={`box-border w-[6.813rem] h-[7.5rem] ${
          isSelected
            ? 'border-2 border-primary bg-[#EFE9FF]'
            : 'border-2 border-none  bg-[#F5F5F5]'
        } flex justify-center items-center flex-col rounded-lg space-y-2`}
        onClick={onClick}>
        <Image src={img} alt={label} className="w-[1.5rem] h-[1.5rem]" />
        <p className={`${isSelected ? 'text-primary' : 'text-black'} `}>
          {label}
        </p>
      </div>
    </>
  );
};
export default JobCard;
