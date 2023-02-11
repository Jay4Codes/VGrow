import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="main-banner" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="item header-text">
                  <h6>Welcome to VGrow</h6>
                  <h2>
                    Providing <em>Smart</em> Farming <span>Solutions</span>?
                  </h2>
                  <p>
                    We suggest Optimal crop and fertilizer selection based on
                    the local conditions and resources crucial for sustainable
                    and profitable agriculture
                  </p>
                  <div className="down-buttons">
                    <div className="main-blue-button-hover">
                      <a href="#crop">Predict Your Crop</a>
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

export default Intro;
