import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

import { Home } from './pages/Home/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
