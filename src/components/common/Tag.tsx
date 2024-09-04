interface tagProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const Tag = ({ label, selected, onClick, disabled }: tagProps) => {
  return (
    <button
      className={`w-auto h-[2.5rem] cursor-pointer box-border border-2 rounded-lg px-2 ${selected ? 'bg-primaryHover text-primary border-primary' : '*:bg-grey text-black border-greyBorder'} `}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}>
      {label}
    </button>
  );
};

export default Tag;
