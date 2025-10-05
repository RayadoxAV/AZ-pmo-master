/*
  PMO Master
  Raymundo Paz
  October 4th, 2025
*/

import './Cell.css';

export type CellValue = {
  kind: 'milestone' | 'task' | 'subtask';
  value: any;
};

interface CellProps {
  cell: CellValue;
  className?: string;
}

const Cell: React.FC<CellProps> = ({ cell, className }) => {
  return (
    <div className={`cell ${className}`}>{cell.value}</div>
  );
}

export default Cell;
