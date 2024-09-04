import { useState } from 'react';

interface Item {
  id: string;
  label: string;
}

interface MultiSelectProps {
  items: Item[];
  selectedIds: string[];
  onSelectionChange: (selectedIds: string[]) => void;
  placeholder?: string;
  title?: string;
}

const MultiSelect = ({
  items,
  selectedIds,
  onSelectionChange,
  placeholder = '항목 선택',
  title = '항목 선택',
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelect = (id: string) => {
    const updatedIds = selectedIds.includes(id)
      ? selectedIds.filter((item) => item !== id)
      : [...selectedIds, id];
    onSelectionChange(updatedIds);
  };

  const getSelectedLabels = () => {
    return items
      .filter((item) => selectedIds.includes(item.id))
      .map((item) => item.label)
      .join(', ');
  };

  return (
    <div className="mb-4">
      <div
        className="w-full h-[3rem] border-solid border-2 border-[#CED4DA] rounded-lg placeholder-[#82829B] p-[0.625rem] cursor-pointer"
        onClick={toggleBottomSheet}>
        {selectedIds.length > 0 ? getSelectedLabels() : placeholder}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50">
          <div className="w-full max-w-md bg-white rounded-t-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button onClick={toggleBottomSheet} className="text-red-500">
                닫기
              </button>
            </div>

            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer"
                  onClick={() => handleItemSelect(item.id)}>
                  <span
                    className={`p-2 block hover:bg-[#F0F0F0] ${
                      selectedIds.includes(item.id)
                        ? ' text-[#6224FD]'
                        : ' text-black'
                    }`}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
