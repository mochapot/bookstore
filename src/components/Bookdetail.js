import React from "react";

const Bookdetail = (props) => {
  const item = props.book
  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-start">카테고리 / 목록</div>
        <div className="d-flex justify-content-center">
          <div className="d-flex gap-5">
            <div>
              <div>
                <img
                  className="bookpic m-2"
                  src="photo/9791164064878.jpg"
                  alt="meenoi"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light btn-sm m-1 rounded-pill border border-secondary"
                >
                  <i className="bi bi-book m-1"></i>
                  미리보기
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm m-1 rounded-pill border border-secondary"
                >
                  <i className="bi bi-laptop m-1"></i>
                  eBook 미리보기
                </button>
              </div>
            </div>
            <div>
              <h2 className="d-flex justify-content-start">{item.title}</h2>
              <h6 className="d-flex justify-content-start">{item.subtitle}</h6>
              <h4 className="d-flex justify-content-start">
                {item.author}&nbsp;저자
              </h4>
              <div className="d-flex">
                <p>{item.publisher}</p>
                <span>&nbsp;·&nbsp;</span>
                <p>날짜</p>
              </div>
              <h4 className="d-flex justify-content-start">{item.price}원</h4>
              <span className="line"></span>
              <div className="d-flex justify-content-between">
                <h6>적립/혜택</h6>
                <div className="d-flex justify-content-end">
                  <span className="point-txt">{item.point}P</span>
                  <button className="del-bt">
                    <i className="bi bi-arrow-down-circle m-1"></i>
                  </button>
                </div>
              </div>
              <span className="line"></span>
              <div className="d-flex justify-content-between">
                <h6>배송안내</h6>
                <div>
                  <div className="d-flex justify-content-end align-items-center">
                    <span>무료배송</span>
                    <button className="del-bt">
                      <i className="bi bi-exclamation-circle m-1"></i>
                    </button>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <span>내일 도착예정</span>
                    <button className="del-bt">
                      <i className="bi bi-question-circle m-1"></i>
                    </button>
                  </div>
                </div>
              </div>
              <span className="line"></span>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg btn-warning m-2"
                >
                  <i className="bi bi-gift m-2"></i>
                  선물하기
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg btn-secondary m-2"
                >
                  <i className="bi bi-cart4 m-2"></i>
                  장바구니
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg btn-primary m-2"
                >
                  <i className="bi bi-credit-card m-2"></i>
                  바로구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center m-3">
        <div className="card" style={{ width: "80%" }}>
          <div className="card-header text-start">책 소개</div>
          <div className="card-text text-start m-3">{item.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetail;
