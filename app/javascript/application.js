// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "@hotwired/turbo-rails"
import "./controllers"
import Greetings from './components/Greetings/Greetings';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as bootstrap from "bootstrap"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/greetings" element={<Greetings />}/>
      </Routes>
    </div>
  );
}
  
ReactDOM.render(
 <BrowserRouter>
 <NavLink to="/" role="button">
   <span>Home</span>
 </NavLink>
 <NavLink to="/greetings" role="button">
   <span>Greetings</span>
 </NavLink>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
