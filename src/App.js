import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Gaming from "./pages/Gaming";
import Retro from "./pages/Retro";
import TCG from "./pages/TCG";
import Goodies from "./pages/Goodies";

export default function App() {
  return (
    <div className="container">
      <header>
        <img src="/gamecash_logo.png" alt="Gamecash Logo" className="logo" />
        <h1 className="title">Gamecash</h1>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main className="choices">
              <Link to="/gaming" className="choice-btn">Gaming</Link>
              <Link to="/retro" className="choice-btn">Retro</Link>
              <Link to="/tcg" className="choice-btn">TCG</Link>
              <Link to="/goodies" className="choice-btn">Goodies - Culture Geek</Link>
            </main>
          }
        />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/retro" element={<Retro />} />
        <Route path="/tcg" element={<TCG />} />
        <Route path="/goodies" element={<Goodies />} />
      </Routes>
    </div>
  );
}
