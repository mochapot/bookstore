import Header from "./components/Header";
import Home from "./components/Home";
import Booklist from "./components/Booklist";
import Bookdetail from "./components/Bookdetail";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

const App = () => {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/bookdetail/:id" element={<Bookdetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
