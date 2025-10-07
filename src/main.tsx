import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import State from './state/State';
import { setContextMenuProps } from './state/slices/WindowSlice';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={State}>
      <App />
    </Provider>
  </React.StrictMode>,
);


window.addEventListener('contextmenu', (event: PointerEvent) => {
  event.preventDefault();
});

window.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (!target.classList.contains('context-menu')) {
    State.dispatch(setContextMenuProps({ visible: false, x: 0, y: 0 }));
  }
});

window.addEventListener('blur', () => {
  State.dispatch(setContextMenuProps({ visible: false, x: 0, y: 0 }));
});

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'Escape': {
      State.dispatch(setContextMenuProps({ visible: false, x: 0, y: 0 }));
      break;
    }

    case 'Alt': {
      State.dispatch(setContextMenuProps({ visible: false, x: 0, y: 0 }));
      break;
    }


    default: {
      
    }
  }
});
