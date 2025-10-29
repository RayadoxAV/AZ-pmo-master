/*
  PMO Master
  Raymundo Paz
  October 10th, 2025
*/

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, PanInfo } from 'motion/react';

import './Slider.css';

interface SliderProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  insetIcon?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Slider: React.FC<SliderProps> = ({ size = 'm', insetIcon = '', className = '', style, disabled = false }) => {
  const containerRef = useRef(undefined as any);
  const handleRef = useRef(undefined as any);
  const valueIndicatorRef = useRef(undefined as any);

  const leftTrackRef = useRef(undefined as any);
  const rightTrackRef = useRef(undefined as any);

  const [isIndicatorVisible, setIndicatorVisible] = useState(false);
  const [value, setValue] = useState(20);

  useEffect(() => {
    // leftTrackRef.current.style.width = `${value}%`;
    // rightTrackRef.current.style.width = `${100 - value}%`;

    transformControls(value);
  }, []);


  function handleDragStart(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void {
    if (disabled) {
      return;
    }
    setIndicatorVisible(true);
  }

  function handleDrag(): void {
    transformControls();
  }

  function handleDragEnd(): void {
    if (disabled) {
      return;
    }

    setIndicatorVisible(false);
  }

  function transformControls(value?: number): void {
    if (disabled) {
      return;
    }

    if (!valueIndicatorRef.current || !handleRef.current || !containerRef.current) {
      return;
    }

    if (value) {
      console.log('lamenteibol');
    } else {
      const container = containerRef.current as HTMLDivElement;
      const handle = handleRef.current as HTMLButtonElement;
      const indicator = valueIndicatorRef.current as HTMLSpanElement;

      const handleX = handle.getBoundingClientRect().x - container.getBoundingClientRect().x;


      const maxX = container.getBoundingClientRect().width - handle.getBoundingClientRect().width;

      const calculatedValue = (handleX / maxX) * 100;

      indicator.style.left = `calc(${handleX}px)`;

      if (!leftTrackRef.current || !rightTrackRef.current) {
        return;
      }

      leftTrackRef.current.style.width = `${calculatedValue}%`;
      rightTrackRef.current.style.width = `${100 - calculatedValue}%`;

      setValue(calculatedValue);
    }
  }

  return (
    <motion.div ref={containerRef} className={`slider-container ${size} ${className} ${disabled ? 'disabled' : ''}`} style={style}>
      {
        insetIcon && <span className="icon material-symbols-rounded">{insetIcon}</span>
      }
      <div
        ref={leftTrackRef}
        className="left"></div>
      <motion.button
        ref={handleRef}
        drag={disabled ? false : 'x'}
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={containerRef}
        draggable={disabled}
        className="handle-container"
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        disabled={disabled} >
        <span className="handle"></span>
      </motion.button>
      <div
        ref={rightTrackRef}
        className="right"></div>
      <span className="stop-indicator"></span>
      <AnimatePresence>
        {
          isIndicatorVisible &&
          <motion.span
            ref={valueIndicatorRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="value-indicator">{value.toFixed(0)}</motion.span>
        }
      </AnimatePresence>
    </motion.div>
  );
}

export default Slider;
