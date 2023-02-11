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
                  <h6>Welcome</h6>
                  <h2>
                    Not sure what <em>Crop</em> to <span>plant</span>?
                  </h2>
                  <p>We suggest smart agriculture using Machine Learning</p>
                  <div className="down-buttons">
                    <div className="main-blue-button-hover">
                      <a href="#contact">Predict Your Crop</a>
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
