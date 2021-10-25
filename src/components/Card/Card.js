import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { element } = props;
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Devices card clicked");
    const redirect = () => {
      return history.push("/account/devices");
    };
    redirect();
  };

  return (
    <div className="card" onClick={handleClick}>
      <h1 style={{ padding: "10px" }}>{element.name}</h1>
    </div>
  );
};

export default Card;
