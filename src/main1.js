
import "./main.css";
export default function Main1(){
    return (
      <div
        style={{ width: "100%", height: "400px", backgroundColor: "#F37626" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col col-md-6 text-start m-3 text-light">
              <div style={{ marginTop: "20%" }}>
                <h1>
                  <b>Connect, Collaborate, Create</b>
                </h1>
                <p>
                  Engage in dynamic discussions, share resources, and build
                  networks. <br></br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer blandit molestie elit.
                </p>
                <button
                  className="btn bg-light"
                  style={{ color: "#F37626", borderRadius: "40px" }}
                >
                  JOIN US
                </button>
              </div>
            </div>
            <div className="col col-md-3">
              <div className="bgimg"></div>
            </div>
          </div>
        </div>
      </div>
    );
}