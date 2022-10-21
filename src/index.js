import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { createContext } from "react";

const defaultContext = {
  logedUser: "qwewqwewqe",
  setLogedUser: (user) => {
    this.logedUser = user;
  }
}

export const UserContext = createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={defaultContext}>
      <BrowserRouter basename='/Finance-system'>
          <App />
      </BrowserRouter>
    </UserContext.Provider>
  </React.StrictMode>
);
