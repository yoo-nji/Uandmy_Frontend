'use client';

import { useState } from 'react';

import Tag from './Tag';

interface TagListProps {
  tagData: string[];
  onTagSelect?: (selectedTag: string[]) => void;
  className?: string;
  disabled?: boolean;
}

/**
 * 태그 목록을 표시하는 컴포넌트입니다.
 *
 * @param {TagListProps} props - 컴포넌트의 속성 (Props).
 * @param {string[]} props.tagData - 표시할 태그 문자열 배열.
 * @param {(selectedTag: string[]) => void} [props.onTagSelect] - 선택된 태그가 변경될 때 호출되는 선택적 콜백 함수.
 * @param {string} [props.className] - 선택적 CSS 클래스 이름.
 *
 * @returns {JSX.Element} 렌더링된 TagList 컴포넌트.
 */

const TagList = ({
  tagData,
  onTagSelect,
  className,
  disabled,
}: TagListProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const handleTagClick = (label: string) => {
    const updatedTags = selectedTags.includes(label)
      ? selectedTags.filter((tag) => tag !== label)
      : [...selectedTags, label];

    setSelectedTags(updatedTags);

    // 선택된 태그가 변경될 때 부모 컴포넌트로 변경 사항을 알림
    if (onTagSelect) {
      onTagSelect(updatedTags);
    }
  };
  return (
    <div className={className}>
      {tagData.map((tag) => (
        <Tag
          key={tag}
          label={tag}
          selected={selectedTags.includes(tag)}
          onClick={() => handleTagClick(tag)}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default TagList;
