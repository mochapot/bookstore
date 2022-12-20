import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  // const List = props.bookli.map((item) => {
  //   return (
  //     <li>
  //       <a href="#" className="block overflow-hidden group">
  //         <img
  //           src={process.env.PUBLIC_URL + "/images/book1.jpg"}
  //           alt=""
  //           className="h-[250px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[350px]"
  //         />
  //         <div className="relative pt-3 bg-white">
  //           <p>
  //             <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4">
  //             {item.title}
  //             </span>
  //           </p>
  //           <span className="text-xs text-gray-700">{item.author}</span>
  //         </div>
  //       </a>
  //     </li>
  //   );
  // });
  return (
    <div className="container">
      {/* console.log({List}); */}
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-fade mt-3 mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner pt-200">
          <div className="carousel-item  active" data-bs-interval="7000">
            <h3 className="carousel-caption position-absolute text-end text-3xl">
              주도적인 삶을 살기 위한 <br />
              3단계 핵심 솔루션
            </h3>
            <img
              src={process.env.PUBLIC_URL + "/images/banner1.jpg"}
              className="img-fluid"
              alt="banner1"
            />
          </div>
          <div className="carousel-item">
            <h3 className="carousel-caption position-absolute text-end text-3xl">
              새로운 관점으로 <br />
              우리의 삶을 위로한다
            </h3>
            <img
              src={process.env.PUBLIC_URL + "/images/banner2.jpg"}
              className="img-fluid"
              alt="banner2"
            />
          </div>
          <div className="carousel-item">
            <h3 className="carousel-caption position-absolute text-end text-3xl">
              새로운 언어는 <br />
              새로운 시대를 반영한다
            </h3>
            <img
              src={process.env.PUBLIC_URL + "/images/banner3.jpg"}
              className="img-fluid"
              alt="banner3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container home-book mb-5">
        <div className="section-title d-flex justify-content-between m-3">
          <h2 className="text-3xl font-medium"># 오늘의 선택</h2>
          <Link
            className="btn text-base align-self-center home-book-link"
            to={"/booklist"}
            role="button"
          >
            MORE
          </Link>
        </div>
        <hr />
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* <li>
            <a href="#" className="block overflow-hidden group">
              <img
                src={process.env.PUBLIC_URL + "/images/book1.jpg"}
                alt=""
                className="h-[250px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[350px]"
              />
              <div className="relative pt-3 bg-white">
                <p>
                  <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4"> 제목 1 </span>
                </p>
                <span className="text-xs text-gray-700">
                  작가 1
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="block overflow-hidden group">
              <img
                src={process.env.PUBLIC_URL + "/images/book2.jpg"}
                alt=""
                className="h-[250px] w-full object-contain trnansition duration-500 group-hover:scale-105 sm:h-[350px]"
              />
              <div className="relative pt-3 bg-white">
                <p>
                  <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4"> 제목 2 </span>
                </p>
                <span className="text-xs text-gray-700">
                  작가 2
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="block overflow-hidden group">
              <img
                src={process.env.PUBLIC_URL + "/images/book3.jpg"}
                alt=""
                className="h-[250px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[350px]"
              />
              <div className="relative pt-3 bg-white">
                <p>
                  <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4"> 제목 3 </span>
                </p>
                <span className="text-xs text-gray-700">
                  작가 3
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="block overflow-hidden group">
              <img
                src={process.env.PUBLIC_URL + "/images/book4.jpg"}
                alt=""
                className="h-[250px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[350px]"
              />
              <div className="relative pt-3 bg-white">
                <p>
                  <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4"> 제목 4 </span>
                </p>
                <span className="text-xs text-gray-700">
                  작가 4
                </span>
              </div>
            </a>
          </li> */}
          {/* {List} */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
