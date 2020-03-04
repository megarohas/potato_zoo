import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Pet = ({ pet }) => {
  //   name: "1"
  // bio: "1"
  // type: "guinea pig"
  // owner_id: "0"
  // photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQA"

  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.65)",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px 0px",
        width: "calc(100% - 40px)"
      }}
    >
      <img src={pet.photo} style={{ height: "200px", width: "200px" }} />
      <h3 style={{ fontWeight: "400" }}>{`Name: ${pet.name}`}</h3>
      <h3 style={{ fontWeight: "400" }}>{`Type: ${pet.type}`}</h3>
      <h3 style={{ fontWeight: "400" }}>{`Biography: ${pet.bio}`}</h3>
    </div>
  );
};

export default Pet;
