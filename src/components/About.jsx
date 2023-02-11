import React from "react";
import about_left from "../assets/images/about-left-image.png";

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
                  Grow your website with our <em>SEO Tools</em> &amp;
                  <span>Project</span> Management
                </h2>
                <p>
                  You can browse free HTML templates on Too CSS website. Visit
                  the website and explore latest website templates for your
                  projects.
                </p>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon">
                          <img src="assets/images/service-icon-01.png" alt="" />
                        </div>
                        <div className="count-digit">320</div>
                        <div className="count-title">SEO Projects</div>
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
                        <div className="count-digit">640</div>
                        <div className="count-title">Websites</div>
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
                        <div className="count-title">Satisfied Clients</div>
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
