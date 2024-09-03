import Avartar from './Avatar';
import Button from './Button';
import TagBox from './TagBox';

interface ProfileCardProps {
  ProfileDatas: {
    name: string;
    job: string;
    totalStudy: number;
    attendance: number;
    text: string;
    tags: string[];
    registerDate: string;
  }[];
  handleAccept: () => void;
}

const PendingProfileCard = ({
  ProfileDatas,
  handleAccept,
}: ProfileCardProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        {ProfileDatas.map((profile, index) => (
          <div key={index}>
            <div className="mb-2 text-sm font-medium">
              {profile.registerDate}
            </div>
            <div className="w-full h-auto p-3 border-2 border-[#E9E9E9] rounded-lg space-y-2">
              <div className="flex flex-row gap-2">
                <Avartar size={56} />
                <div>
                  <p className="font-semibold text-base">{profile.name}</p>
                  <p className="text-[0.813rem] text-[#65657E]">
                    {profile.job}
                  </p>
                  <div className="flex flex-row gap-1 text-[0.688rem] text-[#767688]">
                    <p className="">스터디 </p>
                    <p className="text-[#7876E3]">{profile.totalStudy}</p>
                    <p className="text-[#7876E3]">회</p>
                    <p>|</p>
                    <p>출석률</p>
                    <p className="text-[#7876E3]">{profile.attendance}</p>
                    <p className="text-[#7876E3]">%</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  <Button
                    label={'거절'}
                    onClick={handleAccept}
                    bgColor="bg-[#F1F1F1]"
                    textColor="text-black"
                    rounded="rounded-full"
                    className="w-[3.5rem] h-[2.063rem] text-xs "
                  />
                  <Button
                    label={'수락'}
                    onClick={handleAccept}
                    rounded="rounded-full"
                    className="w-[3.5rem] h-[2.063rem] text-xs"
                  />
                </div>
              </div>

              <p>{profile.text}</p>
              <div className="flex flex-row gap-2">
                {profile.tags.map((tag, index) => (
                  <TagBox key={index} label={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default PendingProfileCard;
