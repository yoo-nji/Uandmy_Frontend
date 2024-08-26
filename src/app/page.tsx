'use client';

import TagList from '@/components/common/TagList';

export default function Home() {
  const handleImageUpload = (filePath: File) => {
    console.log('Uploaded image path:', filePath);
  };

  return (
    <main>
      <div>
        <span>hi</span>
        <TagList />
      </div>
    </main>
  );
}
