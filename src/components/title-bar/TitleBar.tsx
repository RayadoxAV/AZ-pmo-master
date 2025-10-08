/*
  PMO Master
  Raymundo Paz
  September 29th, 2025
*/

import React from 'react';

import { getCurrentWindow } from '@tauri-apps/api/window';


import './TitleBar.css';

const TitleBar: React.FC = () => {

  const window = getCurrentWindow();

  function handleMinimize(): void {
    window.minimize();
  }

  function handleToggleMaximize(): void {
    window.toggleMaximize();
  }

  function handleClose(): void {
    window.close();
  }

  return (
    <div className="title-bar" data-tauri-drag-region>
      <span className="icon"></span>
      <span className="title">Something something</span>
      <div className="window-controls">
        <button tabIndex={-1}  className="window-control codicon codicon-chrome-minimize" onClick={handleMinimize}></button>
        <button tabIndex={-1}  className="window-control codicon codicon-chrome-maximize" onClick={handleToggleMaximize}></button>
        <button tabIndex={-1}  data-action="close" className="window-control codicon codicon-chrome-close" onClick={handleClose}></button>
      </div>
    </div>
  );
}

export default TitleBar;
