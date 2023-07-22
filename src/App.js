import React from "react";
import { HashRouter as Router, Route, Routes, } from 'react-router-dom';

import HomePage from "./components/HomePage";
import CandySmasher from "../src/components/CandySmasher";
import Header from "../src/components/Header";
import TicTacToe from "./components/TicTacToe";

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
          <Route
            path="/ticTacToe"
            element={<TicTacToe />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
