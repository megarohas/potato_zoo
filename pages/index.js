import React from "react";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/link.js";
import axios from "axios";
import { Cookies } from "react-cookie";
import LoginForm from "../components/login_form.js";
import SignupForm from "../components/signup_form.js";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(255, 238, 0, 1)"
    }
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_form_id: 0
    };
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            backgroundImage: "url(/bg.jpg)"
          }}
        >
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"
              rel="stylesheet"
            />
          </Head>

          {this.state.show_form_id === 0 && (
            <LoginForm
              button_action={() => {
                this.setState({ show_form_id: 1 });
              }}
              button_text={"i don't have an account"}
            />
          )}
          {this.state.show_form_id === 1 && (
            <SignupForm
              button_action={() => {
                this.setState({ show_form_id: 0 });
              }}
              button_text={"i have an account"}
            />
          )}
        </div>
      </ThemeProvider>
    );
  }
}

export default Home;
