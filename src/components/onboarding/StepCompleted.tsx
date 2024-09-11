'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/common/Button';

import LoadingSpinner from '../common/LoadingSpinner';
import UserProfileCard from '../common/UserProfileCard';

interface StepCompleteProps {
  role?: string;
  description?: string[];
}

const StepComplete = ({ role, description }: StepCompleteProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const descriptionString = description ? description.join('. ') : '';
  const onSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push('studyroom');
    }, 2500);
  };
  return (
    <div className="w-full mt-10 flex justify-center items-center flex-col gap-y-4">
      {isLoading ? (
        <LoadingSpinner message="유앤미" />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-start flex-col w-full mt-[1.313rem]">
            <div className="flex flex-col pt-[0.938rem] px-[1.938rem] gap-y-4">
              <span className="text-black font-semibold text-2xl">
                김서희님의
              </span>
              <div className="flex items-center">
                <span className="text-black font-semibold text-2xl">
                  공개 프로필이 생성되었어요
                </span>

                <Image
                  src={'/images/ClappingHands.svg'}
                  alt="Clapping Hands"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              <p className=" text-[#82829B] text-[0.875rem]">
                나와 딱 맞는 스터디를 찾으러 떠나볼까요?
              </p>
            </div>
          </div>
          <div className="mt-8 mb-12">
            <UserProfileCard
              name={'김서희님'}
              role={role}
              description={descriptionString}
              profileImage={'/images/profile.png'}
            />
          </div>

          <Button
            label="확인하러 가기"
            onClick={onSubmit}
            className="w-[21.438rem] h-[3.063rem] bg-[#C6BBE1] text-white rounded-lg"
          />
        </div>
      )}
    </div>
  );
};
export default StepComplete;
