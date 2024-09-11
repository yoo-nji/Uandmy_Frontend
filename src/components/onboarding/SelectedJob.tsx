'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';

import ProgressBar from '../common/ProgressBar';
import JobCard from './JobCard';

interface SelectedJobProps {
  onNext: (data: string) => void;
}

const SelectedJob = ({ onNext }: SelectedJobProps) => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const Jobs = [
    {
      id: '디자이너',
      label: '디자이너',
      img: '/images/Designer.svg',
    },
    { id: '개발자', label: '개발자', img: '/images/Developer.svg' },
    { id: '기획자', label: '기획자', img: '/images/Planner.svg' },
  ];

  const handleJobCardClick = (job: string) => {
    //같은 job 두번 클릭 시 null
    if (selectedJob === job) {
      setSelectedJob(null);
    } else {
      setSelectedJob(job);
    }
  };

  useEffect(() => {}, [selectedJob]);

  const handleNextClick = () => {
    if (selectedJob) {
      onNext(selectedJob);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col space-y-4">
        <ProgressBar progress={25} page={1} />
        <div className="p-[0.938rem]">
          <div className="flex justify-start flex-col gap-4 ">
            <span className="text-black text-2xl font-semibold">
              김서희님이 관심있는
            </span>
            <span className="text-black text-2xl font-semibold">
              직무는 무엇인가요?
            </span>
            <p className="text-[#82829B] text-[0.875rem] ">
              선택한 직무를 바탕으로 스터디를 추천해줄게요!
            </p>

            <div className="flex space-x-2 pt-10 pb-20">
              {Jobs.map((job) => {
                return (
                  <JobCard
                    key={job.id}
                    id={job.id}
                    label={job.label}
                    img={job.img}
                    width={24}
                    height={24}
                    isSelected={selectedJob === job.id}
                    onClick={() => handleJobCardClick(job.id)}
                  />
                );
              })}
            </div>
          </div>
          <p className="text-[#ADB5BD] text-[0.75rem] text-center mb-10">
            내용은 다시 수정할 수 있어요!
          </p>
          <div className="flex justify-between w-full ">
            <Button
              label="이전"
              bgColor="bg-white"
              textColor="text-[#CED4DA]"
              className="w-[7.75rem] h-[3.063rem] border-2 border-[#CED4DA] rounded-lg
          "
              onClick={() => {
                router.back();
              }}
            />

            <Button
              label="다음"
              disabled={!selectedJob}
              onClick={handleNextClick}
              className="w-[12.875rem] h-[3.063rem] bg-[#C6BBE1] text-white rounded-lg  "
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectedJob;
