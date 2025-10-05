/*
  PMO Master
  Raymundo Paz
  September 30th, 2025
*/

import { useState } from 'react';
import Workplan from '../../components/workplan/Workplan';

import './WorkplanView.css';

const WorkplanView: React.FC = () => {

  const [isEditing, setEditing] = useState(false);
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(true);

  function toggleHeaderCollapsed(): void {
    const tempCollapsed = isHeaderCollapsed;
    setHeaderCollapsed(!tempCollapsed);
  }

  return (
    <div className="workplan-view">
      <div className="title-container">
        <span className="title">Workplan</span>
        <button className="edit-button">
          <span className="material-symbols-rounded">{ isEditing ? 'save' : 'edit' }</span>
          { isEditing ? 'Save' : 'Edit' }
        </button>
      </div>
      <div className="header">
        <div className="column">
          <span className="label">Project  Id</span>
          <span className="value">MERCH-1</span>
        </div>
        <div className="column">
          <span className="label">Project Name</span>
          <span className="value">MDM MX Implementation</span>
        </div>
        <div className="column">
          <span className="label">Total Progress</span>
          <span className="value percentage">100%</span>
        </div>
        <div className="column">
          <span className="label">Planned Progress</span>
          <span className="value percentage">50%</span>
        </div>
        <button className="collapse" onClick={toggleHeaderCollapsed}>
          <span className="material-symbols-rounded">expand_all</span>
        </button>
      </div>
      <div className="subheader" style={{ '--collapsed': isHeaderCollapsed ? '0fr' : '1fr' } as React.CSSProperties }>
        <div className="container">
          <div className="column">
            <span className="label">Project Objective</span>
            <span className="value">Some objective that is too long for this column and will not fit into the thing</span>
          </div>
          <div className="column">
            <span className="label">Project Owner</span>
            <span className="value">Manager Name</span>
          </div>
          <div className="column">
            <span className="label">Project Start Date</span>
            <span className="value">Something</span>
          </div>
          <div className="column">
            <span className="label">Remarks</span>
            <span className="value">Something in the remarks</span>
          </div>
          <div className="column">
            <span className="label">Type of Benefit</span>
            <span className="value">Benefit</span>
          </div>
          <div className="column">
            <span className="label">Benefit</span>
            <span className="value">Some benefit</span>
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
