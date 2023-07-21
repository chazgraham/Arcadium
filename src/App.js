import React from "react";
import { HashRouter as Router, Route, Routes, } from 'react-router-dom';

import HomePage from "./components/HomePage";
import CandySmasher from "../src/components/CandySmasher";
import Header from "../src/components/Header";

function App() {
  return (
    <>
      <Router basename="/">
        < Header />
        <Routes>
          <Route
          path="/"
          element={<HomePage />}
          />
          <Route
            path="/candySmasher"
            element={<CandySmasher />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
