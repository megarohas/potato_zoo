import React from "react";
import Link from "next/link.js";
import axios from "axios";
import { Cookies } from "react-cookie";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import ImageDropZone from "./image_drop_zone.js";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import dynamic from "next/dynamic";
// let ImageDropZone = dynamic(() => import("react-image-dropzone"), {
//   ssr: false
// });

const cookies = new Cookies();

class PetConstructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: undefined,
      photo: undefined,
      name: undefined,
      type: ""
      // token: cookies.get("token") || null,
      // email: "",
      // password: "",
      // name: ""
    };
  }

  // <Link href="/secret">
  //   <a>Secret page</a>
  // </Link>

  createPet = async () => {
    const response = await axios.post("/api/create_pet", {
      name: this.state.name,
      bio: this.state.bio,
      type: this.state.type,
      owner_id: this.props.user.id,
      photo: this.state.photo
    });

    console.log("create_pet response", response);

    // this.setState({
    //   bio: undefined,
    //   photo: undefined,
    //   name: undefined,
    //   type: ""
    // });
    location.reload();
  };

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
            marginBottom: "30px",
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
            alignItems: "flex-start",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              flexGrow: "1",
              marginRight: "20px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "204px"
            }}
          >
            <ImageDropZone
              style={{ backgroundColor: "green" }}
              width={201}
              height={201}
              imagePicked={image => {
                console.log("image", image);
                console.log("image.image", image.image);
                let reader = new FileReader();
                reader.onload = () => {
                  let dataURL = reader.result;
                  this.setState({ photo: dataURL });
                  // console.log("dataURL", dataURL);
                };

                reader.readAsDataURL(image.file);
              }}
              showButton
              imageDefault={"/no-avatar.png"}
            />
            <FormControl variant="filled" style={{ width: "204px" }}>
              <InputLabel id="demo-simple-select-filled-label">
                Pet Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={this.state.type}
                onChange={e => {
                  // console.log(e.target.value);
                  this.setState({ type: e.target.value });
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"rabbit"}>Rabbit</MenuItem>
                <MenuItem value={"guinea pig"}>Guinea Pig</MenuItem>
                <MenuItem value={"dog"}>Dog</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
                <MenuItem value={"leshka"}>Leshka</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div
            style={{
              // width: "100%",
              // marginRight: "20px",
              // maxWidth: "600px",
              flexGrow: "40"
              // maxWidth: "9000"
            }}
          >
            <TextField
              style={{ width: "100%", margin: "0px 20px 20px 0px" }}
              id="filled-multiline-flexible"
              label="Name"
              value={this.state.name}
              // value={}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
              variant="filled"
            />

            <TextField
              style={{ width: "100%", margin: "0px 0px" }}
              id="outlined-multiline-static"
              label="Biography"
              multiline
              rows="11"
              defaultValue=""
              variant="filled"
              value={this.state.bio}
              // variant="outlined"
              onChange={e => {
                this.setState({ bio: e.target.value });
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            marginTop: "20px"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled={
              !(
                this.state.name &&
                this.state.bio &&
                this.state.type &&
                this.state.photo
              )
            }
            // disabled={false}
            onClick={() => {
              this.createPet();

              // cookies.remove("token");
              // Router.push("/");
            }}
          >
            {"Create new Pet"}
          </Button>
        </div>
      </div>
    );
  }
}

PetConstructor.defaultProps = {
  user: { id: -1 }
};

export default PetConstructor;
