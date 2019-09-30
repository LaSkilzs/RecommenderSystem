import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Main from "../components/Main";
import Content from "../components/Content";

class Dashboard extends Component {
  render() {
    return (
      <Grid container>
        <Main />
        <Content />
      </Grid>
    );
  }
}
export default Dashboard;
