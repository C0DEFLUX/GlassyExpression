import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
    Header,
    Hero,
    About,
    ProjectSlider,
} from './components'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Header />
        <Hero />
        <About />
        <ProjectSlider />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
