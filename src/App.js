import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Booklist from "./components/Booklist";
import Bookdetail from "./components/Bookdetail";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "./api/axios";
import request from "./api/request";

const App = () => {
  const [book, setBook] = useState({});

  const params = {
    Seq: 1,
  };

  const fetchData = async () => {
    const resultBook = await instance.get(request.fetchBook, { params });
    setBook(resultBook.data.list[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/bookdetail" element={<Bookdetail book={book} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
