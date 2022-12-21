import React, { useState } from 'react'

const Bookdetail = (props) => {
  
  const item = props.book;
  console.log(item);

  // 천원단위 콤마
  function comprice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // 날짜 구하기
  let today = new Date();   
  let month = today.getMonth() + 1;
  let date = today.getDate() + 1;
  let week = ['일', '월', '화', '수', '목', '금', '토'];
  let day = week[today.getDay() + 1];
  const delday = (month + '/' + date + ',' + day)
  
  // 바뀌는 버튼 만들기
  const [clickHeart, setClickHeart] = useState(true);
  const changeHeart = () => {
    setClickHeart(!clickHeart);
  };
  const [clickArrow, setClickArrow] = useState(true);
  const changeArrow = () => {
    setClickArrow(!clickArrow);
  };
  const [clickExcla, setClickExcla] = useState(true);
  const changeExcla = () => {
    setClickExcla(!clickExcla);
  };

  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-start">카테고리 / 목록</div>
        <div className="d-flex justify-content-center">
          <div className="d-flex gap-5">
            <div>
              <div>
                <img className="bookpic m-2 shadow-lg p-1 mb-5 bg-body" src= {item.image} alt = "..."/>
              </div>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-light btn-sm m-1 rounded-pill border border-secondary">
                  <i className="bi bi-book m-1"></i>
                  미리보기
                </button>
                <button type="button" className="btn btn-light btn-sm m-1 rounded-pill border border-secondary">
                  <i className="bi bi-laptop m-1"></i>
                  eBook 미리보기
                  </button>
              </div>
            </div>
            <div>
              <div className="position-relative">
                <button type= "button" className="sns-bt btn-success btn-outline-secondary">
                  <i className="bi bi-share"></i>
                </button>
                <button type= "button" className="share-bt btn-success btn-outline-secondary" onClick={changeHeart}>
                  <i className={clickHeart ? "bi bi-suit-heart" : "bi bi-suit-heart-fill"}></i>
                </button>
              </div>  
              <h2 className="d-flex justify-content-start ms-4">{item.title}</h2>
              <h6 className="d-flex justify-content-start ms-4">{item.subtitle}</h6>
              <h4 className="d-flex justify-content-start ms-4">{item.author}&nbsp;저자</h4>
              <div className="d-flex ms-4">
                <p>{item.publisher}</p>
                <span>&nbsp;·&nbsp;</span>
                <p>{item.regDt}</p>
              </div>
              <div className="d-flex ms-4">
                <p className="fs-4 green-txt">{100*item.discount}%</p>
                <h4 className="m-1 mb-0">{comprice( item.price * (1 - item.discount) )}원</h4>
                <p className="text-decoration-line-through fs-6 d-flex align-items-end">{comprice( item.price * 1 )}원</p>
              </div>
              <span className="line"></span>
              <div className="d-flex justify-content-between ms-4 me-4">
                <p className="fw-bold">적립/혜택</p>
                <div className="d-flex justify-content-end">
                  <span className="green-txt">{item.price*0.05}P</span>
                  <div className="dropdown">
                    <button className="del-bt" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false" onClick={changeArrow}>
                      <i className={clickArrow ? "m-1 bi bi-arrow-down-circle" : "m-1 bi bi-arrow-up-circle-fill"}></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end p-3 info-bx" style={{width: "400px"}}>
                      <li className="ms-3 me-3">
                        <p className="fw-bold mb-1 fs-6">기본적립</p>
                        <div className="d-flex justify-content-between">
                          <p>5%기본적립</p>
                          <p>{item.price*0.05}P</p>
                        </div>
                      </li>
                      <span className="line"></span>
                      <li className="ms-3 me-3">
                        <p className="fw-bold mb-1 fs-6">추가적립</p>
                        <div className="d-flex justify-content-between">
                          <p>5만원 이상 구매 시 추가</p>
                          <p>{comprice(2000)}P</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>리뷰 작성 시, e교환권 추가</p>
                          <p>최대 300원</p>
                        </div>
                      </li>
                      <span className="line"></span>
                      <li className="ms-3 me-3">
                        <div className="d-flex justify-content-between">
                          <p className="fw-bold mb-1 fs-6">부가혜택 안내</p>
                          <div>
                            <a href="#">제휴포인트</a>
                            <span className="text-black text-opacity-25"> &nbsp;|&nbsp; </span>
                            <a href="#">쿠폰/혜택</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span className="line"></span>
              <div className="d-flex justify-content-between ms-4 me-4">
                <p className="fw-bold">배송안내</p>
                <div>
                  <div className="d-flex justify-content-end align-items-center">
                    <span>무료배송</span>
                    <div class="dropdown">
                      <button className="del-bt" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false" onClick={changeExcla}>
                        <i className={clickExcla ? "m-1 bi bi-exclamation-circle" : "m-1 bi bi-exclamation-circle-fill"}></i>
                      </button>
                      <p class="dropdown-menu dropdown-menu-end p-3 info-bx" style={{width: "400px"}}>
                        <p className="text-center fw-bold fs-5 mb-2">배송비 안내</p>
                        <p className="fw-bold mb-1 fs-6">국내도서 / 외국도서</p>
                        도서만 1만 원 이상 구매 시 무료배송<br />
                        도서 + 잡지 / 만화 / :K컬렉션을 함께 1만 원 이상 구매 시 무료배송<br />
                        <p className="text-black text-opacity-25 mt-1">1만원 미만 시 2,000원 배송비 부과</p>
                        <br />
                        <p className="fw-bold mb-1 fs-6">잡지 / 만화 / :K컬렉션 (교보배송)</p>
                        각각 구매하거나 함께 2만 원 이상 구매 시 무료배송<br />
                        <p className="text-black text-opacity-25 mt-1">2만원 미만 시 2,000원 배송비 부과</p>
                        <br />
                        <p className="fw-bold mb-1 fs-6">해외주문 서양도서 / 해외주문 일본도서 (교보배송)</p>
                        각각 구매하거나 함께 1만 원 이상 구매 시 무료배송<br />
                        <p className="text-black text-opacity-25 mt-1">1만원 미만 시 2,000원 배송비 부과</p>
                      </p>
                    </div> 
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <span>내일 ({delday}) 도착예정</span>
                    <button className="del-bt">
                      <i className="bi bi-question-circle m-1"></i>
                    </button>
                  </div>
                </div>              
              </div>
              <span className="line"></span>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-light btn-lg btn-warning m-2">
                  <i className="bi bi-gift m-2"></i>
                  선물하기
                </button>
                <button type="button" className="btn btn-outline-light btn-lg btn-secondary m-2">
                  <i className="bi bi-cart4 m-2"></i>
                  장바구니
                </button>
                <button type="button" className="btn btn-outline-light btn-lg btn-primary m-2">
                  <i className="bi bi-credit-card m-2"></i>
                  바로구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center m-3">
        <div className="card" style={{width: '80%'}}>
          <div className="card-header text-start">책 소개</div>
          <div className="card-text text-start m-3">
            {item.overview}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookdetail