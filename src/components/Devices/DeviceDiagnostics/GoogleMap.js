import React from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  position: "relative",
  width: "1000px",
  height: "700px",
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        containerStyle={containerStyle}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: "AIzaSyDLQRt6rht2xQPa7ZepQW4JnzQ2bgQN6jg",
})(MapContainer);
