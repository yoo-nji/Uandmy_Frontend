'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import ImageUploader from '@/components/common/ImageUploader';
import ToggleSwitch from '@/components/common/ToggleSwitch';

const Page = () => {
  const router = useRouter();
  const [profileUpload, setProfileUpload] = useState<File | null>(null);

  const handlePublicProfileClick = () => {
    router.push('/public-profile');
  };
  const handleProfileUpload = (file: File) => {
    setProfileUpload(file);
  };

  return (
    <div className="min-h-screen ">
      {/* Gnb 라우팅 테스트 위해 임의로 넣어놓은 컨텐츠입니다. */}
      <div className="w-full px-[.9375rem] pt-11 pb-20">
        <header className="h-10 flex items-center mb-[.6875rem]">
          <p className="text-lg text-[#212529] font-bold">마이페이지</p>
        </header>
        <div className="flex flex-row gap-5">
          <button>
            <ImageUploader
              onImageUpload={handleProfileUpload}
              width={'61px'}
              height={'61px'}
            />
          </button>
          <div className="flex flex-row justify-between w-full relative">
            <div>
              <p className="font-medium text-base text-[#474747]">디자이너</p>

              <p className="font-medium text-xl ">김서희님</p>
            </div>

            <div className="absolute bottom-0 right-0">
              <Button
                label="공개용 프로필"
                textColor="text-[#645294]"
                bgColor="bg-[#FDFBFF]"
                onClick={handlePublicProfileClick}
                className="w-[6.5rem] h-[1.938rem] text-xs border-2 border-[#EEEAFF]"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto border-2 border-[#EEEAFF] bg-[#FDFBFF] rounded-lg ">
          <span className="text-[#7F6CAF]">피그마 팔로업 회의</span>
          <span className="text-[#E0D8FF]">|</span>
          <span className="text-[#645294]">오늘 오후 8:30</span>
        </div>
        <p className="font-medium text-lg">내 정보</p>
        <div className="w-full h-auto border-2 border-[#E0D8FF] bg-[#FDFBFF] rounded-lg ">
          <div className="flex flex-row justify-between">
            <div className="flex-col items-center text-center">
              <span className="w-[2.563rem] h-[2.563rem] items-center justify-center border border-[#E0D8FF] bg-[#FDFBFF]">
                <img
                  src={'/images/Join.svg'}
                  alt="Join"
                  className="w-[1rem] h-[1rem]"
                />
              </span>
              <span>참여중</span>
              <p>2</p>
            </div>

            <div className="flex-col">
              <span className="w-[2.563rem] h-[2.563rem] items-center justify-center border border-[#E0D8FF] bg-[#FDFBFF] rounded-full">
                <img
                  src={'/images/Join.svg'}
                  alt="Join"
                  className="w-[1rem] h-[1rem]"
                />
              </span>
              <span>북마크</span>
              <p>9</p>
            </div>

            <div className="flex-col">
              <span className="w-[2.563rem] h-[2.563rem] items-center justify-center border border-[#E0D8FF] bg-[#FDFBFF] rounded-full">
                <img
                  src={'/images/Join.svg'}
                  alt="Join"
                  className="w-[1rem] h-[1rem]"
                />
              </span>
              <span>대기중</span>
              <p>13</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.5rem] box-border bg-[#F1F2F6] mt-5 mb-5"></div>
        <div className="flex flex-col gap-3">
          <div className="font-medium">
            <div className=" text-lg mb-2">내 스터디</div>
            <div>참여 중인 스터디</div>
            <div>지난 스터디</div>
          </div>

          <hr className="w-[95%] mx-auto border-t-1 border-[#EEEAFF]" />
          <div className="font-medium">
            <div className=" text-lg mb-2">관심 보인 스터디</div>
            <div>최근 방문</div>
            <div>관심 스터디</div>
          </div>
          <div className="w-full h-[0.5rem] box-border bg-[#F1F2F6] mt-5 mb-5"></div>
          <div className="font-medium">
            <div className="text-lg mb-2">고객 센터</div>
            <div>FAQ</div>
            <div>문의하기</div>
            <div>공지사항</div>
          </div>
          <hr className="w-[95%] mx-auto border-t-1 border-[#EEEAFF]" />
          <div className="font-medium">
            <div className=" text-lg mb-2">계정 정보</div>
            <div>회원 정보 수정</div>
            <div>비밀번호 설정</div>
            <div className="flex flex-row justify-between">
              <div>마케팅 개인정보 제3자 제공동의</div>
              <ToggleSwitch />
            </div>

            <div>회원 탈퇴</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
