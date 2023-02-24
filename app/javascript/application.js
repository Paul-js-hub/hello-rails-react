import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink } from "react-router-dom";
import "@hotwired/turbo-rails"
import "./controllers"
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
  
ReactDOM.render(
 <BrowserRouter>
 <NavLink to="/">
   <span>Home</span> | 
 </NavLink>
 <NavLink to="/greetings">
   <span>Greetings</span>
 </NavLink>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
