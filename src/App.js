import "./App.css";
import Map from "./components/Map";
import Intro from "./components/Intro";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import CropPredict from "./components/CropPredict";
import FertPredict from "./components/FertPredict";

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
                <FertPredict />
                <Map />
                <ContactUs />
              </>
            }
          />
          <Route
            path="/analysis"
            element={
              <>
                <iframe
                  src="https://wandb.ai/tri-nit/tri-nit-hackathon/reports/TRI-NIT_Enemies_of_Syntax-Comparision-Report--VmlldzozNTM1MDA2?accessToken=0h22492df7jskgsoads9us70m3v8sys5lnkcv8xh40fqp8gyj9s8p2u3yiom3za6"
                  style={{ width: "100%", height: "100vh" }}
                />
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
