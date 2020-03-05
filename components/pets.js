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
import Pet from "./pet.js";
// import dynamic from "next/dynamic";
// let ImageDropZone = dynamic(() => import("react-image-dropzone"), {
//   ssr: false
// });

const cookies = new Cookies();

class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    this.getPets();
  }

  getPets = async () => {
    console.log("this.props.user.id", this.props.user.id);
    const response = await axios.post("/api/get_user_pets", {
      user_id: this.props.user.id
    });
    console.log("get_pets response", response);
    this.setState({ pets: [...response.data.pets] });
  };

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
        >{`PETS`}</div>
        {this.state.pets.length > 0 ? (
          this.state.pets.map(pet => <Pet pet={pet} />)
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              style={{
                width: "100px",
                height: "100px"
              }}
              src={`/spinner.svg`}
            />
          </div>
        )}
      </div>
    );
  }
}

Pets.defaultProps = {
  user: { id: -1 }
};

export default Pets;
