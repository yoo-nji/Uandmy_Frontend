interface StudyExperienceCardProps {
  title: string;
  score: number;
  attendance: number;
}

const StudyExperienceCard = ({
  title,
  score,
  attendance,
}: StudyExperienceCardProps) => {
  return (
    <>
      <div className="w-[10.313rem] h-[10.313rem] text-lg p-4 border-2 border-[#3F3FFF] rounded-lg flex flex-col">
        <p className="w-[5.438rem] font-bold mb-2">{title}</p>
        <div className="flex flex-row gap-1 w-[6.5rem] h-[1.5rem] justify-center items-center text-[0.813rem] bg-[#9470ED] text-white rounded-lg mb-5">
          <p className="font-semibold">만족 점수</p>
          <p className="font-normal">{score}점</p>
        </div>

        <p className="text-[#9470ED] text-sm">#출석률 {attendance}%</p>
      </div>
    </>
  );
};
export default StudyExperienceCard;
