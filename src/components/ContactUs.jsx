import React from "react";
import "./ContactUs.css";
import contact_dec from "../assets/images/contact-dec.png";
import contact_left from "../assets/images/contact-left-dec.png";

const ContactUs = () => {
  return (
    <div>
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-heading">
                <h2>
                  Feel free to <em>Contact</em> us via the
                  <span>HTML form</span>
                </h2>
                <div id="map">
                  <iframe
                    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="360px"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-dec">
          <img src={contact_dec} alt="" />
        </div>
        <div className="contact-left-dec">
          <img src={contact_left} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
