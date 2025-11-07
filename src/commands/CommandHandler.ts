/*
  PMO Master
  Raymundo Paz
  November 6th, 2025
*/

import handleCommand from './WorkplanHandler';

function satisfiesStructure(name: string): boolean {
  return name.split('.').length === 2;
}

const dispatchCommand = (name: string, payload: any) => {
  if (!satisfiesStructure(name)) {
    return;
  }

  const [context, action] = name.split('.');

  switch (context) {
    case 'workplan': {
      handleCommand(action, payload);
      break;
    }

    default: {
      console.log('not managed');
      break;
    }
  } 
}

export default dispatchCommand;
