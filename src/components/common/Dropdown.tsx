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

  return (
    <div className="flex gap-4">
      {items.map((menu) => (
        <div key={menu.id} className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleDropdown(menu.id)}>
            <p>{menu.label}</p>
            <DropdownIcon />
          </div>
          {openMenu === menu.id && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max bg-white border border-[#8655FF] rounded shadow-lg z-10">
              <ul className="flex flex-col">
                {menu.options.map((option, index) => (
                  <button
                    key={index}
                    className="p-2 text-center hover:bg-[#8655FF] hover:text-white">
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
