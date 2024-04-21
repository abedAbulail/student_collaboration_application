import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../components/ExampleCarouselImage";
import "./carousel.css";


export default function Caro() {
  return (
    <div style={{ backgroundColor: "#DFAD7B" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Carousel>
              <Carousel.Item>
                <ExampleCarouselImage imageUrl="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" />
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage imageUrl="https://liveeventproductions.co.uk/wp-content/uploads/2018/01/event-production-services-live-event-productions-banner-image-4.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <ExampleCarouselImage imageUrl="https://i.pinimg.com/736x/c0/57/04/c057042465f61b243234b49eec15efb7.jpg" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
