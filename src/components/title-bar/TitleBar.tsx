/*
  PMO Master
  Raymundo Paz
  September 29th, 2025
*/

import './TitleBar.css';

const TitleBar: React.FC = () => {
  return (
    <div className="title-bar" data-tauri-drag-region>
      <span className="icon"></span>
      <span className="title">Something something</span>
      <div className="window-controls">
        <button className="window-control codicon codicon-chrome-minimize"></button>
        <button className="window-control codicon codicon-chrome-maximize"></button>
        <button className="window-control codicon codicon-chrome-close"></button>
      </div>
    </div>
  );
}

export default TitleBar;
