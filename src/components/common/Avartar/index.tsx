interface AvartarProps {
  src: string;
  alt: string;
  size?: number | string;
  borderRadius?: number | string;
}
const Avartar = ({
  src,
  alt,
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
