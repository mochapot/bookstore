import React from "react";

const Booklist = () => {
  const fontSize = { fontSize: "14px" };
  const sfontSize = { fontSize: "12px" };
  const divSize = { width: "19rem" };
  const fontColor = { color: "#666666" };
  const padding = { padding: 0 };
  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div class="col d-flex justify-content-center">
          <div class="card h-100" style={divSize}>
            <img src="images/1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-start" style={fontSize}>
                만일 내가 인생을 다시 산다면(10만 부 기념 스페셜 에디션)
              </h5>
              <div class="d-flex justify-content-start" style={sfontSize}>
                <p style={fontColor}>김혜남 · 메이븐 /</p>
                <p style={fontColor}>2022.11.11 /</p>
                <p style={fontColor}>15,480원</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card h-100" style={divSize}>
            <img src="images/2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-start" style={fontSize}>
                트렌드 코리아 2023
              </h5>
              <div class="d-flex justify-content-start" style={sfontSize}>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a</p>
              </div>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card h-100" style={divSize}>
            <img src="images/3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-start" style={fontSize}>
                아버지의 해방일지
              </h5>
              <div class="d-flex justify-content-start" style={sfontSize}>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a</p>
              </div>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card h-100" style={divSize}>
            <img src="images/4.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-start" style={fontSize}>
                아버지의 해방일지
              </h5>
              <div class="d-flex justify-content-start" style={sfontSize}>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a</p>
              </div>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card h-100" style={divSize}>
            <img src="images/5.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-start" style={fontSize}>
                아버지의 해방일지
              </h5>
              <div class="d-flex justify-content-start" style={sfontSize}>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a</p>
              </div>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card h-100" style={divSize}>
            <img src="images/6.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-start" style={fontSize}>
                아버지의 해방일지
              </h5>
              <div class="d-flex justify-content-start" style={sfontSize}>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a /</p>
                <p style={fontColor}>a</p>
              </div>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div></div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Booklist;
