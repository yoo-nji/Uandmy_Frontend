import { useEffect } from 'react';

interface SpinnerProps {
  message?: string;
  spinnerSize?: string;
}

export default function LoadingSpinner({
  message = '로딩 중...',
  spinnerSize = 'w-[4.1875rem] h-[4.1875rem]',
}: SpinnerProps) {
  useEffect(() => {
    // Spinner가 보일 때 스크롤을 막음
    document.body.style.overflow = 'hidden';

    // Spinner가 사라지면 스크롤을 다시 허용
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
      <div className="flex flex-col justify-center items-center gap-[1.0625rem]">
        {/* 스피너 이미지 */}
        <img
          src="/images/loading-spinner.svg"
          alt="Loading spinner"
          className={`${spinnerSize} animate-spin`}
        />
        {/* 로딩 텍스트 */}
        <p className="text-primary text-[1.0625rem] font-medium">{message}</p>
      </div>
    </div>
  );
}
