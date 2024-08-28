'use client';
import { useState } from 'react';
import CheckBox from './CheckBox';

interface CheckBoxListProps {
  checkBoxDatas: string[];
  onChange: (data: string[] | string | null) => void;
  singleSelect?: boolean;
}
const CheckBoxList = ({
  checkBoxDatas,
  onChange,
  singleSelect = false,
}: CheckBoxListProps) => {
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>(
    new Array(checkBoxDatas.length).fill(false),
  );

  const handleCheckBox = (index: number) => {
    let updatedCheckedList: boolean[];

    if (singleSelect) {
      updatedCheckedList = new Array(checkBoxDatas.length).fill(false);
      updatedCheckedList[index] = true;
      const selected = checkBoxDatas[index];
      onChange(selected);
    } else {
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
