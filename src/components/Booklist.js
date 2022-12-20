import React from "react";
import { Link } from "react-router-dom";

const Booklist = (props) => {
  const item = props.bookli;
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
              <img src="images/1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start" style={fontSize}>
                  {item[0].title}
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>{item[0].author} ·</p>
                  <p style={fontColor}>{item[0].publisher} /</p>
                  <p style={fontColor}>{item[0].regDt} /</p>
                  <p style={fontColor}>{item[0].price}원</p>
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
                  {item[1].title}
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>{item[1].author} ·</p>
                  <p style={fontColor}>{item[1].publisher} /</p>
                  <p style={fontColor}>{item[1].regDt} /</p>
                  <p style={fontColor}>{item[1].price}원</p>
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
                  {item[2].title}
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>{item[2].author} ·</p>
                  <p style={fontColor}>{item[2].publisher} /</p>
                  <p style={fontColor}>{item[2].regDt} /</p>
                  <p style={fontColor}>{item[2].price}원</p>
                </div>
                <p className="card-text"></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col d-flex justify-content-center">
          <Link to={"/bookdetail"}>
            <div className="card h-100" style={divSize}>
              <img src="images/4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-start" style={fontSize}>
                  {item[3].title}
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>{item[3].author} ·</p>
                  <p style={fontColor}>{item[3].publisher} /</p>
                  <p style={fontColor}>{item[3].regDt} /</p>
                  <p style={fontColor}>{item[3].price}원</p>
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
                  {item[4].title}
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>{item[4].author} ·</p>
                  <p style={fontColor}>{item[4].publisher} /</p>
                  <p style={fontColor}>{item[4].regDt} /</p>
                  <p style={fontColor}>{item[4].price}원</p>
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
                  {item[5].title}
                </h5>
                <div className="d-flex justify-content-start" style={sfontSize}>
                  <p style={fontColor}>{item[5].author} ·</p>
                  <p style={fontColor}>{item[5].publisher} /</p>
                  <p style={fontColor}>{item[5].regDt} /</p>
                  <p style={fontColor}>{item[5].price}원</p>
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
