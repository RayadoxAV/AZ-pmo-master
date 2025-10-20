/*
  PMO Master
  Raymundo Paz
  October 7th, 2025
*/

import { CellValue } from '../cell/Cell';

import './EditableRow.css';

interface EditableRowProps {
  baseData: CellValue[];
  cellWidths: number[];
  rowType?: 'milestone' | 'task' | 'subtask';
}

const EditableRow: React.FC<EditableRowProps> = ({ baseData = [], cellWidths, rowType = 'task' }) => {



  return (
    <div className="editable-row">
      {rowType}
    </div>
  );
}

export default EditableRow;
