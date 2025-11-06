/*
  PMO Master
  Raymundo Paz
  September 30th, 2025
*/

import { useRef, useState } from 'react';
import { useAppSelector } from '../../state/hooks';

import Workplan from '../../components/workplan/Workplan';
import Button from '../../components/buttons/button/Button';
import IconButton from '../../components/buttons/icon-button/IconButton';
import FAB from '../../components/buttons/fab/FAB';

import './WorkplanView.css';
import { AnimatePresence } from 'motion/react';
import FabMenu from '../../components/buttons/fab-menu/FabMenu';

const WorkplanView: React.FC = () => {

  const selector = useAppSelector((state) => state.workplan);

  const [isEditing, setEditing] = useState(false);
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(true);
  
  const [isMenuDeployed, setMenuDeployed] = useState(false);

  const fabRef = useRef(undefined as any);
  const fabMenuRef = useRef(undefined as any);

  function toggleHeaderCollapsed(): void {
    const tempCollapsed = isHeaderCollapsed;
    setHeaderCollapsed(!tempCollapsed);
  }

  function handleEditingClick(): void {
    /*     const milestone: Milestone = {
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
     */
    const tempEditing = !isEditing;
    setEditing(tempEditing);

    if (tempEditing) {
      setHeaderCollapsed(false);
    } else {
      setHeaderCollapsed(true);
    }
  }

  function getFabPosition(): { x: number, y: number } {

    if (!fabRef.current) {
      return { x: 0, y: 0 };
    }

    const fab = fabRef.current as HTMLButtonElement;
    const clientRect = fab.getBoundingClientRect();

    return {
      x: clientRect.left + clientRect.width,
      y: clientRect.y
    };
  }

  return (
    <div className="workplan-view">
      <div className="title-container">
        <span className="title">Workplan</span>
        <Button className="edit-button" size="s" buttonStyle="tonal" icon={isEditing ? 'save' : 'edit'} onClick={handleEditingClick}>{isEditing ? 'Save' : 'Edit'}</Button>
      </div>
      <div className="header">
        <div className="column">
          <span className="label">Project  Id</span>
          {
            isEditing ? <input defaultValue={selector.workplan.id} className="edit" /> : <span className="value">{selector.workplan.id}</span>
          }
        </div>
        <div className="column">
          <span className="label">Project Name</span>
          {
            isEditing ? <input defaultValue={selector.workplan.name} className="edit" /> : <span className="value">{selector.workplan.name}</span>
          }
        </div>
        <div className="column">
          <span className="label">Total Progress</span>
          <span className="value percentage">{selector.workplan.totalProgress}%</span>
        </div>
        <div className="column">
          <span className="label">Planned Progress</span>
          <span className="value percentage">{selector.workplan.plannedProgress}%</span>
        </div>
        <IconButton onClick={toggleHeaderCollapsed} icon={isHeaderCollapsed ? 'expand_all' : 'collapse_all'} className="collapse" />
      </div>
      <div className="subheader" style={{ '--collapsed': isHeaderCollapsed ? '0fr' : '1fr' } as React.CSSProperties}>
        <div className="container">
          <div className="column">
            <span className="label">Project Objective</span>
            {
              isEditing ? <input defaultValue={selector.workplan.objective} className="edit" /> : <span className="value">{selector.workplan.objective}</span>
            }
          </div>
          <div className="column">
            <span className="label">Project Owner</span>
            {
              isEditing ? <input defaultValue={selector.workplan.owner} className="edit" /> : <span className="value">{selector.workplan.owner}</span>
            }
          </div>
          <div className="column">
            <span className="label">Project Start Date</span>
            {
              isEditing ? <input type="date" className="edit" /> : <span className="value">{selector.workplan.startDate.toString()}</span>
            }
          </div>
          <div className="column">
            <span className="label">Remarks</span>
            {
              isEditing ? <input defaultValue={selector.workplan.remarks} className="edit" /> : <span className="value">{selector.workplan.remarks}</span>
            }
          </div>
          <div className="column">
            <span className="label">Type of Benefit</span>
            <span className="value">{selector.workplan.benefitType}</span>
          </div>
          <div className="column">
            <span className="label">Benefit</span>
            {
              isEditing ? <input defaultValue={selector.workplan.benefit} className="edit" /> : <span className="value">{selector.workplan.benefit}</span>
            }
          </div>
        </div>
      </div>
      <div className="workplan-container">
        <Workplan isEditing={isEditing} />

        <AnimatePresence>
          {
            isEditing &&
            (
              <FAB
                ref={fabRef}
                icon="add" 
                size="s" 
                buttonType="primary"
                onClick={ () => { setMenuDeployed(!isMenuDeployed); } }
                className="add-row"
                autoFocus={true}
                closeButton={isMenuDeployed} />
            )
          }
        </AnimatePresence>
        { isMenuDeployed && (
          <FabMenu 
            ref={fabMenuRef}
            position={getFabPosition()} 
            options={['test', 'some longer test', 'asdasdasd']} />
        ) }
      </div>
    </div>
  );
}

export default WorkplanView;
