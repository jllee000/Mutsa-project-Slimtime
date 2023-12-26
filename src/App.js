import React from "react";
import {Route, Routes} from "react-router-dom";
import Sign from "./signup/Sign";
import Mybody from "./signup/Mybody";
import Home from "./home/Home";
import Login from "./login/Login";
function App() {
  return (
    <div class="App">
      <Routes>
        <Route path="/"  element={<Sign/>} />
        <Route path="/mybody"  element={<Mybody/>} />
        <Route path="/home"  element={<Home/>} />
        <Route path="/login"  element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
