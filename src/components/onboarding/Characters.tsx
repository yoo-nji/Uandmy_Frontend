'use client';
import { useState } from 'react';
import ProgressBar from '../common/ProgressBar';
import TagList from '../common/TagList';
import Button from '../common/Button';

interface SelectedCharacterProps {
  onNext: (data: string[]) => void;
  onBack: () => void;
}

const Character = ({ onNext, onBack }: SelectedCharacterProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tagDatas = [
    '주도적인',
    '열정적인',
    '손이 빠른',
    '시간을 지키는',
    '꼼꼼한',
    '모험적인',
    '신중한',
    '커뮤니케이션에 능숙한',
    '논리적인',
    '파워 J',
    '분석적인',
    '동기부여가 필요한',
    '완벽주의',
  ];

  const handleNextClick = () => {
    // if (selectedTags.length > 0) {
    //   console.log('selectedTag', selectedTags);
    onNext(selectedTags);
    // }
  };
  return (
    <>
      <div className=" flex justify-center items-center w-[23.438rem] flex-col space-y-4">
        <div className="flex justify-start flex-col gap-4">
          <ProgressBar progress={75} page={3} />
          <span className="text-[#262626] font-semibold text-2xl">
            김서희님은
          </span>
          <span className="text-[#262626] font-semibold text-2xl">
            어떤 스타일이신가요?
          </span>
          <p className="text-[#82829B] text-[0.875rem] ">
            유앤미님과 비슷하다고 생각되는 키워드를 모두 선택해주세요!
          </p>
        </div>
        <div className="flex w-[23.438rem]">
          <TagList />
        </div>
        <p className="text-[#ADB5BD] text-[0.75rem]">
          내용은 다시 수정할 수 있어요!
        </p>
        <div className="flex justify-center items-center space-x-[0.813rem] ">
          <Button
            label="이전"
            bgColor="bg-white"
            textColor="text-[#CED4DA]"
            className="w-[7.75rem] h-[3.063rem] border-2 border-[#CED4DA] rounded-lg
          "
            onClick={onBack}
          />

          <Button
            label="다음"
            // disabled={selectedTags.length === 0}
            onClick={handleNextClick}
            className="w-[12.875rem] h-[3.063rem] bg-[#C6BBE1] text-white rounded-lg  "
          />
        </div>
      </div>
    </>
  );
};
export default Character;
