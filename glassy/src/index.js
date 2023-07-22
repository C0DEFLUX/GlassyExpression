import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';


import {
    EnglishComponent,
    LatvianComponent,
    NotFoundComponent,
    RussianComponent,
    Admin
} from './components'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App/>
);

