import "./main.css";
export default function MainFooter() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-7">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <p className="fb">
                    <b>Explore</b>
                  </p>{" "}
                  <a className="a">Communities</a>
                  <br></br>
                  <a className="a">Market</a>
                  <br></br>
                  <a className="a">Events</a>
                  <br></br>
                  <a className="a">Support</a>
                </div>
                <div className="col-6">
                  <p className="fb">
                    <b>Important links</b>
                  </p>
                  <a className="a">Our privacy</a> <br />
                  <a className="a">Terms and conditions</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img className="icons" src="/new.png" alt="s" width={35} />
            <img className="icons" src="/facebook (2).png" alt="s" width={30} />
            <img className="icons" src="/twitter (2).png" alt="s" width={30} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br></br>
            <p>
              {" "}
              <b>@copyright 2024, all rights reserved</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
