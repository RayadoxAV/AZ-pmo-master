/*
  PMO Master
  Raymundo Paz
  October 7th, 2025
*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BenefitType, Milestone, Workplan } from '../../model/WorkplanModel';

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
    milestones: []
  },
  collapsedIndices: []
};

export const WorkplanSlice = createSlice({
  name: 'workplan',
  initialState: initialState,
  reducers: {
    addWorkplanMilestone: (state, action: PayloadAction<Milestone>): void => {
      state.workplan.milestones.push(action.payload);
    }
  }
});

export const { addWorkplanMilestone } = WorkplanSlice.actions;

export default WorkplanSlice.reducer;
