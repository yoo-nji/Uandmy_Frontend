import React from 'react';

import Button from './Button';
import Close from '../../../public/images/Close.svg';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onReject: () => void;
  onCancel: () => void;
  message: string;
}

const ConfirmModal = ({
  isOpen = false,
  onConfirm = () => {},
  onReject,
  onCancel = () => {},
  message = '정말 수락하시겠습니까?',
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative flex flex-col items-center bg-white rounded-lg p-6 w-80 gap-5 text-black text-sm">
        <button onClick={onCancel} className="absolute top-2 right-2">
          <Close style={{ width: '20px', height: '20px' }} />
        </button>
        <div>{message}</div>

        <div className="flex justify-center w-full gap-6">
          <Button
            label={'거절'}
            onClick={onReject}
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
