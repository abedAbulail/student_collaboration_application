
import Topnav from './topnav';
import Main from './main';
import Market from './market';
import Comm from './comm';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
    const images = [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
      "https://i.pinimg.com/736x/c0/57/04/c057042465f61b243234b49eec15efb7.jpg",
      "https://liveeventproductions.co.uk/wp-content/uploads/2018/01/event-production-services-live-event-productions-banner-image-4.jpg",
    ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Main"
            element={
              <>
                <div style={{ backgroundColor: "#F37626" }}>
                  <Topnav />
                </div>
                <Main />
              </>
            }
          />
          <Route
            path="/Market"
            element={
              <>
                <div style={{ backgroundColor: "#F37626" }}>
                  <Topnav />
                </div>
                <Market images={images} />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <div style={{ backgroundColor: "#F37626" }}>
                  <Topnav />
                </div>
                <Main />
              </>
            }
          />
          <Route
            path="/Communities"
            element={
              <>
                <div style={{ backgroundColor: "#F37626" }}>
                  <Topnav />
                </div>
                <Comm />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
