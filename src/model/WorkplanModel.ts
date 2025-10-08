/*
  PMO Master
  Raymundo Paz
  October 7th, 2025
*/

export enum Flag {

}

export enum Status {
  NotStarted = 0,
  InWork = 1,
  Completed = 2,
  OnHold = 3,
  Cancelled = 4
}

export enum BenefitType {
  BusinessContinuity = 0,
  CostAvoidance = 1,
  Coverage = 2,
  Efficiency = 3,
  ProductivityEfficiency = 4,
  Quality = 5,
  RevenueSales = 6
}

export type Milestone = {
  name: string;
  tasks: Task[];
}

export type Task = {
  flag: Flag;
  taskNumber: number;
  name: string;
  responsible: string;
  status: Status;
  progress: number;
  startDate: string;
  finishDate: string;
  newFinishDate: string;
  actualDate: string;
  riskRemarks: string;
  comments: string;
  subtasks: Task[];
};

export type Workplan = {
  id: string;
  name: string;
  totalProgress: number;
  plannedProgress: number;
  objective: string;
  owner: string;
  startDate: string;
  remarks: string;
  benefitType: BenefitType;
  benefit: string;
  milestones: Milestone[];
}
