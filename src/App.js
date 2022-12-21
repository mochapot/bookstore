import Header from "./components/Header";
import Home from "./components/Home";
import Booklist from "./components/Booklist";
import Bookdetail from "./components/Bookdetail";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import instance from "./api/axios";
import request from "./api/request";

const App = () => {
  const [bookli, setBookli] = useState([]);
  const [page, setPage] = useState(0);

  const { id } = useParams;

  const fetchData = async () => {
    const params = {
      page: page,
      size: 6,
    };
    const resultBookli = await instance.get(request.fetchBookList, {
      params,
    });
    setBookli(resultBookli.data.list.content);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home bookli={bookli} />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/bookdetail/:id" element={<Bookdetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
