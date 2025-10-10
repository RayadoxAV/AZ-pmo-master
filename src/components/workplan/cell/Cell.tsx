/*
  PMO Master
  Raymundo Paz
  October 4th, 2025
*/

import './Cell.css';

export type CellValue = {
  cellType: 'text' | 'formattedNumber' | 'percentage';
  value: any;
};

interface CellProps {
  cell: CellValue;
  className?: string;
}

const Cell: React.FC<CellProps> = ({ cell, className }) => {

  if (cell.cellType === 'formattedNumber') {
    return (
      <div className={`cell ${className}`}>{cell.value}</div>
    );
  }

  if (cell.cellType === 'percentage') {
    return (
      <div className={`cell percentage ${className}`} style={{ '--percentage': `${cell.value}%`} as React.CSSProperties}>
        <span className="percentage-value">{cell.value}%</span>
        <div className="percentage-bar"></div>
      </div>
    );
  }

  return (
    <div className={`cell ${className}`}>{cell.value}</div>
  );
}

export default Cell;
