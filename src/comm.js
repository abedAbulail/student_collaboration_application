import "./comm.css";
import MainSearch from "./mainSearch";
import CommSuggest from "./commSuggest";
import Search from "./comm/Search";
import Result from "./results";
export default function Comm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>
            <b>Communities</b>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-12">
              <Search />
            </div>
            <div className="col-12">
              <div className="row justify-content-between">
                <h3>Suggested communities</h3>
                <div className="col-md-3 col-6 p-1">
                  <CommSuggest />
                </div>
                <div className="col-md-3 col-6 p-1">
                  <CommSuggest />
                </div>
                <div className="col-md-3 col-6 p-1">
                  <CommSuggest />
                </div>
                <div className="col-md-3 col-6 p-1">
                  <CommSuggest />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div
            style={{
              backgroundColor: "#F4F4F4",
              border: "1px #E4E4E4 solid",
              borderRadius: "20px",
              width: "100%",
              height: "300px",
            }}
          ></div>
        </div>
      </div>
      <div className="row">
        <h5 style={{ marginTop: "50px" }}>
          Search results for “<b>Front end...</b>”
        </h5>
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </div>
    </div>
  );
}
