'use client';

import Button from '@/components/common/Button';
import ProfileCard from '@/components/common/ProfileCard';

const PendingRequest = () => {
  const ProfileDatas = [
    {
      name: '제이크',
      job: '기획자',
      totalStudy: 8,
      attendance: 98,
      text: '안녕하세요. 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디 버디들을 구하고 싶습니다 화이팅',
      tags: ['손이 빠름', '열정적', '동기부여가 필요한'],
    },
    {
      name: '박가현',
      job: '디자이너',
      totalStudy: 1,
      attendance: 100,
      text: '안녕하세요! 올해 졸업하고 취업 준비 중 경력도 쌓고 싶고 비슷한 사람들과 정보도 공유하고 싶어요!',
      tags: ['취준생', '논리적인', '책임감 있는'],
    },
  ];
  const handleLeftClick = () => {};
  const handleAccept = () => {};

  return (
    <>
      <div className="flex justify-center items-center h-auto ">
        <div className="flex items-center flex-col w-[21.438rem] space-y-5">
          <div className="relative text-center space-y-5 ">
            <div className="sticky top-0 flex items-center justify-center">
              {/* 이전 페이지로 이동 */}
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

              <div className="font-bold text-lg mx-auto">대기중인 요청</div>
            </div>
            <hr className="w-[24.125rem] border-1 border-greyBorder mt-5 mb-5" />
          </div>
          <ProfileCard
            ProfileDatas={ProfileDatas}
            handleAccept={handleAccept}
          />
          <div className="box-border flex flex-row gap-2 w-full ">
            <span>
              <p className="text-[#82829B]">수락가능인원</p>
              <div className="flex">
                <p className="text-primary">2명</p>
                <p>/ 4명</p>
              </div>
            </span>

            <Button
              label="전체 수락하기"
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
export default PendingRequest;
