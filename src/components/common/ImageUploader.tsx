'use client';

import { ChangeEvent, useRef, useState } from 'react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  width?: string;
  height?: string;
  defaultImage?: string;
  borderRadius?: string;
  borderStyle?: string;
}

/**
 * @summary ImageUploader 컴포넌트

 * @description 사용자가 이미지를 업로드할 수 있도록 하는 컴포넌트입니다. 클릭 시 파일 입력창이 열리며, 이미지를 선택하면 미리보기를 보여줍니다.
 *
 * @param {object} props - 컴포넌트에 전달되는 props입니다.
 * @param {function} props.onImageUpload - 이미지 업로드 시 호출되는 콜백 함수. 선택된 파일을 인수로 전달합니다.
 * @param {string} props.width - 이미지 업로더의 너비. 기본값은 10rem입니다.
 * @param {string} props.height - 이미지 업로더의 높이. 기본값은 10rem입니다.
 * @param {string} props.defaultImage - 기본으로 표시될 이미지 URL.
 * @param {string} props.borderRadius - 이미지의 테두리 반경을 설정합니다. 기본값은 50%로, 원형으로 표시됩니다.
 * @param {string} props.borderStyle - 이미지 업로더의 테두리 스타일을 설정합니다. 기본값은 'border-grey'입니다.
 *
 * @returns {JSX.Element} 이미지 업로더 컴포넌트
 */

const ImageUploader = ({
  onImageUpload,
  width = '10rem',
  height = '10rem',
  defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  borderRadius = '50%',
  borderStyle = 'border-grey',
}: ImageUploaderProps) => {
  const [imagePreview, setImagePreview] = useState<string>(defaultImage);
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
          className={`overflow-hidden cursor-pointer ${borderStyle}`}
          onClick={handleImageClick}
          style={{
            width,
            height,
            borderRadius,
          }}>
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
