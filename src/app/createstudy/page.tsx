'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import CountInput from '@/components/common/CountInput';
import { Input } from '@/components/common/Input';
import LoadingSpinner from '@/components/common/LoadingSpinner';
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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    setIsLoading(true);
    console.log({ ...data, jobPosition: selectedJobIds });
    setTimeout(() => {
      setIsLoading(false);
      router.push('postdetail');
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto py-4">
      {isLoading ? (
        <LoadingSpinner message="모집글 발행중..." />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="px-4">
            <label className="text-sm font-medium text-gray-700 mb-1">
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
            defaultValue=""
            render={({ field: { ref, ...restField } }) => (
              <div className="px-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  주제
                </label>
                <CountInput
                  inputType="input"
                  placeholder="주제를 입력하세요"
                  maxCount={20}
                  {...restField}
                  ref={ref}
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
            defaultValue=""
            render={({ field: { ref, ...restField } }) => (
              <div className="px-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  목표
                </label>
                <CountInput
                  inputType="input"
                  placeholder="목표를 입력하세요"
                  maxCount={20}
                  {...restField}
                  ref={ref}
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
            defaultValue=""
            render={({ field: { ref, ...restField } }) => (
              <div className="px-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  소개
                </label>
                <CountInput
                  inputType="textarea"
                  className="resize-none"
                  placeholder="소개 내용을 입력하세요"
                  maxCount={200}
                  rows={4}
                  {...restField}
                  ref={ref}
                />
              </div>
            )}
          />

          <Controller
            name="methodAndCurriculum"
            control={control}
            defaultValue=""
            render={({ field: { ref, ...restField } }) => (
              <div className="px-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  진행방식과 커리큘럼
                </label>
                <CountInput
                  inputType="textarea"
                  className="resize-none"
                  placeholder="스터디를 설명해주세요"
                  maxCount={500}
                  rows={6}
                  {...restField}
                  ref={ref}
                />
              </div>
            )}
          />

          <div className="flex gap-3 px-4">
            <Controller
              name="startDate"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="flex flex-col flex-auto">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    시작일
                  </label>
                  <Input className="w-full" type="date" {...field} />
                </div>
              )}
            />

            <Controller
              name="endDate"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="flex flex-col flex-auto">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    종료일
                  </label>
                  <Input className="w-full" type="date" {...field} />
                </div>
              )}
            />
          </div>

          <Controller
            name="regularMeeting"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="px-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  정기적 모임
                </label>
                <Input
                  className="w-full"
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
            defaultValue={1}
            render={({ field }) => (
              <div className="px-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  스터디 모집 인원
                </label>
                <Input className="w-full" type="number" {...field} />
              </div>
            )}
          />

          <Controller
            name="tags"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="px-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  관련 태그
                </label>
                <Input
                  className="w-full"
                  type="text"
                  placeholder="태그를 입력하세요"
                  {...field}
                />
              </div>
            )}
          />
          <div className="flex gap-3 sticky bottom-[62px] left-1/2 w-full max-w-2xl bg-white/10 backdrop-blur-sm p-4 border-t border-[#CCCEF0]">
            <Button
              label="이전"
              bgColor="bg-white"
              textColor="text-[#CED4DA]"
              className="w-1/3 h-12 border-2"
              onClick={() => console.log('이전 버튼 클릭됨')}
            />

            <Button
              label="작성완료"
              type="submit"
              onClick={() => console.log('다음 버튼 클릭됨')}
              className="w-2/3 h-12"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateStudyPage;
