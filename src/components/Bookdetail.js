import React from 'react'

const Bookdetail = () => {
  return (
    <div>
      <div>
        <div>카테고리 / 목록</div>
        <div class="d-flex justify-content-around">
          <div>
            <div>
              <img class="bookpic" src="photo/meenoi.jpg" alt = "meenoi"/>
            </div>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-light btn-sm m-1">
                <i class="bi bi-book m-1"></i>
                미리보기
              </button>
              <button type="button" class="btn btn-light btn-sm m-1">
                <i class="bi bi-laptop m-1"></i>
                eBook 미리보기
                </button>
            </div>
          </div>
          <div>
            <h2>bName</h2>
            <h3>bSubname</h3>
            <h4>bWriter</h4>
            <div class="d-flex nowrap">
              <h5>bCompany</h5>
              <span>|</span>
              <h5>bDate</h5>
            </div>
            <h4>bPrice</h4>
            <div class="d-flex justify-content-between">
              <h4>적립/혜택</h4>
              <h4>P</h4>
            </div>
            <div class="d-flex justify-content-between">
              <h4>배송안내</h4>
              <div>
                <div class="d-flex justify-content-end align-items-center">
                  <h5>무료배송</h5>
                  <button class="del-bt">
                    <i class="bi bi-exclamation-circle m-1"></i>
                  </button>
                </div>
                <div  class="d-flex justify-content-end align-items-center">
                  <h5>내일 도착예정</h5>
                  <button class="del-bt">
                    <i class="bi bi-question-circle m-1"></i>
                  </button>
                </div>
              </div>              
            </div>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-outline-light btn-lg btn-warning m-2">
                <i class="bi bi-gift m-2"></i>
                선물하기
              </button>
              <button type="button" class="btn btn-outline-light btn-lg btn-secondary m-2">
                <i class="bi bi-cart4 m-2"></i>
                장바구니
              </button>
              <button type="button" class="btn btn-outline-light btn-lg btn-primary m-2">
                <i class="bi bi-credit-card m-2"></i>
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>상품설명</div>
        <div>상품설명 TxT</div>
      </div>
    </div>
  )
}

export default Bookdetail