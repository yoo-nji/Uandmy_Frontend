'use client';

import Button from '@/components/common/Button';

const handleAccept = () => {};

const PublicProfile = () => {
  return (
    <>
      <div className="flex justify-center items-center  h-screen">
        <div className="flex items-center flex-col w-[21.438rem] space-y-5">
          <div className="text-center space-y-5 ">
            <div className="font-bold text-[1.125rem]  ">오픈 프로필</div>
            <img src="/images/profile.png" alt="프로필 " />
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
            <hr className="w-full  border-[0.188rem] border-[#E9E9E9] mt-5 mb-5" />
            <div className="flex flex-col space-y-5">
              <p className="text-base font-bold">스터디 목적</p>
              <p className="text-base font-bold">스타일</p>
              <p className="text-base font-bold">스터디 기간</p>
              <p className="text-base font-bold">스터디 경험</p>
              <p className="text-[#82829B]">
                &#035; 성실함이 보이는 기록이에요
              </p>
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
