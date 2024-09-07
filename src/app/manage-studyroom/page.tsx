import CommonHeader from '@/components/common/CommonHeader';
import React from 'react';

const Page = () => {
  return (
    <div className="w-full px-[.9375rem] pt-11 pb-20 min-h-screen bg-[#F6F6F6]">
      {/* Gnb 라우팅 테스트 위해 임의로 넣어놓은 컨텐츠입니다. */}
      <CommonHeader title="스터디룸 관리" />
    </div>
  );
};

export default Page;
