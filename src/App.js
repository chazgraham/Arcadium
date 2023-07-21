import React from "react";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import HomePage from "./components/HomePage";
import CandySmasher from "../src/components/CandySmasher";
import Header from "../src/components/Header";

function App() {
  return (
    <>
      <Router>
        < Header />
        <Routes>
          <Route
          path="/arcadium"
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
