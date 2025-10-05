/*
  PMO Master
  Raymundo Paz
  September 30th, 2025
*/


import CollapsibleRow from './collapsible-row/CollapsibleRow';
import { CellValue } from './cell/Cell';

import './Workplan.css';

const defaultHeaders: CellValue[] = [
  {
    kind: 'task',
    value: 'Flags'
  },
  {
    kind: 'task',
    value: '#'
  },
  {
    kind: 'task',
    value: 'Task'
  },
  {
    kind: 'task',
    value: 'Responsible'
  },
  {
    kind: 'task',
    value: 'Status'
  },
  {
    kind: 'task',
    value: 'Progress'
  },
  {
    kind: 'task',
    value: 'Task Duration'
  },
  {
    kind: 'task',
    value: 'Start Date'
  },
  {
    kind: 'task',
    value: 'Finish Date'
  },
  {
    kind: 'task',
    value: 'New Finish Date'
  },
  {
    kind: 'task',
    value: 'Actual Date'
  },
  {
    kind: 'task',
    value: 'Risk Remarks'
  },
  {
    kind: 'task',
    value: 'Comments'
  }
];

const testRow: CellValue[] = [
  {
    kind: 'milestone',
    value: ''
  },
  {
    kind: 'milestone',
    value: ''
  },
  {
    kind: 'milestone',
    value: 'Milestone'
  },
  {
    kind: 'milestone',
    value: ''
  }
];

const defaultWidths = [5, 3, 12, 8, 0, 0, 8, 8, 8, 8, 8, 12, -1];

const Workplan: React.FC = () => {

  return (
    <div className="workplan">
      <CollapsibleRow data={defaultHeaders} cellWidths={defaultWidths} headerRow={true} />
      <CollapsibleRow data={testRow} cellWidths={defaultWidths} />
    </div>
  );
}

export default Workplan;

