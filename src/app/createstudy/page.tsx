'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/common/Input';
import MultiSelect from '@/components/common/MultiSelect';

interface FormDatas {
  jobPosition: string;
  topic: string;
  goal: string;
  introduction: string;
  methodAndCurriculum: string;
  startDate: string;
  endDate: string;
  regularMeeting: string;
  studyRecruitmentNumber: number;
  tags: string;
}

const CreateStudyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDatas>();

  const [selectedJobIds, setSelectedJobIds] = useState<string[]>([]);
  const jobItems = [
    { id: 'dev', label: '개발자' },
    { id: 'design', label: '디자이너' },
    { id: 'plan', label: '기획자' },
    { id: 'marketing', label: '마케터' },
  ];

  const handleJobsChange = (jobIds: string[]) => {
    setSelectedJobIds(jobIds);
  };

  const onSubmit = (data: FormDatas) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              모집 직군
            </label>
            <MultiSelect
              items={jobItems}
              selectedIds={selectedJobIds}
              onSelectionChange={handleJobsChange}
              placeholder="직군 선택"
              title="모집 직군 선택"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              주제
            </label>
            <Input
              type="text"
              placeholder="주제를 입력하세요"
              maxLength={20}
              {...register('topic', { required: '주제를 입력하세요' })}
            />
            {errors.topic && (
              <p className="text-danger">{errors.topic.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              목표
            </label>
            <Input
              type="text"
              placeholder="목표를 입력하세요"
              maxLength={20}
              {...register('goal', { required: '목표를 입력하세요' })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              소개
            </label>
            <textarea
              className="w-[25rem] h-[3rem] border-solid border-2 border-[#CED4DA] rounded-lg placeholder-[#82829B] p-[0.625rem]"
              placeholder="소개 내용을 입력하세요"
              maxLength={200}
              {...register('introduction')}
            />
          </div>
        </div>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              진행방식과 커리큘럼
            </label>
            <textarea
              placeholder="스터디를 설명해주세요"
              maxLength={500}
              className="w-[25rem] h-[3rem] border-solid border-2 border-[#CED4DA] rounded-lg placeholder-[#82829B] p-[0.625rem]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              시작일
            </label>
            <Input type="date" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              종료일
            </label>
            <Input type="date" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              정기적모임
            </label>
            <Input type="text" placeholder="예: 매주 수요일 20시" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              스터디 모집 인원
            </label>
            <Input type="number" defaultValue={1} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              관련 태그
            </label>
            <Input type="text" placeholder="태그를 입력하세요" />
          </div>
        </div>

        <div>
          <button type="button">이전</button>
          <button type="submit">내용작성 완료</button>
        </div>
      </form>
    </div>
  );
};

export default CreateStudyPage;
