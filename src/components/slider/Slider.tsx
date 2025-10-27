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
}

const Slider: React.FC<SliderProps> = ({ size = 'm', insetIcon = '', className = '', style }) => {
  const containerRef = useRef(undefined as any);
  const handleRef = useRef(undefined as any);
  const valueIndicatorRef = useRef(undefined as any);

  const leftTrackRef = useRef(undefined as any);
  const rightTrackRef = useRef(undefined as any);

  const [isIndicatorVisible, setIndicatorVisible] = useState(false);
  const [value, setValue] = useState(0);


  function handleDragStart(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void {
    setIndicatorVisible(true);
  }

  function handleDrag(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void {
    if (!valueIndicatorRef.current || !handleRef.current || !containerRef.current) {
      return;
    }

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

  function handleDragEnd(): void {
    setIndicatorVisible(false);
  }

  return (
    <motion.div ref={containerRef} className={`slider-container ${size} ${className}`} style={style}>
      {
        insetIcon && <span className="icon material-symbols-rounded"></span>
      }
      <div
        ref={leftTrackRef}
        className="left"></div>
      <motion.button
        ref={handleRef}
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={containerRef}
        draggable={true}
        className="handle-container"
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}>
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
            className="value-indicator">{ value.toFixed(0) }</motion.span>
        }
      </AnimatePresence>
    </motion.div>
  );
}

export default Slider;
