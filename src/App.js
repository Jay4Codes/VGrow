import "./App.css";
import Map from "./components/Map";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import CropPredict from "./components/CropPredict";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <About />
                <CropPredict />
                {/* <Stats /> */}
                {/* <Map /> */}
                <ContactUs />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
