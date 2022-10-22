import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { createContext } from "react";
import { Provider } from 'react-redux';
import { stateStore } from 'redux/store';


export const UserContext = createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={stateStore}>
        <BrowserRouter basename='/Finance-system'>
            <App />
        </BrowserRouter>
      </Provider>

  </React.StrictMode>
);
