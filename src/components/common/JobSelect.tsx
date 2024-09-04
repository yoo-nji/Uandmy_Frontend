import { useState } from 'react';

interface JobSelectProps {
  jobs: string[];
}

const JobSelect: React.FC<JobSelectProps> = ({ jobs }) => {
  // isOpen: 바텀시트의 열림/닫힘 상태를 관리
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // selectedJobs: 사용자가 선택한 직군들을 관리
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);

  // 바텀시트의 열림/닫힘을 토글하는 함수
  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  // 직군을 선택하거나 해제하는 함수
  const handleJobSelect = (job: string) => {
    setSelectedJobs((prev) =>
      prev.includes(job) ? prev.filter((item) => item !== job) : [...prev, job],
    );
  };

  return (
    <div className="mb-4">
      {/* 모집 직군 레이블 */}
      <label className="block text-sm font-medium text-gray-700">
        모집 직군
      </label>

      {/* 선택된 직군이 표시되는 입력란(클릭 시 바텀시트 열림) */}
      <div
        className="w-full h-[3rem] border-solid border-2 border-[#CED4DA] rounded-lg placeholder-[#82829B] p-[0.625rem] cursor-pointer"
        onClick={toggleBottomSheet}>
        {selectedJobs.length > 0 ? selectedJobs.join(', ') : '직군 선택'}
      </div>

      {/* 바텀시트: 열림 상태(isOpen)에 따라 표시 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50">
          <div className="w-full max-w-md bg-white rounded-t-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">직군 선택</h2>
              {/* 닫기 버튼: 바텀시트 닫기 */}
              <button onClick={toggleBottomSheet} className="text-red-500">
                닫기
              </button>
            </div>

            {/* 직군 목록 */}
            <ul className="space-y-2">
              {jobs.map((job) => (
                <li
                  key={job}
                  className="cursor-pointer"
                  onClick={() => handleJobSelect(job)}>
                  <span
                    className={`p-2 block hover:bg-[#F0F0F0] ${
                      selectedJobs.includes(job)
                        ? ' text-[#6224FD]'
                        : ' text-black'
                    }`}>
                    {job}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobSelect;
