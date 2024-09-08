'use client';
import React, { useState } from 'react';
import AccordionDown from '../../../public/images/AccordionDown.svg';
import AccordionUp from '../../../public/images/AccordionUp.svg';

interface StudyStatusProps {
  id: string;
  title: string;
  content: string[];
}

const Page = () => {
  const [selectedMenu, setSelectedMenu] = useState('my application'); // 초기값은 'my application'으로 설정
  const [showAccordion, setShowAccordion] = useState<string | null>(null);
  const menus = [
    { id: 'my application', label: '내 신청 내역' },
    { id: 'applicant management', label: '신청자 관리' },
  ];

  const studyStatus: StudyStatusProps[] = [
    {
      id: 'uiux-study',
      title: 'UI/UX 스터디',
      content: ['카드1', '카드2'],
    },
  ];

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  const handleAccordionClick = (id: string) => {
    setShowAccordion(showAccordion === id ? null : id);
  };

  return (
    <div className="w-full px-[.9375rem] pt-11 pb-20 min-h-screen">
      <header className="h-10 flex items-center mb-[.6875rem]">
        <p className="text-lg text-[#212529] font-bold">스터디룸 관리</p>
      </header>
      <div className="w-full">
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

        {/* 신청자 관리 화면 */}
        {selectedMenu === 'applicant management' && (
          <div className="mt-5">
            {studyStatus.map((study) => (
              <div key={study.id} className="mb-4">
                <div
                  onClick={() => handleAccordionClick(study.id)}
                  className="cursor-pointer bg-gray-100 p-3 rounded-md flex justify-between items-center">
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
                  <div className="mt-2 ml-4 bg-gray-50 p-3 rounded-md">
                    {study.content.map((applicant, index) => (
                      <p key={index}>{applicant}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
