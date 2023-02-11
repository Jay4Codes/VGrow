import React from "react";
import "./CropCard.css";

const CropCard = (props) => {
  return (
    <div className="my-crops" data-aos="zoom-in-up" data-aos-duration="1500">
      <img src={"./images/" + props.name + ".png"} alt="" />
      <h4 className="web">{props.name}</h4>
      <p className="crops-info">{props.price}</p>
    </div>
  );
};

export default CropCard;
