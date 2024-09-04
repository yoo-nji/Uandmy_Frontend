'use client';
interface UserProfileCardProps {
  name: string;
  role: string | undefined;
  description: string;
  profileImage: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  role,
  description,
  profileImage,
}) => {
  return (
    <div className="relative">
      {/* Background Card */}
      <div className="absolute inset-0 w-[9.125rem] rounded-[0.66rem] border-[0.082rem] border-[#F3F3F3] bg-gradient-to-r from-[#7273FF] to-[rgb(184,185,255)] backdrop-blur-[0.11rem]"></div>

      {/* Main Profile Card */}
      <div className="flex flex-col pt-[1.5rem] items-center w-[9.125rem] h-[12.68rem] rounded-[0.66rem] border-[0.082rem] border-[#e3e2e2ed] bg-gradient-to-r from-[#fafaff8b] to-[#eaeaff77] backdrop-blur-[0.11rem] rotate-6">
        {/* Profile Frame */}
        <div
          className="mb-[0.0625rem] h-[4.875rem] w-[4.875rem] relative"
          style={{
            backgroundImage: `url(/images/profile-frame.png)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}>
          <img
            className="absolute top-[1.5rem] left-[0.9375rem]"
            src={profileImage}
            alt={`${name} 프로필 이미지`}
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col items-center gap-[1.25rem]">
          <div className="flex flex-col items-center gap-[0.125rem]">
            <h2 className="text-[0.875rem] font-semibold ">{name}</h2>
            <h3 className="text-[0.625rem] font-semibold ">{role}</h3>
          </div>
          <h4 className="text-[0.75rem] text-center">{description}</h4>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
