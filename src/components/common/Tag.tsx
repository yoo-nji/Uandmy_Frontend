interface tagProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const Tag = ({ label, selected, onClick }: tagProps) => {
  return (
    <button
      className={`w-auto h-[2.5rem] cursor-pointer box-border border-2 rounded-lg px-2 ${selected ? 'bg-primaryHover text-primary border-primary' : '*:bg-grey text-black border-greyBorder'} `}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Tag;
