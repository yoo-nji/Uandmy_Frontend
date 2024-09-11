interface HeaderProps {
  title: string;
}

const CommonHeader = ({ title }: HeaderProps) => {
  return (
    <header className="h-10 flex items-center mb-[.6875rem] text-lg text-[#212529] font-bold">
      {title}
    </header>
  );
};
export default CommonHeader;
