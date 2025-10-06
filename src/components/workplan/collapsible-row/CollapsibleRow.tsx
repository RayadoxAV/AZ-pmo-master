/*
  PMO Master
  Raymundo Paz
  October 4th, 2025
*/

import { useState } from 'react';
import Cell, { CellValue } from '../cell/Cell';
import './CollapsibleRow.css';
import { useAppDispatch } from '../../../state/hooks';
import { setContextMenuProps } from '../../../state/slices/WindowSlice';

interface CollapsibleRowProps {
  data: CellValue[];
  cellWidths: number[];
  headerRow?: boolean;
}

const CollapsibleRow: React.FC<CollapsibleRowProps> = ({ data = [], cellWidths, headerRow = false }) => {

  const dispatch = useAppDispatch();

  const [isCollapsed, setCollapsed] = useState(false);

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
    
    dispatch(setContextMenuProps({ visible: true, x: 100, y: 100 }));
  }

  return (
    <div className={`collapsible-row ${isCollapsed ? 'collapsed' : ''} ${headerRow ? 'header' : ''}`} style={{ '--widths': generateWidths(), '--color': 'red' } as React.CSSProperties} onContextMenu={handleContextMenu}>
      {
        data.map((cell, index: number) => (
          <Cell key={`cell-${index}`} cell={cell} className={cell.kind} />
        ))
      }
    </div>
  );
}

export default CollapsibleRow;
