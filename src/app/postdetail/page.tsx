import Avartar from '@/components/common/Avatar';

const PostDetailPage = () => {
  const tagData = ['Figma', 'UI/UX', '디자이너', '온라인 강의'];
  return (
    <div className="max-w-md mx-auto px-3 py-3">
      <div className="flex items-center mb-4 gap-4">
        <h1 className="text-xl font-bold">피그마 정복하기</h1>
        <span className="border-primary border-[2px] text-primary text-sm font-medium px-3 py-0.5 rounded-2xl">
          D-13
        </span>
      </div>
      {/* TagList */}
      {/* <TagList tagData={tagData} /> */}
      {/* Info */}
      <div className="flex items-center mb-4">
        <Avartar />
        <div className="ml-3 text-sm">
          <p className="text-gray-700">김서희</p>
          <p className="text-gray-400">작성일 24.06.07</p>
        </div>
      </div>
      <hr className="border border-greyBorder mb-5" />

      {/* Study Details */}
      <div className="mb-4">
        <h2 className="font-semibold text-gray-800">스터디 주제</h2>
        <p className="text-gray-600">콜로소 피그마 UX/UI 디자인 강의 스터디</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-gray-800">스터디 목표</h2>
        <p className="text-gray-600">강의 완주 후 학습 네트워킹</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-gray-800">스터디 소개</h2>
        <p className="text-gray-600">
          디자인에서 필수적인 피그마 툴 학습을 함께 배우고 강의 내용을 응용하여
          UI를 제작해 인증하는 방식으로 진행하고 있어요. 피드백을 주고 받으며
          학습 내용을 공유해봐요!
        </p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-gray-800">스터디 기간</h2>
        <p className="text-gray-600">2024.06.19 (토) - 07.19(토)</p>
        <p className="text-gray-600">매주 토요일 오후 1시 - 3시</p>
      </div>
    </div>
  );
};

export default PostDetailPage;
