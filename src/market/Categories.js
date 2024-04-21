export default function Categories({text}){
    return (
      <div style={{}}>
        <div
          className="row justify-content-center mt-1 "
          style={{
            backgroundColor: "#F37626",
            borderRadius: "30px",
          
        
          }}
        >
          <div className="col-8">
            <label className="text-light" style={{ fontSize: "14px" }}>
              {text}
            </label>
          </div>
          <div className="col-1">
            <input
              type="checkbox"
              style={{
                height: "15px",
                width: "15px",
                borderRadius: "10px",
                marginTop: "5px",
              }}
            />
          </div>
        </div>
      </div>
    );
}