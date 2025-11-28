import React from 'react';
import ReactDOM from 'react-dom/client';
import { LazyMotion, domAnimation } from 'framer-motion';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LazyMotion features={domAnimation} strict>
      <App />
    </LazyMotion>
  </React.StrictMode>
);
