/*
  PMO Master
  Raymundo Paz
  September 30th, 2025
*/


import CollapsibleColumn, { CellValue } from './collapsible-column/CollapsibleColumn';
import './Workplan.css';

const flags: CellValue[] = [
  {
    kind: 'milestone',
    value: ''
  },
  {
    kind: 'task',
    value: 'Report'
  },
   {
    kind: 'task',
    value: 'Report'
  }
];

const taskNumbers: CellValue[] = [
  {
    kind: 'milestone',
    value: ''
  },
  {
    kind: 'task',
    value: '1'
  },
  {
    kind: 'task',
    value: '2'
  }
];

const taskNames: CellValue[] = [
  {
    kind: 'milestone',
    value: 'Some milestone',
  },
  {
    kind: 'task',
    value: 'Some task'
  },
  {
    kind: 'subtask',
    value: 'tEST'
  }
];

const taskResponsible: CellValue[] = [
  {
    kind: 'milestone',
    value: ''
  },
  {
    kind: 'task',
    value: 'Sasasa'
  },
  {
    kind: 'subtask',
    value: 'Someone'
  }
];

const Workplan: React.FC = () => {
  return (
    <div className="workplan">
      <CollapsibleColumn name="Flags" defaultSize={5} data={flags} centerValues={true} customClassName='red' />
      <CollapsibleColumn name="#" defaultSize={3} data={taskNumbers} centerValues={true} />
      <CollapsibleColumn name="Task" defaultSize={12} data={taskNames}  />
      <CollapsibleColumn name="Responsible" defaultSize={8} data={taskResponsible} />
      <CollapsibleColumn name="Status"  />
      <CollapsibleColumn name="Progress"  />
      <CollapsibleColumn name="Task Duration" defaultSize={8}  />
      <CollapsibleColumn name="Start Date" defaultSize={8} />
      <CollapsibleColumn name="Finish Date" defaultSize={8}  />
      <CollapsibleColumn name="New Finish Date" defaultSize={8}  />
      <CollapsibleColumn name="Actual Date" defaultSize={8}  />
      <CollapsibleColumn name="Risk Remarks" defaultSize={18} />
      <CollapsibleColumn name="Comments" fillRemainingSpace={true} />
    </div>
  );
}

export default Workplan;

