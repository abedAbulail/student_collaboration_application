
import React from "react";

// Assuming you want to pass 'text' as a prop to display some text
const ExampleCarouselImage = ({ text, imageUrl }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={imageUrl}
        alt={text}
        style={{ width: "1000px", height: "500px" }}
      />
      <p>{text}</p>
    </div>
  );
};

export default ExampleCarouselImage;