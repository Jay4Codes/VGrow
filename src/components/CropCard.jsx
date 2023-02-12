import React from "react";
import "./CropCard.css";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const CropCard = (props) => {
  return (
    <div className="my-crops" data-aos="zoom-in-up" data-aos-duration="1500">
      <a href="#map">
        <img src={"./images/" + props.name + ".png"} alt="" />
        <h4 className="web">{props.name}</h4>
        {props.item == "0" ? (
          <>
            Average Yield Price:{" "}
            <p className="crops-info">
              {getRandomNumber(400, 700)} per hectare
            </p>
            Average Sales Price :{" "}
            <p className="crops-info">
              {getRandomNumber(10100, 17800)} INR per Quintal
            </p>
          </>
        ) : (
          <>Price In India: 77 INR per Kg</>
        )}
      </a>
    </div>
  );
};

export default CropCard;
