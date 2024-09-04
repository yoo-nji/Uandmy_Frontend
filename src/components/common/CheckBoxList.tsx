'use client';
import { useEffect, useState } from 'react';

import CheckBox from './CheckBox';

interface CheckBoxListProps {
  checkBoxDatas: string[];
  selectedValue?: string | null;
  onChange: (data: string[] | string | null) => void;
  singleSelect?: boolean;
}
const CheckBoxList = ({
  checkBoxDatas,
  selectedValue,
  onChange,
  singleSelect = false,
}: CheckBoxListProps) => {
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>(
    new Array(checkBoxDatas.length).fill(false),
  );
  useEffect(() => {
    if (singleSelect) {
      const updatedCheckedList = new Array(checkBoxDatas.length).fill(false);
      if (selectedValue) {
        const selectedIndex = checkBoxDatas.indexOf(selectedValue);
        if (selectedIndex !== -1) {
          updatedCheckedList[selectedIndex] = true;
        }
      }
      setIsCheckedList(updatedCheckedList);
    }
  }, [selectedValue, singleSelect, checkBoxDatas]);

  const handleCheckBox = (index: number) => {
    let updatedCheckedList: boolean[];

    //단일 선택 시
    if (singleSelect) {
      if (isCheckedList[index]) {
        updatedCheckedList = new Array(checkBoxDatas.length).fill(false);
        onChange(null);
      } else {
        updatedCheckedList = new Array(checkBoxDatas.length).fill(false);
        updatedCheckedList[index] = true;
        onChange(checkBoxDatas[index]);
      }
    } else {
      //다중 선택 시
      updatedCheckedList = isCheckedList.map((item, i) =>
        i === index ? !item : item,
      );
      const selected = checkBoxDatas.filter((_, i) => updatedCheckedList[i]);
      onChange(selected);
    }

    setIsCheckedList(updatedCheckedList);
  };

  return (
    <div className="flex flex-col gap-4">
      {checkBoxDatas.map((label, index) => (
        <CheckBox
          key={index}
          label={label}
          checked={isCheckedList[index]}
          onChange={() => handleCheckBox(index)}
        />
      ))}
    </div>
  );
};
export default CheckBoxList;
