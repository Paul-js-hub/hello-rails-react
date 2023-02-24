import React from "react";
import { Routes, Route } from "react-router-dom";
import Greetings from "./components/Greetings/Greetings";

const App = () => (
    <div className="App">
      <Routes>
        <Route path="/greetings" element={<Greetings />}/>
      </Routes>
    </div>
);

export default App;