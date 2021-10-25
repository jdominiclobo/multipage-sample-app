import React from "react";
import "./DiagnosticCard.css";

import ojus from "./ojus-power.jpg";

const DiagnosticCard = () => {
  return (
    <div style={{ alignContent: "center" }} className="dard">
      {/* <h1 style={{ paddingLeft: "50px" }}>Machine</h1> */}
      <img
        alt="appImage"
        src={ojus}
        width="100%"
        height="100%"
        // style={{ padding: "0px 0px 100px 40px" }}
      />
    </div>
  );
};
export default DiagnosticCard;
