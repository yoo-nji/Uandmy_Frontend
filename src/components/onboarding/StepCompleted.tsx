'use client';
import Image from 'next/image';
import Button from '@/components/common/Button';
const handleConfirmClick = () => {};

const StepComplete = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col space-y-4">
        <div className="flex justify-start flex-col gap-4 w-full">
          <span className="text-[rgb(38,38,38)] font-semibold text-2xl">
            김서희님의
          </span>
          <span className="text-[rgb(38,38,38)] font-semibold text-2xl">
            공개 프로필이 생성되었어요
          </span>
          <p className=" text-[#82829B] text-[0.875rem]">
            나와 딱 맞는 스터디를 찾으러 떠나볼까요?
          </p>
        </div>

        <Button
          label="확인하러 가기"
          onClick={handleConfirmClick}
          className="w-[12.875rem] h-[3.063rem] bg-[#C6BBE1] text-white rounded-lg  "
        />
      </div>
    </>
  );
};
export default StepComplete;
