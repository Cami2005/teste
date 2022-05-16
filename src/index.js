import React from 'react';
import ReactDOM from 'react-dom/client';

import {Routes, Route, BrowserRouter} from 'react-router-dom'

import './index.css';

import Menu from './Menu';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Menu/>} />
      <Route path='/dobro' element={<App/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

