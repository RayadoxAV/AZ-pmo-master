/*
  PMO Master
  Raymundo Paz
  September 30th, 2025
*/

import { useState } from 'react';
import Workplan from '../../components/workplan/Workplan';

import './WorkplanView.css';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { addWorkplanMilestone } from '../../state/slices/WorkplanSlice';
import { Flag, Milestone, Status } from '../../model/WorkplanModel';

const WorkplanView: React.FC = () => {

  const selector = useAppSelector((state) => state.workplan);
  const dispatch = useAppDispatch();

  const [isEditing, setEditing] = useState(false);
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(true);

  function toggleHeaderCollapsed(): void {
    const tempCollapsed = isHeaderCollapsed;
    setHeaderCollapsed(!tempCollapsed);
  }

  function handleEditingClick(): void {
    const milestone: Milestone = {
      name: 'test milestone',
      riskRemarks: 'remarks',
      comments: 'some comments',
      tasks: [
        {
          flag: Flag.None,
          taskNumber: 1,
          name: 'Some task',
          responsible: 'Responsible',
          status: Status.NotStarted,
          progress: 50,
          duration: 1,
          startDate: '18/8/2025',
          finishDate: '18/8/2025',
          newFinishDate: '',
          actualDate: '',
          riskRemarks: 'Some risks that are different and very long so that we can do',
          comments: 'Some remakrs',
          subtasks: []
        },
         {
          flag: Flag.None,
          taskNumber: 2,
          name: 'Some task',
          responsible: 'Responsible',
          status: Status.NotStarted,
          progress: 20,
          duration: 1,
          startDate: '18/8/2025',
          finishDate: '18/8/2025',
          newFinishDate: '',
          actualDate: '',
          riskRemarks: 'Some risks that are different',
          comments: 'Some remakrs',
          subtasks: []
        }
      ]
    };

    dispatch(addWorkplanMilestone(milestone));
  }

  return (
    <div className="workplan-view">
      <div className="title-container">
        <span className="title">Workplan</span>
        <button className="edit-button" onClick={handleEditingClick}>
          <span className="material-symbols-rounded">{ isEditing ? 'save' : 'edit' }</span>
          { isEditing ? 'Save' : 'Edit' }
        </button>
      </div>
      <div className="header">
        <div className="column">
          <span className="label">Project  Id</span>
          <span className="value">{selector.workplan.id}</span>
        </div>
        <div className="column">
          <span className="label">Project Name</span>
          <span className="value">{selector.workplan.name}</span>
        </div>
        <div className="column">
          <span className="label">Total Progress</span>
          <span className="value percentage">{selector.workplan.totalProgress}%</span>
        </div>
        <div className="column">
          <span className="label">Planned Progress</span>
          <span className="value percentage">{selector.workplan.plannedProgress}%</span>
        </div>
        <button className="collapse" onClick={toggleHeaderCollapsed}>
          <span className="material-symbols-rounded">expand_all</span>
        </button>
      </div>
      <div className="subheader" style={{ '--collapsed': isHeaderCollapsed ? '0fr' : '1fr' } as React.CSSProperties }>
        <div className="container">
          <div className="column">
            <span className="label">Project Objective</span>
            <span className="value">{selector.workplan.objective}</span>
          </div>
          <div className="column">
            <span className="label">Project Owner</span>
            <span className="value">{selector.workplan.owner}</span>
          </div>
          <div className="column">
            <span className="label">Project Start Date</span>
            <span className="value">{selector.workplan.startDate.toString()}</span>
          </div>
          <div className="column">
            <span className="label">Remarks</span>
            <span className="value">{selector.workplan.remarks}</span>
          </div>
          <div className="column">
            <span className="label">Type of Benefit</span>
            <span className="value">{selector.workplan.benefitType}</span>
          </div>
          <div className="column">
            <span className="label">Benefit</span>
            <span className="value">{selector.workplan.benefit}</span>
          </div>
        </div>
      </div>
      <div className="workplan-container">
        <Workplan />
      </div>
    </div>
  );
}

export default WorkplanView;
