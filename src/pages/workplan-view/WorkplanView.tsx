/*
  PMO Master
  Raymundo Paz
  September 30th, 2025
*/

import Workplan from '../../components/workplan/Workplan';

import './WorkplanView.css';

const WorkplanView: React.FC = () => {
  return (
    <div className="edit-workplan">
      <span className="title">Workplan</span>
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
      </div>
      <div className="subheader">
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
      {/* <div className="header first">
        <span className="label">Project Id</span>
        <span className="value">MERCH-1</span>

        <span className="label">Project Name</span>
        <span className="value">MDM MX Implementation</span>

        <span className="label">Project Owner</span>
        <span className="value">Someone</span>

        <span className="label">Total Progress</span>
        <span className="value percentage">50%</span>

        <span className="label">Planned Progress</span>
        <span className="value percentage">40%</span>

      </div>
      <div className="header second">
        <span className="label">Project Objective</span>
        <span className="value">Somethign something</span>

        <span className="label">Project Remarks</span>
        <span className="value">sOME REMarks</span>

        <span className="label">Type of Benefit</span>
        <span className="value">Some benefit</span>

        <span className="label">Benefit</span>
        <span className="value">Some long text</span>
      </div> */}
      <div className="workplan-view">
        <Workplan />
      </div>
    </div>
  );
}

export default WorkplanView;
