import React from "react";

const Potato = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img style={{ width: "76px", height: "68px" }} src={`/potato.png`} />
    </div>
  );
};

export default Potato;
