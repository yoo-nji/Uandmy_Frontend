'use client';

import { useState } from 'react';

import Tag from './Tag';

interface TagListProps {
  tagData: string[];
  onTagSelect?: (selectedTag: string[]) => void;
  className?: string;
}

const TagList = ({ tagData, onTagSelect, className }: TagListProps) => {
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
        />
      ))}
    </div>
  );
};

export default TagList;
