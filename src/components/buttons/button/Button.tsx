/*
  PMO Master
  Raymundo Paz
  October 15th, 2025
*/

import { useRef } from 'react';
import './Button.css';

interface ButtonProps {
  icon?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  buttonStyle?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
  children?: any;
  disabled?: boolean;
  buttonType?: 'button' | 'reset' | 'submit';

  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ icon = '', size = 'm', buttonStyle = 'filled', children, disabled = false, buttonType = 'button', onClick }) => {
  const buttonRef = useRef(undefined as any);

  function handleButtonClick(event: React.MouseEvent): void {
    createRipple(event.nativeEvent);

    if (onClick) {
      onClick(event);
    }
  }

  function createRipple(event: MouseEvent): void {
    if (!buttonRef) {
      return;
    }

    const button = buttonRef.current as HTMLButtonElement;

    const ripple = document.createElement('span');

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    ripple.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    ripple.classList.add('ripple');

    const previousRipple = document.getElementsByClassName('ripple')[0];

    if (previousRipple) {
      previousRipple.remove();
    }

    button.appendChild(ripple);
  }

  return (
    <button 
      ref={buttonRef} 
      disabled={disabled} 
      className={`button ${size} ${buttonStyle}`} 
      type={buttonType}
      onClick={handleButtonClick}>{children}</button>
  );
}

export default Button;
