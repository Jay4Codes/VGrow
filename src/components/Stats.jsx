import React, { useState, useEffect } from "react";
import axios from "axios";

const CropInfo = ({ cropName }) => {
  const [cropData, setCropData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `
        https://quickstats.nass.usda.gov/api/api_GET/?key=29A9A201-CABF-37C1-BA73-C55537F5061D&commodity_desc=CORN&year__GE=2012&state_alpha=VA&format=JSON`
      )
      .then((res) => {
        console.log(res.data);
        setCropData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cropName]);

  return (
    <div>
      {cropData ? (
        <div>
          <h2>Crop Information for {cropName}:</h2>
          <p>Average Yield: {cropData.data[0].Value}</p>
          <p>Average Sales Price: {cropData.data[1].Value}</p>
        </div>
      ) : (
        <p>Loading crop information...</p>
      )}
    </div>
  );
};

export default CropInfo;
