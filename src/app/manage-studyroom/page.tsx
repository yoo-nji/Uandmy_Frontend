'use client';
import React, { useState } from 'react';
import AccordionDown from '../../../public/images/AccordionDown.svg';
import AccordionUp from '../../../public/images/AccordionUp.svg';
import PendingProfileCard from '@/components/common/PendingProfileCard';
import StudyroomCard, {
  StudyroomCardProps,
} from '@/components/common/StudyroomCard';
import CommonHeader from '@/components/common/CommonHeader';

interface StudyStatusProps {
  id: string;
  title: string;
}
interface ProfileDatas {
  id: string;
  name: string;
  job: string;
  totalStudy: number;
  attendance: number;
  text: string;
  tags: string[];
  registerDate: string;
}

const Page = () => {
  const [selectedMenu, setSelectedMenu] = useState('my application'); // 초기값은 'my application'으로 설정
  const [showAccordion, setShowAccordion] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<ProfileDatas[]>([
    {
      id: '1',
      name: '제이크',
      job: '기획자',
      totalStudy: 8,
      attendance: 98,
      text: '안녕하세요. 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디 버디들을 구하고 싶습니다 화이팅',
      tags: ['손이 빠름', '열정적', '동기부여가 필요한'],
      registerDate: '2024년 06월 07일',
    },
    {
      id: '2',
      name: '박가현',
      job: '디자이너',
      totalStudy: 1,
      attendance: 100,
      text: '안녕하세요! 올해 졸업하고 취업 준비 중 경력도 쌓고 싶고 비슷한 사람들과 정보도 공유하고 싶어요!',
      tags: ['취준생', '논리적인', '책임감 있는'],
      registerDate: '2024년 06월 08일',
    },
  ]);
  const menus = [
    { id: 'my application', label: '내 신청 내역' },
    { id: 'applicant management', label: '신청자 관리' },
  ];

  const studyStatus: StudyStatusProps[] = [
    {
      id: 'uiux-study',
      title: 'UI/UX 스터디',
    },
    {
      id: 'javascript-study',
      title: '자바스크립트 스터디',
    },
  ];
  const myApplicationDatas: StudyroomCardProps[] = [
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

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  const handleAccordionClick = (id: string) => {
    setShowAccordion(showAccordion === id ? null : id);
  };
  const handleReject = (id: string) => {
    //해당 참여요청 거절버튼 클릭
    //프로필 배열에서 제거
    setProfileData((profiles) =>
      profiles.filter((profile) => profile.id !== id),
    );
  };
  const handleAccept = (id: string) => {
    //해당 참여요청  수락버튼 클릭

    //프로필 배열에서 제거
    setProfileData((profiles) =>
      profiles.filter((profile) => profile.id !== id),
    );
    //서버로 수락된 프로필 전달
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full  pt-11 pb-20 min-h-screen bg-[#F6F6F6]">
        <div className="px-[.9375rem]">
          <CommonHeader title="스터디룸 관리" />
        </div>

        <div className="w-full ">
          {/* 슬라이드 메뉴 (내 신청 내역 | 신청자 관리) */}
          <div className="bg-white h-[2.875rem] flex">
            {menus.map((menu) => (
              <div
                key={menu.id}
                onClick={() => handleMenuClick(menu.id)}
                className={`w-1/2 flex justify-center items-center cursor-pointer ${
                  selectedMenu === menu.id
                    ? 'border-b-2 border-primary text-black font-semibold'
                    : 'border-b-[1px] border-[#EFEFEF] text-[#82829B]'
                }`}>
                <p>{menu.label}</p>
              </div>
            ))}
          </div>

          {/* 내 신청 내역 화면 */}
          {selectedMenu === 'my application' ? (
            <div className="flex flex-col gap-5 p-3 mt-5">
              {myApplicationDatas.map((cardItem, idx) => (
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
          ) : (
            //신청자 관리 화면
            <div className="bg-white">
              {studyStatus.map((study) => (
                <div key={study.id} className="mb-4">
                  <div
                    onClick={() => handleAccordionClick(study.id)}
                    className=" cursor-pointer p-3 flex justify-between items-center border-b border-[#F6F6F6]">
                    <p className="font-semibold">{study.title}</p>
                    <span>
                      {showAccordion === study.id ? (
                        <AccordionUp />
                      ) : (
                        <AccordionDown />
                      )}
                    </span>
                  </div>
                  {showAccordion === study.id && (
                    <div className="bg-[#F5F5FF]">
                      <div className=" ml-4 p-3 rounded-md ">
                        <PendingProfileCard
                          ProfileData={profileData}
                          handleReject={handleReject}
                          handleAccept={handleAccept}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
