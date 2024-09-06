import Button from './Button';

interface BottomButtonProps {
  acceptedCount: number;
  handleTotalAccept: () => void;
}

const BottomButton = ({
  acceptedCount,
  handleTotalAccept,
}: BottomButtonProps) => {
  return (
    <>
      <div className="box-border flex flex-row gap-2 w-full fixed bottom-20 right-0 left-0 p-10 ">
        <span>
          <p className="text-[#82829B]">수락가능인원</p>
          <div className="flex">
            <p className="text-primary">{acceptedCount}명</p>
            <p>/ 4명</p>
          </div>
        </span>

        <Button
          label="전체 수락하기"
          onClick={handleTotalAccept}
          bgColor="bg-[#804CFF]"
          className="w-[15rem] h-[3.063rem]"
        />
      </div>
    </>
  );
};
export default BottomButton;
