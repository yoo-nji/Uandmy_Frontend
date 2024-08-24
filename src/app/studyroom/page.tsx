'use client';
import Gnb from '@/components/common/Gnb';
import Question from '../../../public/images/Question.svg';
import ThinkingFace from '../../../public/images/Thinking_face.svg';
import WavingHand from '../../../public/images//Waving_hand.svg';
import StudyroomCard, {
  StudyroomCardProps,
} from '@/components/common/StudyroomCard';
import { useRouter } from 'next/navigation';

const StudyroomCardItems: StudyroomCardProps[] = [
  {
    position: '개발',
    title: '자바 중급 스터디 모집',
    tags: ['북 스터디', 'Java', '백엔드 개발자'],
    startDate: '2024/05/29',
    endDate: '2024/06/29',
    views: 823,
  },
  {
    position: '디자이너 | UXUI 디자인',
    title: '피그마 고급 스킬 스터디 모집 🥰',
    tags: ['오토레이아웃', '과제인증 필수'],
    startDate: '2024/08/21',
    endDate: '2024/09/01',
    views: 1203,
  },
  {
    position: '디자이너 | 그래픽 디자인',
    title: '하반기 영상 공모전 대비 스터디',
    tags: ['C4D', '블렌더', '3D 디자인'],
    startDate: '2024/08/26',
    endDate: '2024/09/20',
    views: 1230,
  },
];

const Page = () => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="w-[23.4375rem] min-h-screen bg-[#F6F6F6]">
      <div className="w-full px-[.9375rem] pt-11 pb-20">
        <header className="h-10 flex items-center mb-[.6875rem]">
          <div className="w-1/2">
            <p className="text-lg text-[#212529] font-bold">스터디룸</p>
          </div>
          <div className="w-1/2 flex justify-end">
            {/* TODO) 참여 스터디룸 존재 여부에 따라 아이콘 조건부 렌더링 구현 (없으면 ?, 있으면 +) */}
            <Question />
          </div>
        </header>

        {/* TODO) 참여 스터디룸 존재시 아래 요소 전체 렌더링 X */}
        <div>
          <p className="text-lg text-[#212529] font-bold mb-2">
            아직 스터디룸이
            <br />
            존재하지 않아요!
          </p>
          <p className="text-sm text-[#82829B]">
            #원하는 스터디룸을 탐색해 볼까요?
          </p>
        </div>

        <div className="my-[1.9375rem] flex flex-col gap-y-[.6875rem]">
          <div className="w-full h-fit px-[1.5625rem] py-[1.875rem] bg-white rounded-lg flex flex-col gap-y-1">
            <p className="text-[#808080] text-sm">
              밋티의 맞춤형 스터디를 탐색해보세요!
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-3">
                <p className="font-bold text-lg">스터디 탐색하기</p>
                <button
                  className="p-2 w-fit rounded-lg bg-[#E3E3FA] text-[#4A5999] text-xs font-semibold"
                  onClick={() => handleClick('/search')}>
                  바로가기
                </button>
              </div>
              <ThinkingFace />
            </div>
          </div>

          <div
            className="w-full h-[5.1875rem] px-[1.5625rem] py-[1.375rem] bg-[#E3E3FA] rounded-lg flex justify-between items-center cursor-pointer"
            onClick={() => handleClick('/studyroom-create')}>
            <div>
              <p className="text-[#786A82] text-[.8125rem]">
                찾으시는 스터디룸이 없나요?
              </p>
              <p className="font-semibold text-sm">
                쉽고 빠른 스터디룸 개설하기
              </p>
            </div>
            <WavingHand />
          </div>
        </div>

        <div>
          <p className="text-lg text-[#212529] font-bold mt-[.5625rem]">
            지금 떠오르고 있는
            <br />
            스터디룸
          </p>
          <div className="my-[1.125rem] flex justify-between">
            <label className="flex items-center text-sm font-bold text-[#262626]">
              <input
                type="checkbox"
                // disabled={disabled}
                // checked={checked}
                // onChange={({ target: { checked } }) => onChange(checked)}
                className="w-[1.125rem] h-[1.125rem] mr-[.5625rem]"
              />
              모집 중인 스터디만 보기
            </label>
            {/* <p> 2 / 6</p> */}
          </div>

          <div className="flex flex-col gap-y-[1.125rem]">
            {StudyroomCardItems.map((cardItem, idx) => (
              <StudyroomCard
                key={idx} // 각 카드에 고유한 key prop을 추가
                position={cardItem.position} // 각 cardItem의 속성을 개별적으로 지정
                title={cardItem.title}
                tags={cardItem.tags}
                startDate={cardItem.startDate}
                endDate={cardItem.endDate}
                views={cardItem.views}
              />
            ))}
          </div>
        </div>
      </div>
      <Gnb />
    </div>
  );
};

export default Page;
