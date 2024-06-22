import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Storecontextprovider from './component/Context/Storecontext';
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Storecontextprovider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </Storecontextprovider>
  
  </React.StrictMode>
);
