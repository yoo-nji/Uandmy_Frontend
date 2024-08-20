'use client';
import { useState } from 'react';
import CheckBox from './CheckBox';

const checkBoxDatas = ['툴 능력 확장', '해당 분야의 네트워킹 확장', '취미'];

const CheckBoxList = () => {
  const [checkedList, setCheckedList] = useState<boolean[]>(
    new Array(checkBoxDatas.length).fill(false),
  );

  const handleCheckboxChange = (index: number) => {
    setCheckedList((prevCheckedList) => {
      const updatedCheckedList = [...prevCheckedList];
      updatedCheckedList[index] = !updatedCheckedList[index];
      return updatedCheckedList;
    });
  };

  return (
    <div className="flex flex-col">
      {checkBoxDatas.map((label, index) => (
        <CheckBox
          key={index}
          label={label}
          checked={checkedList[index]}
          onChange={() => handleCheckboxChange(index)}
        />
      ))}
    </div>
  );
};
export default CheckBoxList;
