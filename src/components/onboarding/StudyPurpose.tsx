'use client';
import CheckBoxList from '@/components/common/CheckBoxList';
import ProgressBar from '../common/ProgressBar';
import { useState } from 'react';
import Button from '../common/Button';

interface StudyPurposeProps {
  onNext: (data: string[]) => void;
  onBack: () => void;
}

const StudyPurpose = ({ onNext, onBack }: StudyPurposeProps) => {
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);
  const checkBoxDatas = [
    '자기 개발',
    '툴 능력 확장',
    '해당 분야의 네트워킹 확장',
    '취미',
  ];
  const handleNext = () => {
    onNext(selectedPurposes);
  };

  return (
    <>
      <div className="flex justify-center items-center w-[23.438rem] flex-col space-y-4">
        <ProgressBar progress={50} page={2} />
        <div className="flex justify-start flex-col gap-4 w-full p-[0.938rem]">
          <span className="text-[#262626] font-semibold text-2xl">
            김서희님의
          </span>
          <span className="text-[#262626] font-semibold text-2xl">
            스터디 목적은 무엇인가요?
          </span>
          <p className="text-[#82829B] text-[0.875rem]">중복선택도 가능해요</p>
          <CheckBoxList
            checkBoxDatas={checkBoxDatas}
            onChange={(value) => setSelectedPurposes(value as string[])}
          />
        </div>

        <p className="text-[#ADB5BD] text-[0.75rem]">
          내용은 다시 수정할 수 있어요!
        </p>
        <div className="flex justify-center items-center space-x-[0.813rem] ">
          <Button
            label="이전"
            onClick={onBack}
            bgColor="bg-white"
            textColor="text-[#CED4DA]"
            className="w-[7.75rem] h-[3.063rem] border-2 border-[#CED4DA] rounded-lg
          "
          />

          <Button
            label="다음"
            onClick={handleNext}
            disabled={selectedPurposes.length === 0}
            className="w-[12.875rem] h-[3.063rem] bg-[#C6BBE1] text-white rounded-lg  "
          />
        </div>
      </div>
    </>
  );
};
export default StudyPurpose;
