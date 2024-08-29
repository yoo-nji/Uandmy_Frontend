'use client';
import CheckBoxList from '@/components/common/CheckBoxList';
import ProgressBar from '../common/ProgressBar';
import { useState, KeyboardEvent } from 'react';
import Button from '../common/Button';

interface StudyPurposeProps {
  onNext: (data: string[]) => void;
  onBack: () => void;
}

const StudyPurpose = ({ onNext, onBack }: StudyPurposeProps) => {
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);
  const [newPurpose, setNewPurpose] = useState<string>('');
  const [isInput, setIsInput] = useState<boolean>(false);

  const checkBoxDatas = [
    '자기 개발',
    '툴 능력 확장',
    '해당 분야의 네트워킹 확장',
    '취미',
  ];
  const handleNewPurpose = () => {
    if (newPurpose.trim() && !selectedPurposes.includes(newPurpose)) {
      const updatePurposes = [...selectedPurposes, newPurpose.trim()];
      setSelectedPurposes(updatePurposes);
      console.log(updatePurposes);
      setNewPurpose('');
      setIsInput(!isInput);
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('enter');
      handleNewPurpose();
    }
  };

  const handleCheckBoxChange = (value: string[]) => {
    setSelectedPurposes(value);
  };

  const handleNext = () => {
    onNext(selectedPurposes);
  };

  return (
    <>
      <div className="flex justify-center items-center w-[23.438rem] flex-col space-y-4">
        <ProgressBar progress={50} page={2} />
        <div className="p-[0.938rem]">
          <div className="flex justify-start flex-col gap-4 w-full ">
            <span className="text-[#262626] font-semibold text-2xl">
              김서희님의
            </span>
            <span className="text-[#262626] font-semibold text-2xl">
              스터디 목적은 무엇인가요?
            </span>
            <p className="text-[#82829B] text-[0.875rem]">
              중복선택도 가능해요
            </p>
            <div className="flex space-x-4 pt-10 pb-20 overflow-y-auto max-h-96">
              <CheckBoxList
                checkBoxDatas={[
                  ...checkBoxDatas,
                  ...selectedPurposes.filter(
                    (purpose) => !checkBoxDatas.includes(purpose),
                  ),
                ]}
                onChange={(value) => {
                  setSelectedPurposes(value as string[]);
                  console.log('selectedvalue', value);
                }}
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
                  value={newPurpose}
                  onChange={(e) => setNewPurpose(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="직접 입력"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm mt-2"
                  autoFocus
                />
              )}
            </div>
          </div>

          <p className="text-[#ADB5BD] text-[0.75rem] text-center mb-2">
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
      </div>
    </>
  );
};
export default StudyPurpose;
