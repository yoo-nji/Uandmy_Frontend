'use client';
import Avatar from '@/components/common/Avatar';
import BottomButton from '@/components/common/BottomButton';
import TagBox from '@/components/common/TagBox';
import { View } from '@/components/icons/View';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

const PostDetailPage = () => {
  const router = useRouter();
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(4);
  const tagData = ['Figma', 'UI/UX', '디자이너', '온라인 강의'];

  return (
    <div className="flex flex-col gap-5 px-3 py-3">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">피그마 정복하기</h1>
        <span className="border-primary border-[2px] text-primary text-sm font-medium px-3 py-0.5 rounded-2xl">
          D-13
        </span>
      </div>
      {/* TagList */}
      <div className="flex gap-3">
        {tagData.map((tag, idx) => (
          <TagBox key={idx}>{tag}</TagBox>
        ))}
      </div>
      {/* Info */}
      <div className="flex items-center gap-4">
        <Avatar />
        <div className="flex flex-col gap-1 text-sm w-full">
          <span className="font-medium text-gray-800">김서희</span>
          <div className="flex justify-between w-full text-[#908794]">
            <div className="flex items-center space-x-2">
              <p>작성일 24.06.07</p>
              <span>|</span>
              <p>09:41</p>
              <span>|</span>
              <p>조회수 33</p>
            </div>
            <div className="flex items-center gap-[.1875rem]">
              <View />
              <p>1,203</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-greyBorder" />

      {/* Study Details */}
      <div>
        <h2 className="font-semibold text-gray-800">스터디 주제</h2>
        <p className="text-gray-600">콜로소 피그마 UX/UI 디자인 강의 스터디</p>
      </div>

      <div>
        <h2 className="font-semibold text-gray-800">스터디 목표</h2>
        <p className="text-gray-600">강의 완주 후 학습 네트워킹</p>
      </div>

      <div>
        <h2 className="font-semibold text-gray-800">스터디 소개</h2>
        <p className="text-gray-600">
          디자인에서 필수적인 피그마 툴 학습을 함께 배우고 강의 내용을 응용하여
          UI를 제작해 인증하는 방식으로 진행하고 있어요. 피드백을 주고 받으며
          학습 내용을 공유해봐요!
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-gray-800">스터디 기간</h2>
        <p className="text-gray-600">2024.06.19 (토) - 07.19(토)</p>
        <p className="text-gray-600">매주 토요일 오후 1시 - 3시</p>
      </div>
      <div className="flex flxed bottom-0 w-full justify-center items-center ">
        <BottomButton
          label="대기 중인 요청 확인하기"
          acceptedCount={acceptedCount}
          totalCount={totalCount}
          onClick={() => {
            router.push('/pending-request');
          }}
        />
      </div>
    </div>
  );
};

export default PostDetailPage;
