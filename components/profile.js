import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Profile = ({ user }) => {
  let project_link = (
    <a
      style={{ margin: "0px 10px", wordBreak: "break-all" }}
      href="https://github.com/megarohas/keyboard_handwriting_authorizator"
      target="_blank"
    >{` keyboard_handwriting_authorizator `}</a>
  );
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
      <h3
        style={{ fontWeight: "400" }}
      >{`Name of the current user: ${user.name}`}</h3>
      <h3
        style={{ fontWeight: "400" }}
      >{`Email of the current user: ${user.email}`}</h3>
    </div>
  );
};

export default Profile;
