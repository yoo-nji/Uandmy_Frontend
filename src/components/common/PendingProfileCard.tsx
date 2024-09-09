'use client';

import { useRouter } from 'next/navigation';

import Avartar from './Avatar';
import Button from './Button';
import TagBox from './TagBox';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal';

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
  const [isModalOpen, setIsModalOpen] = useState(false); //확인 모달
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(
    null,
  );
  const [modalAction, setModalAction] = useState<'accept' | 'reject' | null>(
    null,
  );

  const handleClick = (id: string) => {
    // 해당 공개프로필 상세 페이지로 이동
    router.push(`/public-profile/${id}`);
  };

  const openModal = (action: 'accept' | 'reject', id: string) => {
    setSelectedProfileId(id); // 선택된 프로필 ID 저장
    setModalAction(action); //수락 또는 거절
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfileId(null);
    setModalAction(null);
  };

  const handleModalConfirm = () => {
    if (selectedProfileId && modalAction === 'accept') {
      handleAccept(selectedProfileId);
    } else if (selectedProfileId && modalAction === 'reject') {
      handleReject(selectedProfileId);
    }
    closeModal();
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {ProfileData.map((profile, index) => (
          <div key={index} onClick={() => handleClick(profile.id)}>
            <div className="mb-2 text-sm font-medium">
              {profile.registerDate}
            </div>
            <div className="w-full h-auto p-3 border-2 border-[#E9E9E9] bg-white rounded-lg space-y-2">
              <div className="flex flex-row gap-2">
                <Avartar size={56} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-semibold text-base">{profile.name}</p>
                    <p className="text-[0.813rem] text-[#65657E]">
                      {profile.job}
                    </p>
                    <div className="flex flex-row gap-1 text-[0.688rem] text-[#767688]">
                      <p>스터디 </p>
                      <span className="flex">
                        <p className="text-[#7876E3]">{profile.totalStudy}</p>
                        <p className="text-[#7876E3]">회</p>
                      </span>

                      <p>|</p>
                      <p>출석률</p>
                      <span className="flex">
                        <p className="text-[#7876E3]">{profile.attendance}</p>
                        <p className="text-[#7876E3]">%</p>
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end items-center">
                    <Button
                      label={'거절'}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation(); // 프로필 상세 페이지로 이동 금지
                        openModal('reject', profile.id);
                      }}
                      bgColor="bg-[#F1F1F1]"
                      textColor="text-black"
                      rounded="rounded-full"
                      className="w-[3.5rem] h-[2.063rem] text-xs"
                    />

                    <Button
                      label={'수락'}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation(); // 프로필 상세 페이지로 이동 금지
                        openModal('accept', profile.id);
                      }}
                      rounded="rounded-full"
                      className="w-[3.5rem] h-[2.063rem] text-xs"
                    />
                  </div>
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
      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={handleModalConfirm}
        onReject={closeModal}
        onCancel={closeModal}
        message={
          modalAction === 'reject'
            ? '정말 거절하시겠습니까?'
            : '정말 수락하시겠습니까?'
        }
        confirmLabel="예"
        rejectLabel="아니오"
      />
    </>
  );
};

export default PendingProfileCard;
