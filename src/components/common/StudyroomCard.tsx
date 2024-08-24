'use client';
import React, { useState } from 'react';
import Calendar from '../../../public/images/event_available.svg';
import View from '../../../public/images/Eye.svg';
import TagBox from './TagBox';
import Bookmark from './Bookmark';

export interface StudyroomCardProps {
  position: string;
  title: string;
  tags: string[];
  startDate: string; // "YYYY-MM-DD" 또는 "YYYY/MM/DD" 형식으로 입력 (ISO 8601 형식)
  endDate: string; // "YYYY-MM-DD" 또는 "YYYY/MM/DD" 형식으로 입력 (ISO 8601 형식)
  views: number;
}

const StudyroomCard = ({
  position,
  title,
  tags,
  startDate,
  endDate,
  views,
}: StudyroomCardProps) => {
  // startDate, endDate 문자열을 Date 객체로 변환
  const start = new Date(startDate);
  const end = new Date(endDate);

  // 요일
  const dayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토'];

  // D-day
  const today = new Date();
  const dDayInMs = start.getTime() - today.getTime();
  const dDayInDays = Math.ceil(dDayInMs / (1000 * 60 * 60 * 24));

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    // 여기에서 북마크 상태를 서버에 전송하거나 다른 로직을 추가할 수 있습니다.
  };

  return (
    <div className="w-[21.4375rem] h-[10.5625rem] px-[1rem] py-[1.125rem] rounded-lg border-[.0625rem] border-[#EAEAEA] bg-white drop-shadow-custom">
      <div className="flex justify-between items-center mb-[.5rem]">
        <div className="text-[#555555] text-xs">{position}</div>
        <Bookmark onClick={handleBookmarkClick} filled={isBookmarked} />
      </div>

      <p className="text-base text-[#434343] font-semibold">{title}</p>

      <div className="flex flex-wrap gap-2 mt-[.75rem] mb-[1.5rem]">
        {tags.map((tag, idx) => (
          <TagBox key={idx} label={tag} />
        ))}
      </div>

      <div className="flex justify-between items-center text-xs">
        <div className="flex gap-x-3">
          <div className="font-bold text-primary">
            {dDayInDays < 0 ? `D+${Math.abs(dDayInDays)}` : `D-${dDayInDays}`}
          </div>
          <div className="text-[#555555] flex items-center gap-1">
            <Calendar style={{ fill: '#BEB4BF' }} />
            {start.getFullYear() === end.getFullYear() ? (
              <p>{`${start.getFullYear()}.${start.getMonth() + 1}.${start.getDate()} (${dayOfTheWeek[start.getDay()]}) - ${end.getMonth() + 1}.${end.getDate()} (${dayOfTheWeek[end.getDay()]})`}</p>
            ) : (
              <p>{`${start.getFullYear()}.${start.getMonth() + 1}.${start.getDate()} (${dayOfTheWeek[start.getDay()]}) - ${end.getFullYear()}.${end.getMonth() + 1}.${end.getDate()} (${dayOfTheWeek[end.getDay()]})`}</p>
            )}
          </div>
        </div>
        <div className="text-[#908794] flex items-center gap-[.1875rem]">
          <View />
          <p>{views.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default StudyroomCard;
