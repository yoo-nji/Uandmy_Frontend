'use client';
import { useState } from 'react';

import Dropdown from '@/components/common/Dropdown';
import Gnb from '@/components/common/Gnb';
import StudyroomCard, {
  StudyroomCardProps,
} from '@/components/common/StudyroomCard';
import ToggleSwitch from '@/components/common/ToggleSwitch';

import Filter from '../../../public/images/Filter.svg';
import MagnifyingGlass from '../../../public/images/MagnifyingGlass.svg';

const searchResults: StudyroomCardProps[] = [
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

const recommendedStudyroomCards: StudyroomCardProps[] = [
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

const dropdownItems = [
  {
    id: 'sortPost',
    label: '최신 순',
    options: ['최신 순', '오래된 순', '마감 임박 순', '조회수 순'], // 최신 순, 오래된 순 → 포스팅 등록일 기준으로 설정한 상태.
  },
  // {
  //   id: 'postDates',
  //   label: '등록일 전체',
  //   options: ['등록일 전체', '1주일 이내', '1개월 이내', '3개월 이내'], // 최신순, 오래된 순과 겹침.
  // },
];

const Page = () => {
  // 슬라이드 메뉴
  const [selectedMenu, setSelectedMenu] = useState('study'); // 초기값은 'study'로 설정
  const menus = [
    { id: 'study', label: '스터디 찾기' },
    { id: 'user', label: '팀원 찾기' },
  ];

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  const tags = [
    '전체',
    '#IT',
    '#개발',
    '#디자이너',
    '#피그마',
    '#UXUI 디자인',
    '#그래픽 디자인',
  ];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const [showRecruitingOnly, setShowRecruitingOnly] = useState(false);

  const handleCheckboxChange = () => {
    setShowRecruitingOnly(!showRecruitingOnly);
  };

  // 모집 중인 카드 항목 필터링
  const today = new Date();
  const filteredStudyroomCardItems = searchResults.filter((cardItem) => {
    return showRecruitingOnly
      ? new Date(cardItem.startDate).getTime() >= today.getTime()
      : true;
  });

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <div className="w-full px-[.9375rem] pt-11 pb-6 bg-white">
        {/* Contents */}
        <header className="h-10 flex items-center mb-[.6875rem] text-lg text-[#212529] font-bold">
          탐색하기
        </header>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-[14px]">
            <MagnifyingGlass />
          </span>
          <input
            type="text"
            name="search"
            className="block w-full pl-11 pr-[.875rem] py-[.6875rem] rounded-lg bg-[#F3F3F3] placeholder:text-[#41364A] text-[#41364A] text-sm ring-1 ring-inset ring-[#DDDDDD] focus:ring-2 focus:ring-[#DDDDDD] focus:outline-none"
            placeholder="어떤 스터디를 찾고 싶나요?"
            // value={inputValue}
            // onChange={handleInputChange}
          />
        </div>

        <div className="mt-2 h-6 flex justify-end items-center gap-x-1.5">
          <p className="text-[.8125rem]">원하는 스터디 알림 받기</p>
          <ToggleSwitch />
        </div>
      </div>

      <div className="w-full">
        {/* 슬라이드 메뉴 (스터디 찾기 | 팀원 찾기) */}
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

        <div className="px-4 py-5 bg-white">
          {/* 태그, 필터 */}
          <div className="flex justify-between gap-x-2 mb-5">
            <div className="w-full flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`flex justify-center items-center px-2.5 py-0.5 w-fit rounded-[.3125rem] border-[.0625rem] text-sm cursor-pointer ${
                    selectedTags.includes(tag)
                      ? 'text-primary border-primary'
                      : 'text-[#82829B] border-[#e1e1e1]'
                  }`}>
                  {tag}
                </div>
              ))}
            </div>
            <div>
              <Filter />
            </div>
          </div>

          {/* 총 개수, 최신 순, 등록일 전체 */}
          <div className="flex justify-between items-center text-xs text-[#555555]">
            <p>총 2,001건</p>
            <Dropdown items={dropdownItems} />
          </div>
        </div>

        {selectedMenu === 'study' ? (
          <>
            {/* 검색 결과 */}
            <div className="pb-[3.375rem] px-[.9375rem] border-t-8 border-[#F2F2F2]">
              <div className="my-[1.125rem] flex justify-between">
                <label className="flex items-center text-sm text-[#262626]">
                  <input
                    type="checkbox"
                    checked={showRecruitingOnly}
                    onChange={handleCheckboxChange}
                    className="hidden"
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[.5625rem] rounded">
                    <rect
                      width="18"
                      height="18"
                      rx="4"
                      fill={showRecruitingOnly ? '#837486' : 'none'}
                      stroke="#837486"
                      strokeWidth="2"
                    />
                    <path
                      d="M14.3337 5L7.00033 12.3333L3.66699 9"
                      stroke="#FBFBFB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  모집 중인 스터디만 보기
                </label>
                {/* <p className="text-sm"> 2 / 6</p> */}
              </div>

              <div className="flex flex-col gap-y-[1.125rem]">
                {filteredStudyroomCardItems.map((cardItem, idx) => (
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
            </div>

            {/* 추천 결과 */}
            <div className="pb-20 px-[.9375rem] border-t-8 border-[#F2F2F2] bg-white">
              <div className="flex justify-between mt-[1.375rem] mb-4">
                <p className="text-lg text-[#212529] font-semibold">
                  서희님과 비슷한 사용자가
                  <br />
                  방금 지원했어요
                </p>
                <div className="flex flex-col justify-end">
                  {/* <p className="text-sm"> 2 / 6</p> */}
                </div>
              </div>

              <div className="flex flex-col gap-y-[1.125rem]">
                {recommendedStudyroomCards.map((cardItem, idx) => (
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
            </div>
          </>
        ) : (
          <>{/* TODO) 팀원 검색 및 추천 결과 */}</>
        )}
      </div>

      <Gnb />
    </div>
  );
};

export default Page;
