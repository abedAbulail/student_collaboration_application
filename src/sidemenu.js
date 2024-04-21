import Categories from "./market/Categories";

export default function Side() {
  return (
    <div style={{ backgroundColor: "#dfad7b" }} className="col col-md-2">
      <input
        type="text"
        style={{
          backgroundColor: "#F4F4F4",
          border: "1px #E4E4E4 solid",
          boxSizing: "border-box",

          maxwidth: "100%",
          minWidth: "100%",
          marginTop: "30px",

          height: "30px",
          display: "inline-block",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          height: "1px",
          width: "100%",
          marginTop: "30px",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
      ></div>
      <div>
        <h5 className="mt-4 mb-4">
          <b>Categories</b>
        </h5>
        <Categories text={"Education"} />
        <Categories text={"Games"} />
        <Categories text={"Cars"} />
        <Categories text={"Sports"} />
        <Categories text={"Clothes"} />
        <Categories text={"Technology"} />

        <Categories text={"Health & Care"} />
        <Categories text={"Books"} />
        <Categories text={"Others"} />
      </div>
      <div
        style={{
          height: "1px",
          width: "100%",
          marginTop: "30px",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
      ></div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                placeholder="From"
                style={{
                  backgroundColor: "#F4F4F4",
                  border: "1px #E4E4E4 solid",
                  boxSizing: "border-box",

                  width: "100%",
                  marginTop: "30px",
                  textAlign: "center",

                  height: "40px",
                  display: "inline-block",
                  borderRadius: "30px",
                  color: "black",
                  fontSize: "18px",
                }}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                placeholder="To"
                style={{
                  backgroundColor: "#F4F4F4",
                  border: "1px #E4E4E4 solid",
                  boxSizing: "border-box",

                  width: "100%",
                  marginTop: "30px",

                  textAlign: "center",

                  height: "40px",
                  display: "inline-block",
                  borderRadius: "30px",
                  color: "black",
                  fontSize: "18px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            height: "2px",
            width: "100%",
            marginTop: "30px",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
        ></div>
        <button
          className="btn btn-transperant mt-4"
          style={{ fontSize: "19px", borderRadius: "30px" }}
        >
          <img src="/plus.png" alt="" width={20} />
          <b style={{ marginLeft: "5px" }}>Sell new Items..</b>
        </button>
      </div>
    </div>
  );
}
