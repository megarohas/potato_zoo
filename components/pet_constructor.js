import React from "react";
import Link from "next/link.js";
import axios from "axios";
import { Cookies } from "react-cookie";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import ImageDropZone from "./image_drop_zone.js";
// import dynamic from "next/dynamic";
// let ImageDropZone = dynamic(() => import("react-image-dropzone"), {
//   ssr: false
// });

const cookies = new Cookies();

class PetConstructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      photo: undefined,
      audio: undefined
      // token: cookies.get("token") || null,
      // email: "",
      // password: "",
      // name: ""
    };
  }

  // <Link href="/secret">
  //   <a>Secret page</a>
  // </Link>

  // onLoginClick = async () => {
  //   const response = await axios.post("/api/sign_up", {
  //     email: this.state.email,
  //     password: this.state.password,
  //     name: this.state.name
  //   });
  //
  //   // alert("Account was created");
  //   this.setState({ alert_is_open: true });
  //   setTimeout(() => {
  //     this.setState({ alert_is_open: false });
  //     this.props.button_action();
  //   }, 2000);
  // };

  render() {
    const imagePicked = image => console.log(image);
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
        <div
          style={{
            fontWeight: "600",
            marginBottom: "18px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "23px"
          }}
        >{`NEW PET INFO`}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ImageDropZone
            style={{ backgroundColor: "green" }}
            width={200}
            height={200}
            imagePicked={imagePicked}
            showButton
            imageDefault={
              "https://sun9-64.userapi.com/c630116/v630116375/35fa8/amcvlYluyh0.jpg?ava=1"
            }
          />
        </div>
      </div>
    );
  }
}

export default PetConstructor;
