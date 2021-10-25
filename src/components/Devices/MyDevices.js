import React from "react";
import DeviceCard from "./Device Card/DeviceCard";
// import { Button } from "@material-ui/core";
// import { useState } from "react";
import FormDialog from "./Modal";

const MyDevices = (props) => {
  return (
    <div align="left" style={{ paddingLeft: "100px" }}>
      <h1>My Devices</h1>

      <FormDialog />

      <DeviceCard />
    </div>
  );
};
export default MyDevices;
