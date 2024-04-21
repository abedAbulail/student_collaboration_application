export default function Item(){
    return (
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "#F37626",

          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "90%",
            height: "110px",
            marginLeft: "5%",
            marginRight: "5%",
            borderRadius: "10px",
            backgroundImage:
              "url('https://i.pinimg.com/736x/c0/57/04/c057042465f61b243234b49eec15efb7.jpg')",
            backgroundSize: "cover",
            marginTop: "10px",
          }}
        ></div>
        <div className="row" style={{}}>
          <div className="col-3">
            <div
              className="bg-dark"
              style={{
                width: "50px",
                height: "50px",
                marginTop: "15px",
                marginLeft: "10px",

                borderRadius: "50%",
                display: "inline-block",
              }}
            ></div>
          </div>
          <div className="col">
            <p style={{ fontSize: "15px" }}>
              CH1 PDF Class Web design for life.
            </p>
            <p style={{ fontSize: "18px", marginTop: "-15px" }}>Abood Abulail</p>
          </div>
        </div>
      </div>
    );
}