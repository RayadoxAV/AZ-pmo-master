/*
  PMO Master
  Raymundo Paz
  September 30th, 2025
*/


import CollapsibleRow from './collapsible-row/CollapsibleRow';
import { CellValue } from './cell/Cell';


import { useAppSelector } from '../../state/hooks';
import type { Workplan, Milestone, Task } from '../../model/WorkplanModel';

import './Workplan.css';
const defaultHeaders: CellValue[] = [
  {
    cellType: 'text',
    value: 'Flags'
  },
  {
    cellType: 'text',
    value: '#'
  },
  {
    cellType: 'text',
    value: 'Task'
  },
  {
    cellType: 'text',
    value: 'Responsible'
  },
  {
    cellType: 'text',
    value: 'Status'
  },
  {
    cellType: 'text',
    value: 'Progress'
  },
  {
    cellType: 'text',
    value: 'Task Duration'
  },
  {
    cellType: 'text',
    value: 'Start Date'
  },
  {
    cellType: 'text',
    value: 'Finish Date'
  },
  {
    cellType: 'text',
    value: 'New Finish Date'
  },
  {
    cellType: 'text',
    value: 'Actual Date'
  },
  {
    cellType: 'text',
    value: 'Risk Remarks'
  },
  {
    cellType: 'text',
    value: 'Comments'
  }
];

const defaultWidths = [5, 3, 12, 8, 8, 8, 8, 8, 8, 8, 8, 12, -1];

const Workplan: React.FC = () => {

  const selector = useAppSelector((state) => state.workplan);

  function getRowsOfWorkplan(workplan: Workplan) {
    const result = [];
    for (let i = 0; i < workplan.milestones.length; i++) {
      const currentMilestone = workplan.milestones[i];
      result.push(
        <CollapsibleRow key={`m-${i}`} data={getDataOfMilestone(currentMilestone)} cellWidths={defaultWidths} />
      );

      for (let j = 0; j < currentMilestone.tasks.length; j++) {
        const currentTask = currentMilestone.tasks[j];

        result.push(
          <CollapsibleRow key={`t-${i}-${j}`} data={getDataOfTask(currentTask)} cellWidths={defaultWidths} />
        );
      }
    }

    return result;
  }

  function getDataOfMilestone(milestone: Milestone): CellValue[] {
    const data: CellValue[] = [];
    for (let i = 0; i < 13; i++) {
      data.push({
        value: '',
        cellType: 'text'
      });
    }

    data[2].value = milestone.name
    data[11].value = milestone.riskRemarks;
    data[12].value = milestone.comments;

    return data;
  }

  function getDataOfTask(task: Task): CellValue[] {
    const data: CellValue[] = [];
    for (let i = 0; i < 13; i++) {
      data.push({
        value: '',
        cellType: 'text'
      });
    }

    data[0].value = task.flag;
    data[1].value = task.taskNumber;
    data[2].value = task.name;
    data[3].value = task.responsible;
    data[4].value = task.status;

    data[5].value = task.progress;
    data[5].cellType = 'percentage';

    data[6].value = task.duration;
    data[7].value = task.startDate;
    data[8].value = task.finishDate;
    data[9].value = task.newFinishDate;
    data[10].value = task.actualDate;
    data[11].value = task.riskRemarks;
    data[12].value = task.comments;

    return data;
  }

  return (
    <div className="workplan">
      <CollapsibleRow data={defaultHeaders} cellWidths={defaultWidths} rowType="header" />
      {
        getRowsOfWorkplan(selector.workplan)
      }
    </div>
  );
}

export default Workplan;

