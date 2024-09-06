interface SummaryProps {
  boxDatas: {
    img: string;
    alt: string;
    label: string;
    count: number;
  }[];
}

const UserStatusSummary = ({ boxDatas }: SummaryProps) => {
  return (
    <>
      <div className="w-full h-auto border-2 border-[#E0D8FF] bg-[#FDFBFF] rounded-lg p-3 ">
        <div className="flex flex-row items-center justify-between mx-3">
          {boxDatas.map((data, index) => (
            <div key={index} className="flex items-center  ">
              <div className="flex flex-col items-center text-center ">
                <span className="flex w-[2.563rem] h-[2.563rem] items-center justify-center border border-[#E0D8FF] bg-[#FDFBFF] rounded-full">
                  <img
                    src={data.img}
                    alt={data.alt}
                    className="w-[1rem] h-[1rem]"
                  />
                </span>
                <span>{data.label}</span>
                <p>{data.count}</p>
              </div>
              <div>
                {index < boxDatas.length - 1 && (
                  <span className="ml-12 text-[#EEEAFF]">|</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default UserStatusSummary;
