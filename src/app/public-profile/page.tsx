'use client';

import Avartar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import StudyExperienceCard from '@/components/common/StudyExperienceCard';
import TagList from '@/components/common/TagList';

const handleAccept = () => {};

const PublicProfile = () => {
  const StudyExperienceDatas = [
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
  ];

  const StudyStyleDatas = [
    {
      style: '툴 능력 향상',
    },
    {
      style: '해당 분야의 네트워크 확장',
    },
  ];

  const StudyPurposeDatas = [
    {
      purpose: '손이 빠름',
    },
    {
      purpose: '해당 네트워크 확장',
    },
  ];

  const StudyPeriodDatas = [
    {
      period: '1개월 ~ 3개월',
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center h-auto">
        <div className="flex items-center flex-col w-[21.438rem] space-y-5">
          <div className="text-center space-y-5 ">
            <div className="font-bold text-[1.125rem]">오픈 프로필</div>
            <Avartar size={100} />
          </div>
          <div>
            <div className="font-semibold text-[1.25rem]">이름</div>
            <p className=" text-[0.875rem]">기획자</p>
          </div>

          <div>
            <div className="font-bold">한줄 자기소개</div>
            <p>
              안녕하세요. 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디
              버디들을 구하고 싶습니다 화이팅
            </p>
            <hr className="w-full border-[0.188rem] border-[#E9E9E9] mt-5 mb-5" />
            <div className="flex flex-col space-y-5">
              <div>
                <p className="text-base font-bold">스타일</p>
                <div className="flex flex-row gap-2">
                  {StudyStyleDatas.map((style, index) => (
                    <TagList key={index} tagData={[style.style]} disabled />
                  ))}
                </div>
              </div>
              <div>
                <p className=" text-base font-bold">스터디 목적</p>
                <div className="flex flex-row gap-2">
                  {StudyPurposeDatas.map((purpose, index) => (
                    <TagList key={index} tagData={[purpose.purpose]} disabled />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-base font-bold">스터디 기간</p>
                <div className="flex flex-row gap-2">
                  {StudyPeriodDatas.map((period, index) => (
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
                  {StudyExperienceDatas.map((study, index) => (
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

          <div className="box-border flex flex-row gap-2 w-full ">
            <span>
              <p className="text-[#82829B]">수락가능인원</p>
              <div className="flex">
                <p className="text-primary">2명</p>
                <p>/ 4명</p>
              </div>
            </span>

            <Button
              label="수락하기"
              onClick={handleAccept}
              bgColor="bg-[#804CFF]"
              className="w-[15rem] h-[3.063rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PublicProfile;
