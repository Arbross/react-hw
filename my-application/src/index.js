import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EventList from './components/EventList';
import Event from './components/Event';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import EventDetails from './components/EventDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/add-event' element={<Event />} />
        <Route path='/events' element={<EventList />} />
        <Route path='/event/:id' element={<EventDetails />} />
        <Route path='*' element={<p>Page Not Found!</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
