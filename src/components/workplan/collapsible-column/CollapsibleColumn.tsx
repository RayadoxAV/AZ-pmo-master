/*
  PMO Master
  Raymundo Paz
  October 1st, 2025
*/

// import './CollapsibleColumn.css';


// interface CollapsibleColumnProps {
//   name?: string;
//   data?: CellValue[];
//   centerValues?: boolean;
//   defaultSize?: number;
//   collapsed?: boolean;
//   fillRemainingSpace?: boolean;
//   customClassName?: string;
// }

// const CollapsibleColumn: React.FC<CollapsibleColumnProps> = ({ name = 'Column', data = [], centerValues = false, defaultSize = 6, collapsed = false, fillRemainingSpace = false, customClassName = '' }) => {
//   return (
//     <div className="collapsible-column"
//     style={{ '--width': `${defaultSize * 16}px`, '--fill': fillRemainingSpace ? '1' : '0', '--center': centerValues ? 'center' : 'unset'  } as React.CSSProperties}>
//       <span className={`column-title ${customClassName}`}>
//         { name }
//         <button className="column-options-button"></button>
//       </span>
//       {
//         data.map((cell, index: number) => (
//           <span key={index} className={`${cell.kind} ${customClassName}`}>{cell.value}</span>
//         ))
//       }
//     </div>
//   );
// }

// export default CollapsibleColumn;
