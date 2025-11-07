/*
  PMO Master
  Raymundo Paz
  November 3rd, 2025
*/

import { forwardRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Action } from '../../../model/Misc';
import dispatchCommand from '../../../commands/CommandHandler';

import './FabMenu.css';

interface FabMenuProps {
  menuRef?: any;
  position: { x: number, y: number };
  menuType?: 'primary' | 'secondary' | 'tertiary';
  options: Action[];
}

const FabMenuComponent: React.FC<FabMenuProps> = ({ menuRef = undefined,  position, options = [], menuType = 'primary' }) => {

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const menu = menuRef.current as HTMLDivElement;
    const rect = menu.getBoundingClientRect();

    setCoordinates({ x: position.x - rect.width, y: position.y - rect.height - 8 });
  }, [position.x, position.y]);

  function getDelay(index: number, length: number): number {
    return (length - index) / 20;
  }

  function handleOptionClick(action: string, payload: any): void {
    dispatchCommand(action, payload);
  }

  return (
    <div ref={menuRef} className={`fab-menu ${menuType}`} style={{ left: coordinates.x, top: coordinates.y }}>
      <AnimatePresence>
        {
          options.map((option: Action, index: number) => (
            <motion.span 
            initial={{ opacity: 0, transform: 'scaleX(0.2)' }}
            animate={{ opacity: 1, transform: 'scaleX(1)' }}
            exit={{ opacity: 0, transform: 'scaleX(0.2)'}}
            transition={{ delay: getDelay(index, options.length), duration: 0.250,  ease: [0.42, 1.67, 0.21, 0.9] }}
            tabIndex={0} key={index} 
            className="fab-menu-option"
            onClick={() => { handleOptionClick(option.action, option.payload); }}
            >{option.name}</motion.span>
          ))
        }
      </AnimatePresence>
    </div>
  );
}

const FabMenu = forwardRef((props: FabMenuProps, ref) => (
  <FabMenuComponent {...props} menuRef={ref} />
))

export default FabMenu;
