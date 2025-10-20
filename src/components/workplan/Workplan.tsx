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
import EditableRow from './editable-row/EditableRow';
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

interface WorkplanProps {
  isEditing: boolean;
}

const Workplan: React.FC<WorkplanProps> = ({ isEditing }) => {

  const selector = useAppSelector((state) => state.workplan);

  function getRowsOfWorkplan(workplan: Workplan): React.ReactElement[] {
    const result = [];
    for (let i = 0; i < workplan.milestones.length; i++) {
      const currentMilestone = workplan.milestones[i];
      result.push(
        <CollapsibleRow key={`m-${i}`} data={getDataOfMilestone(currentMilestone)} cellWidths={defaultWidths} rowType="milestone" />
      );

      for (let j = 0; j < currentMilestone.tasks.length; j++) {
        const currentTask = currentMilestone.tasks[j];

        result.push(
          <CollapsibleRow key={`t-${i}-${j}`} data={getDataOfTask(currentTask)} cellWidths={defaultWidths} rowType="task" />
        );
      }
    }

    return result;
  }

  function getEditableRowsOfWorkplan(workplan: Workplan): React.ReactElement[] {
    const result = [];

    for (let i = 0; i < workplan.milestones.length; i++) {
      const currentMilestone = workplan.milestones[i];
      result.push(
        <EditableRow key={`em-${i}`} baseData={getDataOfMilestone(currentMilestone)} cellWidths={defaultWidths} />
      );

      for (let j = 0; j < currentMilestone.tasks.length; j++) {
        const currentTask = currentMilestone.tasks[j];

        result.push(
          <EditableRow key={`et-${i}-${j}`} baseData={getDataOfTask(currentTask)} cellWidths={defaultWidths} rowType="task" />
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
    data[0].cellType = 'enum';

    data[1].value = task.taskNumber;
    data[2].value = task.name;
    data[3].value = task.responsible;

    data[4].value = task.status;
    data[4].cellType = 'enum';

    data[5].value = task.progress;
    data[5].cellType = 'percentage';

    data[6].value = task.duration;
    data[7].value = task.startDate;
    data[7].cellType = 'date';

    data[8].value = task.finishDate;
    data[8].cellType = 'date';

    data[9].value = task.newFinishDate;
    data[9].cellType = 'date';

    data[10].value = task.actualDate;
    data[10].cellType = 'date';

    data[11].value = task.riskRemarks;
    data[12].value = task.comments;

    return data;
  }

  return (
    <div className="workplan">
      <CollapsibleRow data={defaultHeaders} cellWidths={defaultWidths} rowType="header" />
      {
        isEditing ? getEditableRowsOfWorkplan(selector.workplan) : getRowsOfWorkplan(selector.workplan)
      }
    </div>
  );
}

export default Workplan;

