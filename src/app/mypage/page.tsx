import Gnb from '@/components/common/Gnb';
import React from 'react';

const Page = () => {
  return (
    <div className="w-[23.4375rem] min-h-screen bg-[#F6F6F6]">
      {/* Gnb 라우팅 테스트 위해 임의로 넣어놓은 컨텐츠입니다. */}
      <div className="w-full px-[.9375rem] pt-11 pb-20">
        <header className="h-10 flex items-center mb-[.6875rem]">
          <p className="text-lg text-[#212529] font-bold">마이페이지</p>
        </header>
      </div>
      <Gnb />
    </div>
  );
};

export default Page;
