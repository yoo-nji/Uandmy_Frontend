import { ChangeEvent, useState } from 'react';

interface CountInputProps {
  maxCount?: number; // 최대 글자 수
  placeholder?: string; // 플레이스홀더
  className?: string;
}

export default function CountInput({
  maxCount = 100,
  placeholder = '내용을 입력하세요',
  className = '',
}: CountInputProps) {
  // 글자 수 상태 관리
  const [count, setCount] = useState<number>(0);

  // 입력값이 변경될 때 호출되는 함수
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCount(inputValue.length); // 입력된 글자 수를 상태로 저장
  };

  return (
    <>
      <div
        className={`flex justify-between px-[22px] py-[14px] items-center h-[50px] gap-3 rounded-lg text-[#82829B] text-[14px] border-[#CED4DA] border-solid border-2 placeholder-[#82829B] ${className}`}>
        <input
          className="w-full"
          type="text"
          maxLength={maxCount} // 최대 글자수 제한
          placeholder={placeholder} // 플레이스홀더
          onChange={handleInputChange} // 입력값이 변경될 때 호출
        />
        <div className="flex">
          <span>{count}</span>/<span>{maxCount}</span>{' '}
          {/* 현재 글자 수와 최대 글자 수 표시 */}
        </div>
      </div>
    </>
  );
}
