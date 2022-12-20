import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.0.31:8915/api/book/list?page=0")
      .then((res) => setList(res.data));
  }, []);
  console.log(list);
};

const Booklist = (props) => {
  const item = props.book;
  // console.log(item);
  const fontSize = { fontSize: "14px" };
  const sfontSize = { fontSize: "12px" };
  const divSize = { width: "19rem" };
  const fontColor = { color: "#666666" };
  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col d-flex justify-content-center">
          <Link to={"/bookdetail"}>
            <div className="card h-100" style={divSize}>
              <img src="images/1.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start" style={fontSize}>
                  {item.title}
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>{item.author} ·</p>
                  <p style={fontColor}>{item.publisher} /</p>
                  <p style={fontColor}>{item.regDt} /</p>
                  <p style={fontColor}>{item.price}원</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col d-flex justify-content-center">
          <Link to={"/bookdetail"}>
            <div className="card h-100" style={divSize}>
              <img src="images/2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start" style={fontSize}>
                  트렌드 코리아 2023
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a</p>
                </div>
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col d-flex justify-content-center">
          <Link to={"/bookdetail"}>
            <div className="card h-100" style={divSize}>
              <img src="images/3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start" style={fontSize}>
                  아버지의 해방일지
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a</p>
                </div>
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col d-flex justify-content-center">
          <Link to={"/bookdetail"}>
            <div className="card h-100" style={divSize}>
              <img src="images/4.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start" style={fontSize}>
                  아버지의 해방일지
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a</p>
                </div>
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col d-flex justify-content-center">
          <Link to={"/bookdetail"}>
            <div className="card h-100" style={divSize}>
              <img src="images/5.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start" style={fontSize}>
                  아버지의 해방일지
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a</p>
                </div>
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col d-flex justify-content-center">
          <Link to={"/bookdetail"}>
            <div className="card h-100" style={divSize}>
              <img src="images/6.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start" style={fontSize}>
                  아버지의 해방일지
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a /</p>
                  <p style={fontColor}>a</p>
                </div>
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div></div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <Link
                className="page-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Previous
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Booklist;