export default function Search(){
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <input
            type="text"
            style={{
              backgroundColor: "#F4F4F4",
              border: "1px #E4E4E4 solid",
              width: "100%",
              height: "50px",
              display: "inline-block",
            }}
          />
        </div>
        <div className="col-2">
          <div>
            <button
              className="btn text-light  p-1"
              style={{
                width: "100px",
                backgroundColor: "#F37626",
                height: "50px",
                display: "inline-block",

                borderRadius: "0px",
              }}
            >
              <b>Search</b>
            </button>
          </div>
        </div>
      </div>
    );
}