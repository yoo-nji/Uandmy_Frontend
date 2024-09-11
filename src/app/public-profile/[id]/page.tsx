'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import Avartar from '@/components/common/Avatar';
import BottomButton from '@/components/common/BottomButton';
import NavHeader from '@/components/common/NavHeader';
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

  const handleAccept = () => {
    setAcceptedCount(acceptedCount + 1);
  };
  return (
    <div>
      <NavHeader title="오픈 프로필" />
      <div className="flex justify-center min-h-screen pb-32 ">
        <div className="flex items-center flex-col w-[21.438rem] space-y-5">
          <div className="relative text-center space-y-5 ">
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
