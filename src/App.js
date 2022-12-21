import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Booklist from "./components/Booklist";
import Bookdetail from "./components/Bookdetail";
import Team from "./components/Team";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import instance from "./api/axios";
import request from "./api/request";

const App = () => {
  const [book, setBook] = useState({});

  const [bookli, setBookli] = useState([]);

  const params = {
    Seq: 1,
  };

  const params1 = {
    page: 0
  };

console.log(params1);
  const fetchData = async () => {
    const resultBook = await instance.get(request.fetchBook, { params });
    setBook(resultBook.data.list[0]);

    const resultBookli = await instance.get(request.fetchBookList, {
      params1
    });
    setBookli(resultBookli.data.list.content);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log({ bookli });
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home bookli={bookli} />} />
        <Route path="/search" element={<Search />}>
          <Route path=":word" element={<Search bookli={bookli} />} />
        </Route>
        <Route path="/booklist" element={<Booklist book={book} />} />
        <Route path="/bookdetail/:id" element={<Bookdetail book={book} />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
