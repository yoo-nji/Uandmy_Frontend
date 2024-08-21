import React from 'react';
import Bookmark from '../../../public/images/bookmark.svg';
import Calendar from '../../../public/images/event_available.svg';
import View from '../../../public/images/Eye.svg';

const StudyroomCard = () => {
  return (
    <div className="w-[21.4375rem] h-[10.5625rem] px-[1rem] py-[1.125rem] rounded-lg border-[.0625rem] border-[#EAEAEA] drop-shadow-custom">
      <div className="flex justify-between items-center mb-[.5rem]">
        <div className="text-[#555555] text-xs">모집 직군</div>
        <Bookmark />
      </div>

      <p className="text-base text-[#434343] font-semibold">제목</p>

      <div className="flex flex-wrap gap-2 mt-[.75rem] mb-[1.5rem]">
        <div>tag</div>
        <div>tag</div>
        <div>tag</div>
      </div>

      <div className="flex justify-between items-center text-xs">
        <div className="flex gap-x-3">
          <div className="font-bold text-primary">D-day</div>
          <div className="text-[#BEB4BF] flex items-center gap-1">
            <Calendar />
            <p>yyyy.mm.dd (요일) - mm.dd (요일)</p>
          </div>
        </div>
        <div className="text-[#908794] flex items-center gap-[.1875rem]">
          <View />
          <p>조회수</p>
        </div>
      </div>
    </div>
  );
};

export default StudyroomCard;
