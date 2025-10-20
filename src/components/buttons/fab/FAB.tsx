/*
  PMO Master
  Raymundo Paz
  October 19th, 2025
*/

import { useRef } from 'react';
import { motion } from 'motion/react';

import './FAB.css';

interface FABProps {
  icon: string;
  onClick: (event: React.MouseEvent) => void;
  size?: 's' | 'm' | 'l';
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  style?: React.CSSProperties;
}

const FAB: React.FC<FABProps> = ({ icon, onClick, size = 's', buttonType = 'primary', className = '', style }) => {
  const buttonRef = useRef(undefined as any);

  function handleClick(event: React.MouseEvent): void {
    if (onClick) {
      onClick(event);
    }

    createRipple(event.nativeEvent);
  }

  function createRipple(event: MouseEvent): void {
    if (!buttonRef || !buttonRef.current) {
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
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.300, ease: [0.42, 1.67, 0.21, 0.9] }}
      ref={buttonRef}
      className={`fab ${size} ${buttonType} ${className}`} 
      style={style as React.CSSProperties} 
      onClick={handleClick}>
      <span className="material-symbols-rounded">{icon}</span>
    </motion.button>
  );
}

export default FAB;
