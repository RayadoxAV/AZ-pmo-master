/*
  PMO Master
  Raymundo Paz
  October 10th, 2025
*/

import { useState } from 'react';
import { AnimatePresence, Easing, motion } from 'motion/react';

import './NavRail.css';

const items: NavRailItemProps[] = [
  {
    icon: 'home',
    title: 'Home',
    link: ''
  },
  {
    icon: 'list_alt',
    title: 'Projects',
    link: ''
  },
  {
    icon: 'table_chart',
    title: 'Workplan',
    link: ''
  }
];

const transitionDuration = 0.250;
const transitionEase: Easing = [0.05, 0.7, 0.1, 1];

const NavRail: React.FC = () => {
  const [isExpanded, setExpanded] = useState(false);

  function handleCollapseClick(): void {
    setExpanded(!isExpanded);
  }

  return (
    <motion.div
      layout
      animate={{ width: isExpanded ? '14rem' : '6rem' }}
      transition={{ duration: 0.250, ease: [0.05, 0.7, 0.1, 1] }}
      className={`nav-rail ${isExpanded ? 'expanded' : ''}`}>
      <button className="collapse" onClick={handleCollapseClick}>
        <span className="material-symbols-rounded">menu</span>
      </button >
      {
        items.map((value, index: number) => (
          <NavRailItem key={index} title={value.title} icon={value.icon} link={value.link} expanded={isExpanded} />
        ))
      }
      <NavRailItem title="Settings" icon="settings" link="" className="settings active" expanded={isExpanded} />
    </motion.div>
  );
}

export default NavRail;

interface NavRailItemProps {
  title: string;
  icon: string;
  link: string;
  className?: string;
  expanded?: boolean;
}

const NavRailItem: React.FC<NavRailItemProps> = ({ title, icon, link, className = '', expanded = false }) => {
  return (
    <motion.div
      layout
      className={`nav-rail-item ${className}`}>
      <motion.span
        layout
        transition={{ duration: transitionDuration, ease: transitionEase }}
        className="indicator"></motion.span>
      <motion.span
        layout
        transition={{ duration: transitionDuration, ease: transitionEase }}
        className="material-symbols-rounded">{icon}</motion.span>
      <AnimatePresence>
        {!expanded &&
          (
            <motion.span
              exit={{ opacity: 0 }}
              transition={{ duration: transitionDuration, ease: transitionEase }}
              className="label">{title}</motion.span>
          )
        }
      </AnimatePresence>
      <AnimatePresence>
        {expanded &&
          (
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: transitionDuration, ease: transitionEase }}
              className="horizontal-label">{title}</motion.span>
          )
        }
      </AnimatePresence>
    </motion.div>
  );
}
