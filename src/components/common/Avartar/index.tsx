interface AvartarProps {
  src?: string;
  alt?: string;
  size?: number | string;
  borderRadius?: number | string;
}
const Avartar = ({
  src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  alt = '기본 이미지',
  size = 50,
  borderRadius = '50%',
}: AvartarProps) => {
  const avartarStyle = {
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
  };
  return (
    <div>
      <img src={src} alt={alt} style={avartarStyle} />
    </div>
  );
};

export default Avartar;
