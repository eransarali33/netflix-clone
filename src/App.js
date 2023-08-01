import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import NetflixShow from "./pages/NetflixShow";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/netflix-show" Component={NetflixShow} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
