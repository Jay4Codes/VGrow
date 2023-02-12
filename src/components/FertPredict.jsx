import React, { useState } from "react";
import states from "../assets/jsons/states.json";
import districts from "../assets/jsons/districts.json";
import CropCard from "./CropCard";
import crop_left from "../assets/images/crop-left-dec.png";
import "./CropPredict.css";
import Map from "./Map";

const CropPredict = () => {
  const [data, setData] = useState("");
  const [Loading, setLoading] = useState(-1);
  const [N_value, setN_value] = useState("40");
  const [P_value, setP_value] = useState("40");
  const [K_value, setK_value] = useState("40");
  const [moisture, setmoisture] = useState("38");
  const [soil_type, setsoil_type] = useState("4");
  const [crop_type, setcrop_type] = useState("3");
  const [state_value, setstate_value] = useState("ANDAMAN And NICOBAR ISLANDS");
  const [district_value, setdistrict_value] = useState("NICOBAR");

  function getData() {
    setLoading(1);
    var requestOptions = {
      // mode:'no-cors',
      dataType: "json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        N: N_value,
        P: P_value,
        K: K_value,
        state: state_value,
        district: district_value,
        moisture: moisture,
        soil_type: soil_type,
        crop_type: crop_type,
      }),
    };

    fetch("http://localhost:5000/fertilizer", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.crop);
        setLoading(0);
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  }

  return (
    <div id="fert" className="our-prediction section">
      <div className="prediction-left-dec">
        <img src={crop_left} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>
                Predict <em>Fertilizer</em> &amp; as per
                <span> Your Needs </span>
              </h2>
              <span>Our Recommendations</span>
            </div>
          </div>
        </div>
        <form
          action="http://localhost:5000/fertilizer"
          className="crop-form"
          method="POST"
        >
          <div className="inputRow">
            <div className="inputDiv">
              <label htmlFor="nitrogen">Nitrogen value</label>
              <input
                name="nitrogen"
                type="text"
                placeholder="Enter value"
                value={N_value}
                onInput={(e) => setN_value(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label htmlFor="phosphorus">Phosphorus value</label>
              <input
                name="phosphorus"
                type="text"
                placeholder="Enter value"
                value={P_value}
                onInput={(e) => setP_value(e.target.value)}
              />
            </div>
          </div>
          <div className="inputRow">
            <div className="inputDiv">
              <label htmlFor="potassium">Potassium value</label>
              <input
                name="potassium"
                type="text"
                placeholder="Enter value"
                value={K_value}
                onInput={(e) => setK_value(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label htmlFor="ph">Moisture</label>
              <input
                name="ph"
                type="text"
                placeholder="Enter value"
                value={moisture}
                onInput={(e) => setmoisture(e.target.value)}
              />
            </div>
          </div>
          <div className="inputRow">
            <div className="inputDiv">
              <label htmlFor="potassium">Soil Type</label>
              <input
                name="potassium"
                type="text"
                placeholder="Enter value"
                value={soil_type}
                onInput={(e) => setsoil_type(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label htmlFor="ph">Crop Type</label>
              <input
                name="ph"
                type="text"
                placeholder="Enter value"
                value={crop_type}
                onInput={(e) => setcrop_type(e.target.value)}
              />
            </div>
          </div>
          <div className="inputRow">
            <div className="inputDiv">
              <label htmlFor="state">State</label>
              <select
                onChange={(f) => {
                  setstate_value(f.target.value);
                }}
              >
                {states?.map((e, i) => (
                  <option value={e} key={i}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputDiv">
              <label htmlFor="district">District</label>
              <select
                onChange={(f) => {
                  setdistrict_value(f.target.value);
                }}
              >
                {districts[states.indexOf(state_value)]?.map((e, i) => (
                  <option value={e} key={i}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={getData} type="button">
            Submit
          </button>
          {Loading == 1 ? (
            <div className="resultDiv">Loading....</div>
          ) : data !== "" ? (
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <CropCard name={data} item="1" />
                </div>
              </div>
            </div>
          ) : (
            <span>No Results</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default CropPredict;
