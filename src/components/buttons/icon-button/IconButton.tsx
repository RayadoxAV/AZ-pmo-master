/*
  PMO Master
  Raymundo Paz
  October 15th, 2025
*/

import './IconButton.css';

interface IconButtonProps {
  icon: string;
  iconStyle?: 'outlined' | 'rounded' | 'sharp';
  className?: string;
  style?: React.CSSProperties;

  onClick?: (event: React.MouseEvent) => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, iconStyle = 'rounded', className = '', style, onClick }) => {

  function handleButtonClick(event: React.MouseEvent): void {
    if (onClick) {
      onClick(event);
    }
  }

  return (
    <button onClick={handleButtonClick}  className={`icon-button ${className}`} style={style}>
      <span className={`material-symbols-${iconStyle}`}>{icon}</span>
    </button>
  );
}

export default IconButton;
