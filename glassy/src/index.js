import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
    EnglishComponent,
    LatvianComponent,
    NotFoundComponent,
    RussianComponent
} from './components'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
          <Route path="/" element={<LatvianComponent/>}/>
          <Route path="/en" element={<EnglishComponent/>}/>
          <Route path="/ru" element={<RussianComponent/>}/>
          <Route path="*" element={<NotFoundComponent/>}/>
      </Routes>
  </Router>

);

