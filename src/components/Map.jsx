import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import LinearGradient from "./LinearGradient";
import "./Map.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const INDIA_TOPO_JSON = require("../assets/jsons/india.topo.json");
const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

const getHeatMapData = () => {
  return [
    { id: "AP", state: "Andhra Pradesh", value: 2967 },
    { id: "AR", state: "Arunachal Pradesh", value: 2782 },
    { id: "AS", state: "Assam", value: 2818 },
    { id: "BR", state: "Bihar", value: 1246 },
    { id: "CT", state: "Chhattisgarh", value: 617 },
    { id: "GA", state: "Goa", value: 3005 },
    { id: "GJ", state: "Gujarat", value: 802 },
    { id: "HR", state: "Haryana", value: 617 },
    { id: "HP", state: "Himachal Pradesh", value: 1251 },
    { id: "JH", state: "Jharkhand", value: 1326 },
    { id: "KA", state: "Karnataka", value: 1842 },
    { id: "KL", state: "Kerala", value: 3055 },
    { id: "MP", state: "Madhya Pradesh", value: 1151 },
    { id: "MH", state: "Maharashtra", value: 1447 },
    { id: "MN", state: "Manipur", value: 1881 },
    { id: "ML", state: "Meghalaya", value: 2818 },
    { id: "MZ", state: "Mizoram", value: 1881 },
    { id: "NL", state: "Nagaland", value: 1881 },
    { id: "OR", state: "Odisha", value: 1489 },
    { id: "PB", state: "Punjab", value: 649 },
    { id: "RJ", state: "Rajasthan", value: 484 },
    { id: "SK", state: "Sikkim", value: 2739 },
    { id: "TN", state: "Tamil Nadu", value: 998 },
    { id: "TG", state: "Telangana", value: 961 },
    { id: "TR", state: "Tripura", value: 1881 },
    { id: "UT", state: "Uttarakhand", value: 896 },
    { id: "UP", state: "Uttar Pradesh", value: 1025 },
    { id: "WB", state: "West Bengal", value: 2239 },
    { id: "AN", state: "Andaman and Nicobar Islands", value: 2967 },
    { id: "CH", state: "Chandigarh", value: 617 },
    { id: "DN", state: "Dadra and Nagar Haveli", value: 846 },
    { id: "DD", state: "Daman and Diu", value: 742 },
    { id: "DL", state: "Delhi", value: 611 },
    { id: "JK", state: "Jammu and Kashmir", value: 1011 },
    { id: "LA", state: "Ladakh", value: 600 },
    { id: "LD", state: "Lakshadweep", value: 1515 },
    { id: "PY", state: "Puducherry", value: 998 },
  ];
};

const getDemandData = () => {
  return [
    { id: "AP", state: "Andhra Pradesh", value: 1600 },
    { id: "AR", state: "Arunachal Pradesh", value: 1446 },
    { id: "AS", state: "Assam", value: 2000 },
    { id: "BR", state: "Bihar", value: 800 },
    { id: "CT", state: "Chhattisgarh", value: 600 },
    { id: "GA", state: "Goa", value: 2400 },
    { id: "GJ", state: "Gujarat", value: 1200 },
    { id: "HR", state: "Haryana", value: 400 },
    { id: "HP", state: "Himachal Pradesh", value: 800 },
    { id: "JH", state: "Jharkhand", value: 600 },
    { id: "KA", state: "Karnataka", value: 2400 },
    { id: "KL", state: "Kerala", value: 2200 },
    { id: "MP", state: "Madhya Pradesh", value: 800 },
    { id: "MH", state: "Maharashtra", value: 2000 },
    { id: "MN", state: "Manipur", value: 1000 },
    { id: "ML", state: "Meghalaya", value: 1000 },
    { id: "MZ", state: "Mizoram", value: 1000 },
    { id: "NL", state: "Nagaland", value: 1000 },
    { id: "OR", state: "Odisha", value: 800 },
    { id: "PB", state: "Punjab", value: 600 },
    { id: "RJ", state: "Rajasthan", value: 480 },
    { id: "SK", state: "Sikkim", value: 800 },
    { id: "TN", state: "Tamil Nadu", value: 2800 },
    { id: "TG", state: "Telangana", value: 1800 },
    { id: "TR", state: "Tripura", value: 1200 },
    { id: "UT", state: "Uttarakhand", value: 900 },
    { id: "UP", state: "Uttar Pradesh", value: 900 },
    { id: "WB", state: "West Bengal", value: 1100 },
    { id: "AN", state: "Andaman and Nicobar Islands", value: 600 },
    { id: "CH", state: "Chandigarh", value: 600 },
    { id: "DN", state: "Dadra and Nagar Haveli", value: 200 },
    { id: "DD", state: "Daman and Diu", value: 400 },
    { id: "DL", state: "Delhi", value: 1200 },
    { id: "JK", state: "Jammu and Kashmir", value: 1000 },
    { id: "LA", state: "Ladakh", value: 800 },
    { id: "LD", state: "Lakshadweep", value: 1200 },
    { id: "PY", state: "Puducherry", value: 800 },
  ];
};

function Map() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getHeatMapData());
  const [demand, setDemand] = useState(getDemandData());

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
  };

  const demandData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: demand.reduce((max, item) => (item.value > max ? item.value : max), 0),
  };

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  const onChangeButtonClick = () => {
    setData(getHeatMapData());
  };

  return (
    <div id="map">
      <h1 className="no-margin center">Crop Distribution</h1>
      <div className="legend-container">
        <div>Coffee Plantations In India</div>
        <div>Coffee Demand In India</div>
      </div>
      <div className="full-width-height map-container">
        <ReactTooltip>{tooltipContent}</ReactTooltip>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={600}
          height={220}
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const current = data.find((s) => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={600}
          height={220}
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const current = demand.find((s) => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div className="legend-container">
        <LinearGradient data={gradientData} />
        <LinearGradient data={gradientData} />
      </div>
    </div>
  );
}

export default Map;
