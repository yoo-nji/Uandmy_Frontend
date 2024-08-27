'use client';
import { useState } from 'react';
import DropdownIcon from '../../../public/images/DropdownIcon.svg';

interface DropdownProps {
  items: {
    id: string;
    label: string;
    options: string[];
  }[];
}

const Dropdown = ({ items }: DropdownProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleDropdown = (menuId: string) => {
    setOpenMenu((prev) => (prev === menuId ? null : menuId));
  };

  // 선택된 옵션을 저장할 상태, 각 id에 대해 선택된 값을 저장
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >(
    items.reduce((acc: Record<string, string>, item) => {
      acc[item.id] = item.label; // 초기값은 label로 설정
      return acc;
    }, {}),
  );

  const handleOptionClick = (menuId: string, option: string) => {
    // 선택된 옵션 값을 상태에 저장
    setSelectedOptions((prev) => ({
      ...prev,
      [menuId]: option,
    }));
    setOpenMenu(null); // 선택 후 드롭다운 닫기
  };

  return (
    <div className="flex gap-4">
      {items.map((menu) => (
        <div key={menu.id} className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleDropdown(menu.id)}>
            <p>{selectedOptions[menu.id]}</p>
            <DropdownIcon />
          </div>
          {openMenu === menu.id && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max bg-white border border-[#8655FF] rounded shadow-lg z-10">
              <ul className="flex flex-col">
                {menu.options.map((option, index) => (
                  <button
                    key={index}
                    className="p-2 text-center hover:bg-[#8655FF] hover:text-white"
                    onClick={() => handleOptionClick(menu.id, option)}>
                    {option}
                  </button>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
