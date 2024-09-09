import React from 'react';

import Button from './Button';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

const ConfirmModal = ({
  isOpen = false,
  onConfirm = () => {},
  onCancel = () => {},
  message = '정말 수락하시겠습니까?',
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col items-center bg-white rounded-lg p-6 w-80 gap-5 text-black text-sm">
        <div>{message}</div>
        <div className="flex justify-center w-full gap-6">
          <Button
            label={'거절'}
            onClick={onCancel}
            bgColor="bg-[#F1F1F1]"
            textColor="text-black"
            rounded="rounded-full"
            className="w-[4.5rem] h-[2.063rem] text-xs "
          />
          <Button
            label={'수락'}
            onClick={onConfirm}
            rounded="rounded-full"
            className="w-[4.5rem] h-[2.063rem] text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
