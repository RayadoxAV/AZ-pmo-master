/*
  PMO Master
  Raymundo Paz
  October 7th, 2025
*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BenefitType, Flag, Milestone, Status, Task, Workplan } from '../../model/WorkplanModel';

interface WorkplanSlice {
  workplan: Workplan;
  collapsedIndices: number[];
};

const initialState: WorkplanSlice = {
  workplan: {
    id: 'MERCH-1',
    name: 'MDM MX Implementation',
    totalProgress: 100,
    plannedProgress: 50,
    objective: 'Some objective that is too long for this column and it has to show the overflow properly',
    owner: 'Manager Name',
    startDate: 'some date',
    remarks: 'Something in the remarks',
    benefitType: BenefitType.BusinessContinuity,
    benefit: 'Some benefit',
    milestones: [
      {
        name: 'Some milestone',
        riskRemarks: '',
        comments: '',
        tasks: [
          {
            flag: Flag.None,
            taskNumber: 1,
            name: 'Task 1',
            responsible: 'Someone',
            status: Status.NotStarted,
            progress: 50,
            duration: 1,
            startDate: '1/10/2025',
            finishDate: '1/10/2025',
            newFinishDate: '1/10/2025',
            actualDate: '1/10/2025',
            riskRemarks: 'remarks',
            comments: 'comments',
            subtasks: []
          }
        ]
      }
    ]
  },
  collapsedIndices: []
};

export const WorkplanSlice = createSlice({
  name: 'workplan',
  initialState: initialState,
  reducers: {
    addWorkplanMilestone: (state, action: PayloadAction<Milestone>): void => {
      state.workplan.milestones.push(action.payload);
    },
    addWorkplanMilestoneAtIndex: (state, action: PayloadAction<{ milestone: Milestone, index: number }>): void => {
      state.workplan.milestones.splice(action.payload.index, 0, action.payload.milestone);
    },
    addWorkplanTask: (state, action: PayloadAction<Task>): void => {
      state.workplan.milestones[0].tasks.push(action.payload);
    },
    addWorkplanTaskAtIndex: (state, action: PayloadAction<{ task: Task, index: number }>): void => {

    }
  }
});

export const {
  addWorkplanMilestone,
  addWorkplanMilestoneAtIndex,
  addWorkplanTask,
  addWorkplanTaskAtIndex
} = WorkplanSlice.actions;

export default WorkplanSlice.reducer;
