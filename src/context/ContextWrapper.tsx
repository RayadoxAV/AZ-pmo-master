/*
  PMO Master
  Raymundo Paz
  October 20th, 2025
*/

import { Fragment } from "react/jsx-runtime";

interface ContextWrapperProps {
  children?: any;
}

const ContextWrapper: React.FC<ContextWrapperProps> = ({ children }) => {

  return (
    <Fragment>{children}</Fragment>
  );
};

export default ContextWrapper;
