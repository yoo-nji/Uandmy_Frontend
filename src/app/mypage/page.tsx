'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import ImageUploader from '@/components/common/ImageUploader';
import ToggleSwitch from '@/components/common/ToggleSwitch';
import UserStatusSummary from '@/components/common/UserStatusSummary';
import CommonHeader from '@/components/common/CommonHeader';

const Page = () => {
  const router = useRouter();
  const [profileUpload, setProfileUpload] = useState<File | null>(null);

  const boxDatas = [
    {
      img: '/images/Join.svg',
      alt: '참여중',
      label: '참여중',
      count: 2,
    },
    {
      img: '/images/Bookmark.svg',
      alt: '북마크',
      label: '북마크',
      count: 9,
    },
    {
      img: '/images/Waiting.svg',
      alt: '대기중',
      label: '대기중',
      count: 13,
    },
  ];

  const handlePublicProfileClick = () => {
    router.push('/public-profile');
  };
  const handleProfileUpload = (file: File) => {
    setProfileUpload(file);
  };

  return (
    <div className="min-h-screen ">
      <div className="w-full px-[.9375rem] pt-11 pb-20">
        <CommonHeader title="마이페이지" />
        <div className="flex flex-col gap-5">
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
          <div className="flex flex-row justify-between p-5 w-full h-auto border-2 border-[#EEEAFF] bg-[#F9F9F9] rounded-md ">
            <div className="flex gap-5">
              <span className="text-[#7F6CAF] ">피그마 팔로업 회의</span>
              <span className="text-[#E0D8FF]">|</span>
            </div>

            <span className="flex flex-row">
              <img src={'images/Alarm.svg'} alt="알람" />
              <span className="text-[#645294] ml-2">오늘 오후 8:30</span>
            </span>
          </div>
          <div>
            <p className="font-medium text-lg mb-3">내 정보</p>
            <UserStatusSummary boxDatas={boxDatas} />
          </div>

          <div className="w-full h-[0.5rem] box-border bg-[#F1F2F6] mt-5 mb-5"></div>
          <div className="flex flex-col gap-3">
            <div className="font-medium">
              <div className=" text-lg mb-2">내 스터디</div>

              <div className="flex justify-between">
                <div className="flex flex-row gap-2">
                  <img src={'/images/Joining.svg'} alt={'참여 중인 스터디'} />
                  참여 중인 스터디
                  <span className="flex justify-center items-center text-center  w-[1.25rem] h-[1.25rem] bg-[#EDF1FF] text-[#6224FD] rounded-full">
                    2
                  </span>
                </div>

                <img
                  src={'/images/Navigate.svg'}
                  alt={'참여 중인 스터디 이동'}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-row gap-2">
                  <img src={'/images/Before.svg'} alt={'지난 스터디'} />
                  지난 스터디 <span>8</span>
                </div>

                <img src={'/images/Navigate.svg'} alt={'지난 스터디 이동'} />
              </div>
            </div>

            <hr className="w-[95%] mx-auto border-t-1 border-[#EEEAFF]" />
            <div className="font-medium">
              <div className=" text-lg mb-2">관심 보인 스터디</div>
              <div className="flex justify-between">
                <div className="flex flex-row gap-2">
                  <img src={'/images/Checking.svg'} alt={'최근 방문'} />
                  최근 방문
                </div>

                <img src={'/images/Navigate.svg'} alt={'최근 방문 이동'} />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-row gap-2">
                  <img src={'/images/Bookmark2.svg'} alt={'관심 스터디'} />
                  관심 스터디<span>8</span>
                </div>

                <img src={'/images/Navigate.svg'} alt={'관심 스터디 이동'} />
              </div>
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
    </div>
  );
};

export default Page;
