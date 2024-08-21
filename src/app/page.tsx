'use client';

import ImageUploader from '@/components/common/ImageUploader';

export default function Home() {
  const handleImageUpload = (filePath: File) => {
    console.log('Uploaded image path:', filePath);
  };

  return (
    <main>
      <div>
        <ImageUploader onImageUpload={handleImageUpload} />
      </div>
    </main>
  );
}
