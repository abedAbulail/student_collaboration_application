import Btns from "./buttoms";

export default function Topnav() {
  return (
    <div className="container p-1 ">
      <div className="row  justify-content-between">
        <div className="col-3">
          <div
            className="bg-light"
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              marginTop: "2%",
            }}
          ></div>
        </div>
        <div className="col-4">
          <Btns />
        </div>
        <div className="col-3">
          <button
            style={{
              fontSize: "18px",
              textDecoration: "underline",
              marginLeft: "30%",
              marginTop: "3%",
            }}
            className="btn text-light"
          >
            
            Sign in
          </button>
          <button
            style={{
              fontSize: "20px",
              color: "#F37626",
              borderRadius: "30px",
              marginTop: "4%",
            }}
            className="btn  bg-light"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
