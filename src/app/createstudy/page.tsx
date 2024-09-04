'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import CountInput from '@/components/common/CountInput';
import { Input } from '@/components/common/Input';
import MultiSelect from '@/components/common/MultiSelect';

interface FormData {
  jobPosition: string[];
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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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

  const onSubmit = (data: FormData) => {
    console.log({ ...data, jobPosition: selectedJobIds });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
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

        <Controller
          name="topic"
          control={control}
          rules={{ required: '주제를 입력하세요' }}
          render={({ field }) => (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                주제
              </label>
              <CountInput
                inputType="input"
                placeholder="주제를 입력하세요"
                maxCount={20}
                {...field}
              />
              {errors.topic && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.topic.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="goal"
          control={control}
          rules={{ required: '목표를 입력하세요' }}
          render={({ field }) => (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                목표
              </label>
              <CountInput
                inputType="input"
                placeholder="목표를 입력하세요"
                maxCount={20}
                {...field}
              />
              {errors.goal && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.goal.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="introduction"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                소개
              </label>
              <CountInput
                inputType="textarea"
                placeholder="소개 내용을 입력하세요"
                maxCount={200}
                rows={4}
                {...field}
              />
            </div>
          )}
        />

        <Controller
          name="methodAndCurriculum"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                진행방식과 커리큘럼
              </label>
              <CountInput
                inputType="textarea"
                placeholder="스터디를 설명해주세요"
                maxCount={500}
                rows={6}
                {...field}
              />
            </div>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  시작일
                </label>
                <Input type="date" {...field} />
              </div>
            )}
          />

          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  종료일
                </label>
                <Input type="date" {...field} />
              </div>
            )}
          />
        </div>

        <Controller
          name="regularMeeting"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                정기적 모임
              </label>
              <Input
                type="text"
                placeholder="예: 매주 수요일 20시"
                {...field}
              />
            </div>
          )}
        />

        <Controller
          name="studyRecruitmentNumber"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                스터디 모집 인원
              </label>
              <Input type="number" defaultValue={1} {...field} />
            </div>
          )}
        />

        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                관련 태그
              </label>
              <Input type="text" placeholder="태그를 입력하세요" {...field} />
            </div>
          )}
        />

        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            이전
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            내용작성 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStudyPage;
