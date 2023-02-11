import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import CropPredict from "./components/CropPredict";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <CropPredict />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
