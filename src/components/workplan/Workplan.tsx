/*
  PMO Master
  Raymundo Paz
  September 30th, 2025
*/


import CollapsibleRow from './collapsible-row/CollapsibleRow';
import { CellValue } from './cell/Cell';

import './Workplan.css';
import { useEffect, useState } from 'react';

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
  },
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
    value: ''
  },
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
    value: ''
  },
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
    value: ''
  }
];

const testTask: CellValue[] = [
  {
    kind: 'task',
    value: ''
  },
  {
    kind: 'task',
    value: '1'
  },
  {
    kind: 'task',
    value: 'Some task'
  },
  {
    kind: 'task',
    value: 'Responsible'
  },
  {
    kind: 'task',
    value: 'In work'
  },
  {
    kind: 'task',
    value: '50%'
  },
  {
    kind: 'task',
    value: '2 weeks'
  },
  {
    kind: 'task',
    value: '12/12/2025'
  },
  {
    kind: 'task',
    value: '26/12/2025'
  },
  {
    kind: 'task',
    value: ''
  },
  {
    kind: 'task',
    value: ''
  },
  {
    kind: 'task',
    value: ''
  },
  {
    kind: 'task',
    value: 'Some comment'
  }
];

const defaultWidths = [5, 3, 12, 8, 0, 0, 8, 8, 8, 8, 8, 12, -1];

const Workplan: React.FC = () => {
  const [collapsedRows, setCollapsedRows] = useState([] as boolean[]);

  useEffect(() => {
    setCollapsedRows([false, false, false]);
  }, []);

  return (
    <div className="workplan">
      <CollapsibleRow data={defaultHeaders} cellWidths={defaultWidths} headerRow={true} />
      <CollapsibleRow data={testRow} cellWidths={defaultWidths} />
      <CollapsibleRow data={testTask} cellWidths={defaultWidths} />
    </div>
  );
}

export default Workplan;

