import "./main.css";

export default function Main21() {
  return (
    <div className="container">
      <h2 className="text-start mt-5 mb-4">Spotlight Communities</h2>

      <div className="row justify-content-between">
        <div className="col-md-3 col-6 p-1">
          <div className="tt">
            <div>
              <p style={{ paddingTop: "150px" }} className="text-start">
                <div
                  className="bg-success"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginLeft: "0px",
                  }}
                ></div>
                {/* 177 Online */}
              </p>
              {/* <p className="text-start">233 total members</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 p-1">
          <div className="tt">
            <div>
              <p style={{ paddingTop: "150px" }} className="text-start">
                <div
                  className="bg-success"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginLeft: "0px",
                  }}
                ></div>
                {/* 177 Online */}
              </p>
              <p className="text-start"></p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 p-1">
          <div className="tt">
            <div>
              <p style={{ paddingTop: "150px" }} className="text-start">
                <div
                  className="bg-success"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginLeft: "0px",
                  }}
                ></div>
                {/* 177 Online */}
              </p>
              {/* <p className="text-start">233 total members</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-2 col-5 d-flex">
          <h5 className="dd">
            EXPLORE <img src="/right-arrow.png" width={30} alt="" />
          </h5>
        </div>
      </div>
    </div>
  );
}
