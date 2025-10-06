import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import State from './state/State';

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