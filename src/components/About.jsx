import React from "react";
import about_left from "../assets/images/about-left-image.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-image">
                <img src={about_left} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>
                  Maximize your yield with our <em>Predictions</em> &amp;
                  <span> Trend </span>Analysis
                </h2>
                <p>
                  By taking into consideration factors such as soil composition,
                  rainfall, temperature, and return of investment, farmers can
                  choose crops that are best suited for their specific
                  conditions, maximizing yields and reducing the need for costly
                  inputs like fertilizers.
                </p>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon">
                          <img src="assets/images/service-icon-01.png" alt="" />
                        </div>
                        <div className="count-digit">22</div>
                        <div className="count-title">Crops</div>
                        <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon">
                          <img src="assets/images/service-icon-02.png" alt="" />
                        </div>
                        <div className="count-digit">28</div>
                        <div className="count-title">States</div>
                        <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon">
                          <img src="assets/images/service-icon-03.png" alt="" />
                        </div>
                        <div className="count-digit">120</div>
                        <div className="count-title">Soils</div>
                        <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
