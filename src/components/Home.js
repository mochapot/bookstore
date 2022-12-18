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
            <h2 className="carousel-caption position-absolute top-50 start-50">
              주도적인 삶을 살기 위한 <br />
              3단계 핵심 솔루션
            </h2>
            <img src="images/i_1624_450_1.jpg" class="img-fluid" alt="..." />
          </div>
          <div class="carousel-item">
            <h2 className="carousel-caption position-absolute top-50 start-50">
              새로운 관점으로 <br />
              우리의 삶을 위로한다
            </h2>
            <img src="images/i_1624_450_2.jpg" class="img-fluid" alt="..." />
          </div>
          <div class="carousel-item">
            <h2 className="carousel-caption position-absolute top-50 start-50">
              새로운 언어는 <br />
              새로운 시대를 반영한다
            </h2>
            <img src="images/i_1624_450_3.jpg" class="img-fluid" alt="..." />
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
      <div>
        <h2>오늘의 선택</h2>
      </div>
    </div>
  );
};

export default Home;
