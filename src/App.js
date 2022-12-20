import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Booklist from "./components/Booklist";
import Bookdetail from "./components/Bookdetail";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { instance, instance1 } from "./api/axios";
import request from "./api/request";

const App = () => {
  const [book, setBook] = useState({});

  const [bookli, setBookli] = useState([]);

  const params = {
    Seq: 1,
  };

  const params1 = {
    page: 0,
  };

  const fetchData = async () => {
    const resultBook = await instance.get(request.fetchBook, { params });
    setBook(resultBook.data.list[0]);

    const resultBookli = await instance1.get(request.fetchBookList, {
      params1,
    });
    setBookli(resultBookli.data.list.content);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log({ bookli });
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home bookli={bookli} />} />
        <Route path="/about" element={<About />} />
        <Route path="/booklist" element={<Booklist book={book} />} />
        <Route path="/bookdetail" element={<Bookdetail book={book} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
