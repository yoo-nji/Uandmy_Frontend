'use client';
import React, { useState } from 'react';

const Page = () => {
  const [selectedMenu, setSelectedMenu] = useState('study'); // 초기값은 'study'로 설정
  const menus = [
    { id: 'my application', label: '내 신청 내역' },
    { id: 'applicant management', label: '신청자 관리' },
  ];

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };
  return (
    <div className="w-full px-[.9375rem] pt-11 pb-20 min-h-screen">
      {/* Gnb 라우팅 테스트 위해 임의로 넣어놓은 컨텐츠입니다. */}
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
      </div>
    </div>
  );
};

export default Page;
