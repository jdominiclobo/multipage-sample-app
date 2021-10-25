import { Grid } from "@material-ui/core";
import React from "react";
import DiagnosticCard from "./DiagnosticCard";
import GoogleMap from "./GoogleMap";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const DeviceDiagnostics = () => {
  return (
    <div align="left" style={{ paddingLeft: "100px" }}>
      <h1>Device Diagnostics</h1>
      <Grid container>
        <Grid xs={5} className="container">
          <DiagnosticCard />
          <DiagnosticCard />
        </Grid>
        <Grid xs={7} className="container">
          <GoogleMap />
        </Grid>
      </Grid>
    </div>
  );
};
export default DeviceDiagnostics;
