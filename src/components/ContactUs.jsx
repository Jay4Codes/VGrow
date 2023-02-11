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
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Get in <em>Touch</em>
                </h2>
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.00592378744!2d72.83500021433792!3d19.107396055951483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1676094098767!5m2!1sen!2sin"
                    width="100%"
                    height="360px"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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
