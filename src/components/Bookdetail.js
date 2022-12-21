import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import instance from '../api/axios';
import request from '../api/request';

const Bookdetail = () => {
  
  const [detail, setDetail] = useState([]);

  // URI 처리
  const { id } = useParams();  

  const fetchData = async () => {
    const params = {
      Seq: id
    };
    const resultBook = await instance.get(request.fetchBook, {params});
    setDetail(resultBook.data.list[0]);
  }

  useEffect( () => {
    fetchData();
  }, []);

  // 천원단위 콤마
  function comprice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // 포인트 반올림
  const round = (x) => {
    return Math.ceil(x)
  };

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
      <div className="position-relative">
        <div className="cate"> 
          <Link to ="/">Home</Link>
          <span></span>
          <Link to ="/booklist">List</Link>
        </div>
        <div className="d-flex justify-content-center flex-column m-4">
          <h2>{detail.title}</h2>
          <h6>{detail.subtitle}</h6>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex gap-5">
            <div>              
              <div className="p-1">
                <img className="bookpic m-2 shadow-lg mb-3 bg-body" src= {detail.image} alt = "..."/>
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
            <div className="p-1">
              <div className="position-relative">
                <button type= "button" className="sns-bt btn-success btn-outline-secondary">
                  <i className="bi bi-share"></i>
                </button>
                <button type= "button" className="share-bt btn-success btn-outline-secondary" onClick={changeHeart}>
                  <i className={clickHeart ? "bi bi-suit-heart" : "bi bi-suit-heart-fill"}></i>
                </button>
              </div>
              <h5 className="d-flex justify-content-start ms-4">{detail.author}&nbsp;저자</h5>
              <div className="d-flex ms-4">
                <p>{detail.publisher}</p>
                <span>&nbsp;·&nbsp;</span>
                <p>{detail.regDt}</p>
              </div>
              <div className="d-flex ms-4">
                <p className="fs-4 green-txt">{100*detail.discount}%</p>
                <h4 className="m-1 mb-0">{comprice( detail.price * (1 - detail.discount) )}원</h4>
                <p className="text-decoration-line-through fs-6 d-flex align-items-end">{comprice( detail.price * 1 )}원</p>
              </div>
              <span className="line"></span>
              <div className="d-flex justify-content-between ms-4 me-4">
                <p className="fw-bold">적립/혜택</p>
                <div className="d-flex justify-content-end">
                  <span className="green-txt">{round(detail.price*0.05)}P</span>
                  <div className="dropdown">
                    <button className="del-bt" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false" onClick={changeArrow}>
                      <i className={clickArrow ? "m-1 bi bi-arrow-down-circle" : "m-1 bi bi-arrow-up-circle-fill"}></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end p-3 info-bx" style={{width: "400px"}}>
                      <li className="ms-3 me-3">
                        <p className="fw-bold mb-1 fs-6">기본적립</p>
                        <div className="d-flex justify-content-between">
                          <p>5%기본적립</p>
                          <p>{round(detail.price*0.05)}P</p>
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
                <button type="button" className="btn btn-outline-light btn-md btn-warning m-2">
                  <i className="bi bi-gift m-2"></i>
                  선물하기
                </button>
                <button type="button" className="btn btn-outline-light btn-md btn-secondary m-2">
                  <i className="bi bi-cart4 m-2"></i>
                  장바구니
                </button>
                <button type="button" className="btn btn-outline-light btn-md btn-primary m-2">
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
            {detail.overview}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookdetail