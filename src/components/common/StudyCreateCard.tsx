'use client';

// - studyName: 스터디 이름
// - memberCount: 스터디에 참여하는 멤버 수
// - daysLeft: 스터디 종료일까지 남은 일수
// - studyImage: 스터디와 관련된 이미지 (프레임에 표시)
interface StudyCreateCardProps {
  studyName: string;
  memberCount: number;
  daysLeft: number;
  studyImage: string;
}

const StudyCreateCard: React.FC<StudyCreateCardProps> = ({
  studyName,
  memberCount,
  daysLeft,
  studyImage,
}) => {
  return (
    <div className="relative">
      {/* Background Card */}
      <div className="absolute inset-0 w-[9.125rem] rounded-[0.66rem] border-[0.082rem] border-[#F3F3F3] bg-gradient-to-r from-[#7273FF] to-[rgb(184,185,255)] backdrop-blur-[0.11rem]"></div>

      {/* Main Study Card */}
      <div className="flex flex-col pt-[1.5rem] items-center w-[9.125rem] h-[12.68rem] rounded-[0.66rem] border-[0.082rem] border-[#e3e2e2ed] bg-gradient-to-r from-[#fafaff8b] to-[#eaeaff77] backdrop-blur-[0.11rem]">
        {/* Study Frame */}
        <div className="mb-[4.49px] h-[4.875rem] w-[4.875rem] relative">
          <img src={studyImage} alt={`${studyName} 스터디 이미지`} />
        </div>

        {/* Study Info */}
        <div className="flex flex-col items-center gap-[1.25rem]">
          <div className="flex flex-col items-center gap-[0.125rem]">
            <h2 className="text-[0.875rem] font-semibold ">{studyName}</h2>
            <h3 className="text-[0.625rem] font-semibold ">
              멤버<span>{memberCount}</span>
            </h3>
          </div>
          <h4 className="text-[0.75rem] text-center">
            D-<span>{daysLeft}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default StudyCreateCard;
