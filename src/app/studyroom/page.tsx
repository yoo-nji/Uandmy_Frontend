'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import StudyroomCard, {
  StudyroomCardProps,
} from '@/components/common/StudyroomCard';

import WavingHand from '../../../public/images//Waving_hand.svg';
import Question from '../../../public/images/Question.svg';
import ThinkingFace from '../../../public/images/Thinking_face.svg';

const StudyroomCardItems: StudyroomCardProps[] = [
  {
    position: '개발',
    title: '자바 중급 스터디 모집',
    tags: ['북 스터디', 'Java', '백엔드 개발자'],
    startDate: '2024/05/29',
    endDate: '2024/06/29',
    views: 8123456,
  },
  {
    position: '디자이너 | UXUI 디자인',
    title: '피그마 고급 스킬 스터디 모집 🥰',
    tags: ['오토레이아웃', '과제인증 필수'],
    startDate: '2024/09/16',
    endDate: '2024/10/10',
    views: 1203,
  },
  {
    position: '디자이너 | 그래픽 디자인',
    title: '하반기 영상 공모전 대비 스터디',
    tags: ['C4D', '블렌더', '3D 디자인'],
    startDate: '2024/09/20',
    endDate: '2024/10/20',
    views: 823,
  },
];

const Page = () => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  const [showRecruitingOnly, setShowRecruitingOnly] = useState(false);

  const handleCheckboxChange = () => {
    setShowRecruitingOnly(!showRecruitingOnly);
  };

  // 모집 중인 카드 항목 필터링
  const today = new Date();
  const filteredStudyroomCardItems = StudyroomCardItems.filter((cardItem) => {
    return showRecruitingOnly
      ? new Date(cardItem.startDate).getTime() >= today.getTime()
      : true;
  });

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <div className="w-full px-[.9375rem] pt-11 pb-20">
        <header className="h-10 flex items-center mb-[.6875rem]">
          <div className="w-1/2">
            <p className="text-lg text-[#212529] font-bold">스터디룸</p>
          </div>
          <div className="w-1/2 flex justify-end">
            {/* TODO) 참여 스터디룸 존재 여부에 따라 아이콘 조건부 렌더링 구현 (없으면 ?, 있으면 +) */}
            <Question />
          </div>
        </header>

        {/* TODO) 참여 스터디룸 존재시 아래 요소 전체 렌더링 X */}
        <div>
          <p className="text-lg text-[#212529] font-bold mb-2">
            아직 스터디룸이
            <br />
            존재하지 않아요!
          </p>
          <p className="text-sm text-[#82829B]">
            #원하는 스터디룸을 탐색해 볼까요?
          </p>
        </div>

        <div className="my-[1.9375rem] flex flex-col gap-y-[.6875rem]">
          <div className="w-full h-fit px-[1.5625rem] py-[1.875rem] bg-white rounded-lg flex flex-col gap-y-1">
            <p className="text-[#808080] text-sm">
              밋티의 맞춤형 스터디를 탐색해보세요!
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-3">
                <p className="font-bold text-lg">스터디 탐색하기</p>
                <button
                  className="p-2 w-fit rounded-lg bg-[#E3E3FA] text-[#4A5999] text-xs font-semibold"
                  onClick={() => handleClick('/search')}>
                  바로가기
                </button>
              </div>
              <ThinkingFace />
            </div>
          </div>

          <div
            className="w-full h-[5.1875rem] px-[1.5625rem] py-[1.375rem] bg-[#E3E3FA] rounded-lg flex justify-between items-center cursor-pointer"
            onClick={() => handleClick('/studyroom-create')}>
            <div>
              <p className="text-[#786A82] text-[.8125rem]">
                찾으시는 스터디룸이 없나요?
              </p>
              <p className="font-semibold text-sm">
                쉽고 빠른 스터디룸 개설하기
              </p>
            </div>
            <WavingHand />
          </div>
        </div>

        <div>
          <p className="text-lg text-[#212529] font-bold mt-[.5625rem]">
            지금 떠오르고 있는
            <br />
            스터디룸
          </p>
          <div className="my-[1.125rem] flex justify-between">
            <label className="flex items-center text-sm font-bold text-[#262626]">
              <input
                type="checkbox"
                checked={showRecruitingOnly}
                onChange={handleCheckboxChange}
                className="hidden"
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[.5625rem] rounded">
                <rect
                  width="18"
                  height="18"
                  rx="4"
                  fill={showRecruitingOnly ? '#4B494C' : 'none'}
                  stroke="#4B494C"
                  strokeWidth="2"
                />
                <path
                  d="M14.3337 5L7.00033 12.3333L3.66699 9"
                  stroke="#FBFBFB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              모집 중인 스터디만 보기
            </label>
            {/* <p> 2 / 6</p> */}
          </div>

          <div className="flex flex-col gap-y-[1.125rem]">
            {filteredStudyroomCardItems.map((cardItem, idx) => (
              <StudyroomCard
                key={idx}
                position={cardItem.position}
                title={cardItem.title}
                tags={cardItem.tags}
                startDate={cardItem.startDate}
                endDate={cardItem.endDate}
                views={cardItem.views}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
