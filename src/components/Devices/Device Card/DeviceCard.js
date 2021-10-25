import React from "react";
import { useHistory } from "react-router-dom";
import "./DeviceCard.css";

import { Button } from "@material-ui/core";

import ojus from "./ojus-power.jpg";

const Card = (props) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Selecting a device");
    const redirect = () => {
      return history.push("/account/devices/device");
    };
    redirect();
  };

  return (
    <div
      className="bard"
      style={{ alignContent: "center" }}
      onClick={handleClick}
    >
      <h1>Device</h1>
      <h2>Description</h2>
      <div style={{ alignContent: "center" }}>
        <img alt="appImage" src={ojus} width="300px" height="180px" />
      </div>
      <Button style={{ padding: "10px" }}>Open Diagnostics</Button>
    </div>
  );
};

export default Card;
