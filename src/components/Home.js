import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleInterval"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner pt-200">
          <div class="carousel-item  active" data-bs-interval="7000">
            <h3 className="carousel-caption position-absolute text-end">
              주도적인 삶을 살기 위한 <br />
              3단계 핵심 솔루션
            </h3>
            <img
              src={process.env.PUBLIC_URL + "/images/banner1.jpg"}
              className="img-fluid"
              alt="banner1"
            />
          </div>
          <div class="carousel-item">
            <h3 className="carousel-caption position-absolute text-end">
              새로운 관점으로 <br />
              우리의 삶을 위로한다
            </h3>
            <img
              src={process.env.PUBLIC_URL + "/images/banner2.jpg"}
              className="img-fluid"
              alt="banner2"
            />
          </div>
          <div class="carousel-item">
            <h3 className="carousel-caption position-absolute text-end">
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
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container">
        <div class="section-title">
          <h2>오늘의 선택</h2>
        </div>
        <div class="card-group">
          <div class="card">
            <img
              src={process.env.PUBLIC_URL + "/images/book1.jpg"}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">책 제목1</h5>
              <span class="card-text">작가1</span>
            </div>
          </div>
          <div class="card">
            <img
              src={process.env.PUBLIC_URL + "/images/book2.jpg"}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">책 제목1</h5>
              <span class="card-text">작가1</span>
            </div>
          </div>
          <div class="card">
            <img
              src={process.env.PUBLIC_URL + "/images/book3.jpg"}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">책 제목1</h5>
              <span class="card-text">작가1</span>
            </div>
          </div>
          <div class="card">
            <img
              src={process.env.PUBLIC_URL + "/images/book4.jpg"}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">책 제목1</h5>
              <span class="card-text">작가1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
