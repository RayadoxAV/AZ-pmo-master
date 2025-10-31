/*
  PMO Master
  Raymundo Paz
  October 10th, 2025
*/

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, PanInfo } from 'motion/react';

import './Slider.css';

interface SliderProps {
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  insetIcon?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;

  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ minValue = 0, maxValue = 100, initialValue, size = 'm', insetIcon = '', className = '', style, disabled = false, onChange }) => {
  const containerRef = useRef(undefined as any);
  const handleRef = useRef(undefined as any);
  const valueIndicatorRef = useRef(undefined as any);

  const leftTrackRef = useRef(undefined as any);
  const rightTrackRef = useRef(undefined as any);

  const [isIndicatorVisible, setIndicatorVisible] = useState(false);
  const [value, setValue] = useState(initialValue || 0);
  const [iconPosition, setIconPosition] = useState(16 + 6);

  useEffect(() => {

    if (value === 0) {
      return;
    }
    transformControls(value);
  }, []);


  function handleDragStart(/* event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo */): void {
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
    if (!handleRef.current || !containerRef.current) {
      return;
    }

    if (value !== undefined) {
      const container = containerRef.current as HTMLDivElement;
      const handle = handleRef.current as HTMLButtonElement;
      const indicator = valueIndicatorRef.current as HTMLSpanElement;

      const maxX = container.getBoundingClientRect().width - handle.getBoundingClientRect().width;


      const handleX = (value / 100) * maxX;

      if (indicator) {
        indicator.style.left = `${handleX}px`;
      }

      leftTrackRef.current.style.width = `${value}%`;
      rightTrackRef.current.style.width = `${100 - value}%`;

      const transformValues = handle.style.transform.match(/[0-9]+/g);

      if (transformValues) {
        handle.style.left = `${handleX - Number.parseFloat(transformValues[0])}px`;
      } else {
        handle.style.left = `${handleX}px`;
      }

      if (leftTrackRef.current.clientWidth < 40) {
        setIconPosition(handleX + 16 + 6);
      } else {
        setIconPosition(6);
      }

    } else {
      const container = containerRef.current as HTMLDivElement;
      const handle = handleRef.current as HTMLButtonElement;
      const indicator = valueIndicatorRef.current as HTMLSpanElement;

      const handleX = handle.getBoundingClientRect().x - container.getBoundingClientRect().x;

      const maxX = container.getBoundingClientRect().width - handle.getBoundingClientRect().width;

      const calculatedValue = (handleX / maxX) * 100;

      if (indicator) {
        indicator.style.left = `calc(${handleX}px)`;
      }

      if (!leftTrackRef.current || !rightTrackRef.current) {
        return;
      }

      leftTrackRef.current.style.width = `${calculatedValue}%`;
      rightTrackRef.current.style.width = `${100 - calculatedValue}%`;

      if (leftTrackRef.current.clientWidth < 40) {
        setIconPosition(handleX + 16 + 6);
      } else {
        setIconPosition(6);
      }

      setValue(calculatedValue);


      if (onChange) {
        onChange(calculatedValue);
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    const key = event.key;

    if (key === 'ArrowRight') {
      const tempValue = value + 1;
      if (tempValue > maxValue) {
        return;
      }

      transformControls(tempValue);
      setValue(tempValue);

      if (onChange) {
        onChange(tempValue);
      }

    } else if (key === 'ArrowLeft') {
      const tempValue = value - 1;
      if (tempValue < minValue) {
        return;
      }

      transformControls(tempValue);
      setValue(tempValue);

      if (onChange) {
        onChange(tempValue);
      }
    }
  }

  return (
    <motion.div ref={containerRef} className={`slider-container ${size} ${className} ${disabled ? 'disabled' : ''}`} style={style}>
        {
          insetIcon &&
          <motion.span
            animate={{ left: `${iconPosition}px`  }}
            transition={{ duration: 0.1, ease: [0.05, 0.7, 0.1, 1] }}
            className="icon material-symbols-rounded">{insetIcon}</motion.span>
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
        disabled={disabled}
        onKeyDown={handleKeyDown}>
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
