/*
  PMO Master
  Raymundo Paz
  October 5th, 2025
*/

import { useAppSelector } from '../../state/hooks';
import './ContextMenu.css';

interface ContextMenuProps {

}

const ContextMenu: React.FC<ContextMenuProps> = ({}) => {
  const selector = useAppSelector((state) => state.window.contextMenu);

  

  return (
    <div className="context-menu">{ JSON.stringify(selector)}</div>
  );
}

export default ContextMenu;
