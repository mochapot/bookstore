import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import instance from "../api/axios";
import request from "../api/request";
import { Link } from "react-router-dom";

const Booklist = () => {
  const [bookli, setBookli] = useState([]);
  const [page, setPage] = useState(0);

  // const { id } = useParams;

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
  // const item = bookli;
  // console.log(item);
  let [searchParams, setSearchParams] = useSearchParams();
  // const [page, setPage] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const strPage = searchParams.get("page");
    setPage(parseInt(strPage !== null ? strPage : "1"));
  }, [searchParams]);

  const goPrev = () => {
    if (page > 0) {
      navigate("?page=" + (page - 1));
    }
  };
  const goNext = () => {
    navigate("?page=" + (page + 1));
  };
  // console.log(page);
  const fontSize = { fontSize: "14px" };
  const sfontSize = { fontSize: "12px" };
  const divSize = { width: "19rem" };
  const fontColor = { color: "#666666" };
  const list = bookli.map((item) => {
    return (
      <div className="col d-flex justify-content-center">
        <Link to={`/bookdetail/${item.seq}`}>
          <div className="card h-100" style={divSize}>
            <img src="images/1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start" style={fontSize}>
                {item.title}
              </h5>
              <div className="d-flex justify-content-start" style={sfontSize}>
                <p style={fontColor}>{item.author} ·</p>
                <p style={fontColor}>{item.publisher} /</p>
                <p style={fontColor}>{item.regDt} /</p>
                <p style={fontColor}>{item.price}원</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-md-3 g-4">{list}</div>
      <div className="card card-body">
        <div>
          <div className="m-2">현재 페이지 : {page + 1}</div>
          <button className="btn btn-outline-primary m-1" onClick={goPrev}>
            Prev
          </button>
          <button className="btn btn-outline-primary m-1" onClick={goNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booklist;
