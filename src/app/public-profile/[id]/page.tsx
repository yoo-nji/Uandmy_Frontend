'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import Avartar from '@/components/common/Avatar';
import BottomButton from '@/components/common/BottomButton';
import StudyExperienceCard from '@/components/common/StudyExperienceCard';
import TagList from '@/components/common/TagList';

interface StudyExperienceDatas {
  title: string;
  score: number;
  attendance: number;
}
interface StudyPurposeDatas {
  purpose: string;
}
interface StudyStyleDatas {
  style: string;
}
interface StudyPeriodDatas {
  period: string;
}

interface ProfileProps {
  name: string;
  job: string;
  totalStudy: number;
  attendance: number;
  text: string;
  StudyExperienceDatas: StudyExperienceDatas[];
  StudyPurposeDatas: StudyPurposeDatas[];
  StudyStyleDatas: StudyStyleDatas[];
  StudyPeriodDatas: StudyPeriodDatas[];
}

const PublicProfile = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(4);

  const profiles: Record<string, ProfileProps> = {
    '1': {
      name: '제이크',
      job: '기획자',
      totalStudy: 8,
      attendance: 98,
      text: '안녕하세요. 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디 버디들을 구하고 싶습니다 화이팅',
      StudyExperienceDatas: [
        {
          title: '피그마 초급 실습 스터디',
          score: 80,
          attendance: 98,
        },
        {
          title: '디자인 기획 실습 스터디',
          score: 80,
          attendance: 100,
        },
      ],
      StudyPurposeDatas: [
        { purpose: '툴 능력 향상' },
        { purpose: '해당 분야의 네트워킹 확장' },
      ],
      StudyStyleDatas: [
        { style: '손이 빠름' },
        { style: '열정적' },
        { style: '동기부여가 필요한' },
      ],
      StudyPeriodDatas: [{ period: '1개월 ~ 3개월' }],
    },
  };

  const handleLeftClick = () => {
    router.back();
  };
  const handleAccept = () => {
    setAcceptedCount(acceptedCount + 1);
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen pb-32 ">
        <div className="flex items-center flex-col w-[21.438rem] space-y-5">
          <div className="relative text-center space-y-5 ">
            <div className="sticky top-0 flex items-center justify-center">
              {/* 이전 단계로 이동 */}
              <button onClick={handleLeftClick} className="fixed left-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5303 3.96967C15.8232 4.26256 15.8232 4.73744 15.5303 5.03033L8.56066 12L15.5303 18.9697C15.8232 19.2626 15.8232 19.7374 15.5303 20.0303C15.2374 20.3232 14.7626 20.3232 14.4697 20.0303L6.96967 12.5303C6.67678 12.2374 6.67678 11.7626 6.96967 11.4697L14.4697 3.96967C14.7626 3.67678 15.2374 3.67678 15.5303 3.96967Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                </svg>
              </button>

              <div className="font-bold text-lg mx-auto">오픈 프로필</div>
            </div>
            <div className="w-[6.25rem] h-[6.25rem] p-0 border-2 border-[#EADCF3] rounded-full">
              <Avartar size={'100%'} />
            </div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-[1.25rem]">
              {profiles[id].name}
            </div>
            <p className=" text-[0.875rem] ">{profiles[id].job}</p>
          </div>

          <div>
            <div className="font-bold">한줄 자기소개</div>
            <p>{profiles[id].text}</p>
            <hr className="w-full border-[0.188rem] border-[#E9E9E9] mt-5 mb-5" />
            <div className="flex flex-col space-y-5">
              <div>
                <p className=" text-base font-bold">스터디 목적</p>
                <div className="flex flex-row gap-2">
                  {profiles[id].StudyPurposeDatas.map((purpose, index) => (
                    <TagList key={index} tagData={[purpose.purpose]} disabled />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-base font-bold">스타일</p>
                <div className="flex flex-row gap-2">
                  {profiles[id].StudyStyleDatas.map((style, index) => (
                    <TagList key={index} tagData={[style.style]} disabled />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-base font-bold">스터디 기간</p>
                <div className="flex flex-row gap-2">
                  {profiles[id].StudyPeriodDatas.map((period, index) => (
                    <TagList key={index} tagData={[period.period]} disabled />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-base font-bold">스터디 경험</p>
                <p className="text-[#82829B]">
                  &#035; 성실함이 보이는 기록이에요
                </p>

                <div className="flex flex-row p-5 gap-3">
                  {profiles[id].StudyExperienceDatas.map((study, index) => (
                    <StudyExperienceCard
                      key={index}
                      title={study.title}
                      score={study.score}
                      attendance={study.attendance}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flxed bottom-20 left-0 right-0 ">
            <BottomButton
              label="수락하기"
              acceptedCount={acceptedCount}
              totalCount={totalCount}
              onClick={handleAccept}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PublicProfile;
