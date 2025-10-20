/*
  PMO Master
  Raymundo Paz
  October 7th, 2025
*/

import React from 'react';
import Cell, { CellValue } from '../cell/Cell';

import './EditableRow.css';
import { input, span } from 'motion/react-client';

interface EditableRowProps {
  baseData: CellValue[];
  cellWidths: number[];
  rowType?: 'milestone' | 'task' | 'subtask';
}

const EditableRow: React.FC<EditableRowProps> = ({ baseData = [], cellWidths, rowType = 'task' }) => {

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

  function getInputForCell(cell: CellValue, key: string) {
    let input: React.ReactElement;
    switch (cell.cellType) {
      case 'text': {
        input = <input key={key} type="text" defaultValue={cell.value} />;
        break;
      }

      case 'percentage': {
        input = <input key={key} type="range" />;
        break;
      }

      case 'formattedNumber': {
        input = <input key={key} type="number" />;
        break;
      }

      case 'date': {
        input = <input key={key} type="date" />
        break;
      }

      case 'enum': {
        input = <select key={key} />;
        break;
      }

      default: {
        input = <span>not implemented</span>;
        break;
      }

    }
    return input;

  }

  return (
    <div tabIndex={-1} className="editable-row" style={{ '--widths': generateWidths() } as React.CSSProperties}>
      {
        baseData.map((cell: CellValue, index: number) => (
          // <Cell key={`cell-${index}`} cell={cell} />
          getInputForCell(cell, `cell-${index}`)
        ))
      }
    </div>
  );
}

export default EditableRow;
