import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Pet = ({ pet }) => {
  // name: "1"
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
        width: "calc(100% - 40px)",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      <div>
        <img
          src={pet.photo}
          style={{
            cursor: "pointer",
            height: "200px",
            width: "200px",
            borderRadius: "5px"
          }}
          onClick={({ type }) => {
            // <MenuItem value={"rabbit"}>Rabbit</MenuItem>
            // <MenuItem value={"guinea pig"}>Guinea Pig</MenuItem>
            // <MenuItem value={"dog"}>Dog</MenuItem>
            // <MenuItem value={"other"}>Other</MenuItem>
            // <MenuItem value={"leshka"}>Leshka</MenuItem>
            let path = "/other.mp3";

            if (type == "rabbit") path = "/rabbit.mp3";
            if (type == "guinea pig") path = "/guinea_pig.mp3";
            if (type == "dog") path = "/dog.mp3";
            if (type == "leshka") path = "/leshka.mp3";
            if (type == "other") path = "/other.mp3";

            path = "/cat.mp3";

            let audio = new Audio(path);
            audio.play();
          }}
        />
      </div>
      <div
        style={{
          minWidth: "220px",
          flexGrow: "1",
          marginLeft: "20px",
          marginTop: "20px"
        }}
      >
        <div style={{ fontWeight: "400" }}>{`Name: ${pet.name}`}</div>
        <div style={{ fontWeight: "400" }}>{`ID: ${pet.id}`}</div>
        <div style={{ fontWeight: "400" }}>{`Type: ${pet.type}`}</div>
        <div style={{ fontWeight: "400" }}>{`Biography: ${pet.bio}`}</div>
      </div>
    </div>
  );
};

export default Pet;
