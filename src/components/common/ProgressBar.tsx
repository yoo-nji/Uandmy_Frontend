interface ProgressProps {
  progress: number;
  page: number;
}

const ProgressBar = ({ progress, page }: ProgressProps) => {
  const progressBarPercent = `${progress}%`;
  return (
    <div className="w-full">
      <div className="h-[0.125rem] box-border bg-[#BDBDBD] relative">
        <div
          className="w h-full bg-primary "
          style={{ width: progressBarPercent }}></div>
      </div>
      <div className="flex justify-between w-full">
        <span className="text-[0.75rem]">
          <span className="text-black">{page}</span>
          <span className="text-[#9D9D9D]">/4</span>
        </span>
        <span className="text-[#9D9D9D] text-[0.875rem] underline">SKIP</span>
      </div>
    </div>
  );
};
export default ProgressBar;
