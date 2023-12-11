import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./layout/HomePage";
import HeroesPage from "./layout/HeroesPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router scrollRestoration="auto">
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/heroes" element={<HeroesPage/>}></Route>
      </Routes>
    </React.StrictMode>
  </Router>
);
