import { Link } from "react-router-dom";

export default function Btns() {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-6 col-md-3">
          <Link style={{ textDecoration: "none", color: "white" }} to="/Main">
            <button className="btn text-light">
              <img src="/home (3).png" alt="icon" width={20} /> <br></br>
              <b>Home</b>
            </button>
          </Link>
        </div>
        <div className="col-6  col-md-5">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Communities"
          >
            <button className="btn text-light">
              <img src="/group.png" alt="icon" width={20} /> <br></br>
              <b>Communities</b>
            </button>
          </Link>
        </div>
        <div className="col-6 col-md-3">
          <Link style={{ textDecoration: "none", color: "white" }} to="/Market">
            <button className="btn text-light">
              <img src="/shopping-bag (1).png" alt="icon" width={20} />{" "}
              <br></br>
              <b>Market</b>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
