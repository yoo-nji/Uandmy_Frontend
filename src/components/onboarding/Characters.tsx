'use client';
import { KeyboardEvent, useState } from 'react';

import Button from '../common/Button';
import ProgressBar from '../common/ProgressBar';
import TagList from '../common/TagList';

interface SelectedCharacterProps {
  onNext: (data: string[]) => void;
  onBack: () => void;
}

const Character = ({ onNext, onBack }: SelectedCharacterProps) => {
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>('');
  const [isInput, setIsInput] = useState<boolean>(false);

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
  const handleTagSelect = (selectedTags: string[]) => {
    setSelectedTag(selectedTags);
  };
  const handleNewTag = () => {
    if (newTag.trim() && !selectedTag.includes(newTag)) {
      const updateTags = [...selectedTag, newTag.trim()];
      setSelectedTag(updateTags);
      console.log(updateTags);
      setNewTag('');
      setIsInput(!isInput);
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('enter');
      handleNewTag();
    }
  };

  const handleNextClick = () => {
    onNext(selectedTag);
  };
  return (
    <>
      <div className=" flex justify-center items-center w-[23.438rem] flex-col space-y-4">
        <ProgressBar progress={75} page={3} />
        <div className="p-[0.938rem] w-full">
          <div className="flex justify-start flex-col gap-4 w-full">
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
          <div className="flex w-[23.438rem] mt-10 mb-15 overflow-y-auto max-h-96">
            <TagList
              tagData={[
                ...tagDatas,
                ...selectedTag.filter((tag) => !tagDatas.includes(tag)),
              ]}
              className={'flex flex-wrap gap-2'}
              onTagSelect={handleTagSelect}
            />
          </div>
          <div className="flex ">
            {!isInput ? (
              <Button
                label="+직접 입력하기"
                onClick={() => setIsInput(true)}
                bgColor="bg-[#ECECEC]"
                textColor="text-[#82829B]"
                className="flex items-center w-auto h-[2.5rem] cursor-pointer box-border border-2 rounded-lg pl-1 pr-2 border-greyBorder"
              />
            ) : (
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="직접 입력"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm mt-2"
                autoFocus
              />
            )}
          </div>

          <p className="text-[#ADB5BD] text-[0.75rem] text-center mb-2">
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
              disabled={selectedTag.length === 0}
              onClick={handleNextClick}
              className="w-[12.875rem] h-[3.063rem] bg-[#C6BBE1] text-white rounded-lg  "
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Character;
