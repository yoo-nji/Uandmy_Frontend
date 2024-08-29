'use client';

import { Input } from '@/components/common/Input';

const CreateStudyPage = () => {
  return (
    <div>
      <form>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              모집 직군
            </label>
            <select className="w-[25rem] h-[3rem] border-solid border-2 border-[#CED4DA] rounded-lg placeholder-[#82829B] p-[0.625rem]">
              <option></option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              주제
            </label>
            <Input type="text" placeholder="주제를 입력하세요" maxLength={20} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              목표
            </label>
            <Input type="text" placeholder="목표를 입력하세요" maxLength={20} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              소개
            </label>
            <textarea
              className="w-[25rem] h-[3rem] border-solid border-2 border-[#CED4DA] rounded-lg placeholder-[#82829B] p-[0.625rem]"
              placeholder="소개 내용을 입력하세요"
              maxLength={200}
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
