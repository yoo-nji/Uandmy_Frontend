'use client';

interface ButtonProps {
  label: string;
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
  padding?: string; // 여백
  rounded?: string; // 경계선 라운딩
  disabled?: boolean; // 비활성화 여부
  className?: string; // 추가적인 Tailwind CSS 클래스
  type?: 'submit' | 'reset' | 'button';
}

const Button = ({
  label,
  onClick,
  bgColor = 'bg-primary',
  textColor = 'text-white',
  padding = 'py-3 px-4',
  rounded = 'rounded-md',
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const disabledStyles = 'bg-[#C6BBE1] text-white cursor-not-allowed';

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
      className={`${disabled ? disabledStyles : `${bgColor} ${textColor}`} ${padding} ${rounded} ${className} flex justify-center items-center`}>
      {label}
    </button>
  );
};

export default Button;
