'use client';

import { useState } from 'react';

import Tag from '../Tag';

const tagData = [
  '주도적인',
  '열정적인',
  '손이 빠른',
  '신뢰감',
  '노력가',
  '팀워크형',
];
const TagList = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const handleTagClick = (label: string) => {
    setSelectedTags((prev) =>
      prev.includes(label)
        ? prev.filter((tag) => tag !== label)
        : [...prev, label],
    );
  };
  return (
    <div className="flex flex-wrap">
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
