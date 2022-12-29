import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import instance from "../api/axios";
import request from "../api/request";

const Search = () => {
  const [word, setWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(0);
  const fetchData = async () => {
    const params = {
      keyword: word,
      page: page,
      size: 6,
    };
    const resultSearchData = await instance.get(request.fetchBookSearch, {
      params,
    });
    setSearchData(resultSearchData.data.list.content);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [page]);
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const strPage = searchParams.get("page");
    setPage(parseInt(strPage !== null ? strPage : "0"));
  }, [searchParams]);

  const goPrev = () => {
    if (page > 0) {
      navigate("?page=" + (page - 1));
    }
  };
  const goNext = () => {
    if (searchData.length < 6) {
      if (window.alert("마지막 페이지입니다.")) {
      }
    } else {
      navigate("?page=" + (page + 1));
    }
  };
  const fontSize = { fontSize: "14px" };
  const sfontSize = { fontSize: "12px" };
  const divSize = { width: "22rem" };
  const fontColor = { color: "#666666" };
  const searchList = searchData.map((item) => {
    return (
      <div className="col d-flex justify-content-center">
        <Link to={`/bookdetail/${item.seq}`}>
          <div className="card h-100" style={divSize}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start" style={fontSize}>
                {item.title}
              </h5>
              <div className="d-flex justify-content-start" style={sfontSize}>
                <p
                  className="text-truncate"
                  style={{
                    color: "#666666",
                    fontSize: "12px",
                    maxWidth: "100px",
                  }}
                >
                  {item.author} ·
                </p>
                <p className="text-truncate" style={fontColor}>
                  {item.publisher} /
                </p>
                <p style={fontColor}>{item.regDt} /</p>
                <p style={fontColor}>{item.price}원</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  // const [searchData, setSearchData] = useState([]);
  // const params = useParams();

  //   useEffect(() => {
  //     async function fetchData() {
  //       const result = await axios.get(
  //         "http://localhost:8080/product/search?word=" + params.word
  //       );
  //       console.log(result.data.result);
  //       setSearchData(result.data.result);
  //     }
  //     fetchData();
  //   }, []);

  // const searchresult = searchData.map((item) => {
  //   return <div filename={item.filename.split(",")[0]}></div>;
  // });

  return (
    <div className="container mt-4 mb-4">
      <div class="flex items-center justify-center mb-4">
        <div class="flex border-2 rounded">
          <input
            type="search"
            class="px-4 py-2 w-80"
            placeholder="Search Books..."
            required
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
          <button
            type="button"
            class="flex items-center justify-center px-4 border-l"
            onClick={fetchData}
          >
            <svg
              class="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">{searchList}</div>
        <div className="mt-3">
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
    </div>
  );
};

export default Search;
