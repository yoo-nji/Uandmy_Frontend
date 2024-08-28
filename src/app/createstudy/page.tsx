const CreateStudyPage = () => {
  return (
    <div>
      <form className="mt-8 space-y-6">
        <>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                모집 직군
              </label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option></option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                주제
              </label>
              <input
                type="text"
                placeholder="주제를 입력하세요"
                maxLength={20}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                목표
              </label>
              <input
                type="text"
                placeholder="목표를 입력하세요"
                maxLength={20}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                소개
              </label>
              <textarea
                placeholder="소개 내용을 입력하세요"
                maxLength={200}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            다음
          </button>
        </>
        <>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                진행방식과 커리큘럼
              </label>
              <textarea
                placeholder="스터디를 설명해주세요"
                maxLength={500}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                시작일
              </label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                종료일
              </label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                정기적모임
              </label>
              <input
                type="text"
                placeholder="예: 매주 수요일 20시"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                스터디 모집 인원
              </label>
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                관련 태그
              </label>
              <input
                type="text"
                placeholder="태그를 입력하세요"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              이전
            </button>
            <button
              type="submit"
              className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              내용작성 완료
            </button>
          </div>
        </>
      </form>
    </div>
  );
};

export default CreateStudyPage;
