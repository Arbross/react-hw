import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddEvent from './components/AddEvent';
import Events from './components/Events';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/events' element={<Events />} />
          <Route path='/add-event' element={<AddEvent />} />
          <Route path='*' element={<p>Page Not Found!</p>} />
        </Route>
      </Routes>
  </BrowserRouter>
);
