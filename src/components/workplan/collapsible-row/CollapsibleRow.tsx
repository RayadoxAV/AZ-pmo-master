/*
  PMO Master
  Raymundo Paz
  October 4th, 2025
*/

import { useState } from 'react';
import Cell, { CellValue } from '../cell/Cell';
import './CollapsibleRow.css';
import { useAppDispatch } from '../../../state/hooks';
import { setContextMenuOptions, setContextMenuProps } from '../../../state/slices/WindowSlice';
import { Action } from '../../../model/Misc';

interface CollapsibleRowProps {
  data: CellValue[];
  cellWidths: number[];
  rowType?: 'header' | 'milestone' | 'task' | 'subtask';
}

const CollapsibleRow: React.FC<CollapsibleRowProps> = ({ data = [], cellWidths, rowType = 'task'}) => {

  const dispatch = useAppDispatch();

  const [isCollapsed] = useState(false);

  const contextMenuOptions: Action[] = [
    {
      name: 'collapse',
      action: 'collapsible_row.collapse',
      payload: [1, 2, 3]
    }
  ];


  function generateWidths(): string {
    let width = '';
    for (let i = 0; i < cellWidths.length; i++) {
      let currentWidth = cellWidths[i];
      if (currentWidth === 0) {
        currentWidth = 5;
      }

      if (currentWidth === -1) {
        width += `minmax(10rem, 1fr) `;
      } else {
        width += `${currentWidth}rem `;
      }

    }
    return width;
  }

  function handleContextMenu(event: React.MouseEvent): void {
    dispatch(setContextMenuProps({ visible: true, x: event.clientX, y: event.clientY }));
    dispatch(setContextMenuOptions(contextMenuOptions));
  }

  return (
    <div tabIndex={-1} className={`collapsible-row ${isCollapsed ? 'collapsed' : ''} ${rowType} `} style={{ '--widths': generateWidths(), '--color': 'red' } as React.CSSProperties} onContextMenu={handleContextMenu}>
      {
        data.map((cell, index: number) => (
          <Cell key={`cell-${index}`} cell={cell} />
        ))
      }
    </div>
  );
}

export default CollapsibleRow;
