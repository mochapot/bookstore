import React from "react";
import Header from "./components/Header";
import Booklist from "./pages/Booklist";
import Bookdetail from "./pages/Bookdetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="/Bookdetail" element={<Bookdetail />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
