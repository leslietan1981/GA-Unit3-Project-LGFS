import React from "react";
import HomePage from "./components/HomePage.jsx";
import { Route, Routes } from "react-router";
import cssMain from "./styles/App.module.css";

function App() {
  return (
    <div className={`${cssMain["main-wrapper"]}`}>
      <Routes>
        <Route path="/user/dashboard" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
