import React from 'react';

interface bookmarkProps {
  onClick: React.MouseEventHandler<SVGElement>;
  filled: boolean;
}

const Bookmark = ({ onClick, filled = false }: bookmarkProps) => {
  return (
    <svg
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={filled ? '#7876E3' : 'none'}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 21.5L12 16.5L5 21.5V5.5C5 4.96957 5.21071 4.46086 5.58579 4.08579C5.96086 3.71071 6.46957 3.5 7 3.5H17C17.5304 3.5 18.0391 3.71071 18.4142 4.08579C18.7893 4.46086 19 4.96957 19 5.5V21.5Z"
        stroke={filled ? '#7876E3' : 'black'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bookmark;
