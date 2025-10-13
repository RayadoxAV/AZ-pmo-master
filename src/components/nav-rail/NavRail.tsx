/*
  PMO Master
  Raymundo Paz
  October 10th, 2025
*/

import { useState } from 'react';
import './NavRail.css';

const items: NavRailItemProps[] = [
  {
    icon: 'home',
    title: 'Home',
    link: ''
  },
  {
    icon: 'list_alt',
    title: 'Project list',
    link: ''
  },
  {
    icon: 'table_chart',
    title: 'Workplan',
    link: ''
  }
];

const NavRail: React.FC = () => {
  const [isExpanded, setExpanded] = useState(false);

  function handleCollapseClick(): void {
    setExpanded(!isExpanded);
  }

  return (
    <div className={`nav-rail ${isExpanded ? 'expanded' : ''}`}>
      <button className="collapse" onClick={handleCollapseClick}>
        <span className="material-symbols-rounded">menu</span>
      </button>
      {
        items.map((value, index: number) => (
          <NavRailItem key={index} title={value.title} icon={value.icon} link={value.link} />
        ))        
      }

      <NavRailItem title="Settings" icon="settings" link="" className="settings" />
    </div>
  );
}

export default NavRail;

interface NavRailItemProps {
  title: string;
  icon: string;
  link: string;
  className?: string;
}

const NavRailItem: React.FC<NavRailItemProps> = ({ title, icon, link, className }) => {
  return (
    <div className={`nav-rail-item ${className}`}>
      <span className="indicator">
        <span className="material-symbols-rounded">{icon}</span>
      </span>
      <span className="label">{title}</span>
    </div>
  );
}
