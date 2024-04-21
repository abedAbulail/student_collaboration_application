export default function MainSearch(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              style={{
                backgroundColor: "#d3d3d3",
                border: "#D4D4D4",
                width: "100%",
                height: "50px",
              }}
            />
          </div>
          <div className="col-1">
            <div>
              <button
                className="btn text-light  p-1"
                style={{
                  width: "100px",
                  backgroundColor: "#F37626",
                  height: "50px",

                  borderRadius: "0px",
                }}
              >
                <b>Search</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}