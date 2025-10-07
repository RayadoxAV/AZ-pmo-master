/*
  PMO Master
  Raymundo Paz
  October 5th, 2025
*/

import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import './ContextMenu.css';
import { setContextMenuProps } from '../../state/slices/WindowSlice';

interface ContextMenuProps {

}

const ContextMenu: React.FC<ContextMenuProps> = ({ }) => {
  const selector = useAppSelector((state) => state.window.contextMenu);
  const dispatch = useAppDispatch();

  const contextMenuRef = useRef(undefined as any);


  function calculateXPosition(): string {
    let finalPosition = selector.x;
    if (contextMenuRef.current) {
      const contextMenuElement = contextMenuRef.current as HTMLDivElement;
      const width = contextMenuElement.clientWidth;

      if (finalPosition + width > 1900) {
        finalPosition = finalPosition - width - 16;
      }
    }

    return `${finalPosition}px`;
  }

  function calculateYPosition(): string {
    return `${selector.y}px`;
  }

  function handleOptionClick(action: string, payload: any[]): void {
    console.log(action, payload);
    dispatch(setContextMenuProps({ visible: false, x: 0, y: 0 }));
  }

  return (
    <div tabIndex={-1} ref={contextMenuRef} className={`context-menu ${selector.visible ? 'visible' : ''}`} style={{ '--xPos': calculateXPosition(), '--yPos': calculateYPosition() } as React.CSSProperties}>
      {
        selector.options.map((value) => (
          <span tabIndex={0} className="context-menu option" key={value.name} onClick={() => { handleOptionClick(value.action, value.payload); }}>{value.name}</span>
        ))
      }
    </div>
  );
}

export default ContextMenu;
