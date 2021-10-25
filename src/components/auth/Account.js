import React from "react";
import Card from "../Card/Card";
const elements = [
  {
    id: 1,
    name: "My Devices",
  },
  // {
  //   id: 2,
  //   name: "EndPoint1",
  // },
  // {
  //   id: 3,
  //   name: "EndPoint2",
  // },
];

const Account = () => {
  return (
    <div align="center">
      <h1>User Dashboard</h1>
      <div style={{ display: "flex", flexDirection: "row", padding: "100px" }}>
        {elements.map((element, index) => {
          return (
            <div key={`${index}_id`}>
              <Card element={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Account;
