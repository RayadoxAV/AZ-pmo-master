/*
  PMO Master
  Raymundo Paz
  November 7th, 2025
*/

import { Flag, Milestone, Status, Task } from '../model/WorkplanModel';
import { addWorkplanMilestone, addWorkplanMilestoneAtIndex, addWorkplanTask, addWorkplanTaskAtIndex } from '../state/slices/WorkplanSlice';
import State from '../state/State';

function handleCommand(command: string, payload: any): void {

  switch (command) {
    case 'milestone_add': {
      addMilestoneToEditMode(payload);
      break;
    }

    case 'task_add': {
      addTaskToEditMode(payload);
      break;
    }

    case 'subtask_add': {
      break;
    }

    default: {
      break;
    }
  }
}

function addMilestoneToEditMode(index: number): void {
  const emptyMilestone: Milestone = {
    name: 'New Milestone',
    comments: '',
    riskRemarks: '',
    tasks: []
  };

  if (index === undefined) {
    State.dispatch(addWorkplanMilestone(emptyMilestone));
  } else {
    State.dispatch(addWorkplanMilestoneAtIndex({ milestone: emptyMilestone, index: index }));
  }
}

function addTaskToEditMode(index: number): void {
  const emptyTask: Task = {
    flag: Flag.None,
    taskNumber: 1,
    name: 'New task',
    responsible: '',
    status: Status.NotStarted,
    progress: 0,
    duration: 0,
    startDate: '',
    finishDate: '',
    newFinishDate: '',
    actualDate: '',
    riskRemarks: '',
    comments: '',
    subtasks: []
  };

  if (index === undefined) {
    State.dispatch(addWorkplanTask(emptyTask));
  } else {
    State.dispatch(addWorkplanTaskAtIndex({ task: emptyTask, index: index }));
  }
}

export default handleCommand;
