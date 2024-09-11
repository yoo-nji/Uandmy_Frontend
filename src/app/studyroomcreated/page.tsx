'use client';
import Image from 'next/image';

import Button from '@/components/common/Button';
import StudyCreateCard from '@/components/common/StudyCreateCard';

export default function page() {
  return (
    <>
      <div className="flex flex-col max-w-[23.438rem] h-full justify-center items-center gap-[4.813rem] px-[1rem] mt-20 m-auto">
        <div className="flex flex-col gap-[1.25rem] w-full">
          <div className="flex justify-start items-end gap-[0.063rem]">
            <h1 className="text-[1.5rem] font-semibold">
              멤버들이 모두 모여
              <br />
              스터디룸이 생성되었어요
            </h1>
            <Image
              className="pb-[0.25rem]"
              src="/images/clapping-hands.svg"
              alt="clappingHands"
              width={24}
              height={24}
            />
          </div>
          <h2 className="text-[0.875rem] text-[#82829B]">
            모두 함께 스터디 완주를 하는 그날까지!
          </h2>
        </div>
        <StudyCreateCard
          studyName="프론트엔드 마스터하기"
          memberCount={10}
          daysLeft={15}
          studyImage="/images/figma-icon.svg"
        />
        <Button
          label="스터디룸 보러가기"
          type="submit"
          onClick={() => console.log('버튼이 클릭되었습니다!')}
          className="w-[21.438rem] h-[3.125rem] rounded-lg"
        />
      </div>
    </>
  );
}
