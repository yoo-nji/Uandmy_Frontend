'use client';

import { useRouter } from 'next/navigation';

import Avartar from './Avatar';
import Button from './Button';
import TagBox from './TagBox';

interface ProfileCardProps {
  ProfileData: {
    id: string;
    name: string;
    job: string;
    totalStudy: number;
    attendance: number;
    text: string;
    tags: string[];
    registerDate: string;
  }[];
  handleReject: (id: string) => void;
  handleAccept: (id: string) => void;
}

const PendingProfileCard = ({
  ProfileData,
  handleReject,
  handleAccept,
}: ProfileCardProps) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    //해당 공개프로필 상세 페이지로 이동
    router.push(`/public-profile/${id}`);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {ProfileData.map((profile, index) => (
          <div key={index} onClick={() => handleClick(profile.id)}>
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
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation(); //프로필 상세 페이지로 이동 금지
                      handleReject(profile.id);
                    }}
                    bgColor="bg-[#F1F1F1]"
                    textColor="text-black"
                    rounded="rounded-full"
                    className="w-[3.5rem] h-[2.063rem] text-xs "
                  />
                  <Button
                    label={'수락'}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation(); //프로필 상세 페이지로 이동 금지
                      handleAccept(profile.id);
                    }}
                    rounded="rounded-full"
                    className="w-[3.5rem] h-[2.063rem] text-xs"
                  />
                </div>
              </div>

              <p>{profile.text}</p>
              <div className="flex flex-row gap-2">
                {profile.tags.map((tag, index) => (
                  <TagBox key={index}>{tag}</TagBox>
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
