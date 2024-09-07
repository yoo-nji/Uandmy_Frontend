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
    <div className="relative box-border flex flex-row gap-2 w-full mx-auto right-0 left-0 ">
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
  );
};
export default BottomButton;
