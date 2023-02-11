import React from "react";

const CropCard = (props) => {
  return (
    <div className="item">
      <div className="thumb">
        <img src={props.img} alt="" />
        <div className="hover-effect">
          <div className="inner-content">
            <h4>{props.name}</h4>
            <span>{props.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropCard;
