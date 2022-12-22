import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../api/axios";
import request from "../api/request";

const Search = () => {
  const [word, setWord] = useState("");
  const onSubmit = async () => {
    window.location.href = "/bookstore/search/" + word;
  };

  const [searchData, setSearchData] = useState([]);
  const fetchData = async () => {
    const params = {
      keyword: word,
    };
    const resultSearchData = await instance.get(request.fetchBookSearch, {
      params,
    });
    setSearchData(resultSearchData.data.list.content);
  };
  useEffect(() => {
    fetchData();
  }, [word]);
  const searchList = searchData.map((item) => {
    return (
      <div className="col d-flex justify-content-center">
        <Link to={`/bookdetail/${item.seq}`}>
          <div className="card h-100 w-72">
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start text-sm">{item.title}</h5>
              <div className="d-flex justify-content-start text-xs">
                <p className="text-sm">{item.author} ·</p>
                <p className="text-sm">{item.publisher} /</p>
                <p className="text-sm">{item.regDt} /</p>
                <p className="text-sm">{item.price}원</p>
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
    <div className="container m-5">
      {/* <div>
        <form className="max-w-md px-4 mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Books..."
              required
              onChange={(e) => {
                setWord(e.target.value);
                console.log(word);
              }}
            />
            <button
              type="button"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                onSubmit();
              }}
            >
              Search
            </button>
          </div>
        </form>
      </div> */}
      <div>
        <div class="flex items-center justify-center">
          <div class="flex border-2 rounded">
            <input
              type="search"
              class="px-4 py-2 w-80"
              placeholder="Search Books..."
              required
              onChange={(e) => {
                setWord(e.target.value);
                console.log(word);
              }}
            />
            <button
              type="button"
              class="flex items-center justify-center px-4 border-l"
              onClick={() => {
                onSubmit();
              }}
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
      </div>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">{searchList}</div>
      </div>
    </div>
  );
};

export default Search;
