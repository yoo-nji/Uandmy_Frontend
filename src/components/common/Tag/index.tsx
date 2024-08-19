interface tagProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const Tag = ({ label, selected, onClick }: tagProps) => {
  return (
    <button
      className={`px-4 py-2 m-1 rounded-full border transition ${selected ? 'bg-primary text-white border-primary' : '*:bg-grey text-white border-grey'} `}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Tag;
