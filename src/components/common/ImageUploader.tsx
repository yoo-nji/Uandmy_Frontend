'use client';

import { ChangeEvent, useRef, useState } from 'react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader = ({ onImageUpload }: ImageUploaderProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImagePreview(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
      {imagePreview && (
        <div
          className="w-48 h-48 border border-gray-300 overflow-hidden rounded-lg"
          onClick={handleImageClick}>
          <img
            src={imagePreview}
            alt="Image Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
