import "./market/carousel.css";
import Caro from "./market/carousel.js";
import Side from "./sidemenu.js";
import Item from "./items.js";
export default function Market({ images }) {
  return (
    <>
      <Caro />
      <div className="re">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-9">
              <h3 className="mt-5 mb-3 mr-5">
                <b>Hot</b> Prices
              </h3>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>{" "}
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>{" "}
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>
                </div>
                <div className="row">
                  <h3 className="mt-5 mb-3 mr-5">
                    FOR <b> FREE</b>
                  </h3>
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>{" "}
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>{" "}
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>
                  <div className="col-12 col-md-4">
                    <Item />
                  </div>
                </div>
              </div>
            </div>

            <Side />
          </div>
        </div>
      </div>
    </>
  );
}
