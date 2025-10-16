import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import State from './state/State';
import { setContextMenuProps } from './state/slices/WindowSlice';
import { BrowserRouter, Route, Routes } from 'react-router';

import App from './App';
import WorkplanView from './pages/workplan-view/WorkplanView';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={State}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<div>home</div>} />
            <Route path="/projects" element={<div>project list</div>} />
            <Route path="/workplan" element={<WorkplanView />} />
            <Route path="/settings" element={<div>settings</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
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
