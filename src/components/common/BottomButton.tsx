import Button from './Button';

interface BottomButtonProps {
  label: string;
  acceptedCount?: number;
  totalCount?: number;
  onClick?: () => void;
}

const BottomButton = ({
  label,
  acceptedCount,
  totalCount,
  onClick,
}: BottomButtonProps) => {
  return (
    <div
      className="fixed bottom-20 border-t border-[#DDDDDD] pt-5 flex flex-row
     w-full mx-auto right-0 left-0 justify-center items-center ">
      <div className="flex justify-center items-center gap-4">
        <span>
          <p className="text-[#82829B]">수락가능인원</p>
          <div className="flex">
            <p className="text-primary">{acceptedCount}명</p>
            <p>/ {totalCount}명</p>
          </div>
        </span>

        <Button
          label={label}
          onClick={onClick}
          bgColor="bg-[#804CFF]"
          className="w-[15rem] h-[3.063rem]"
        />
      </div>
    </div>
  );
};
export default BottomButton;
