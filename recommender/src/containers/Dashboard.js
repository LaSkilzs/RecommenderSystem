import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Main from "../components/Main";
import Content from "../components/Content";

class Dashboard extends Component {
  state = {
    showContent: false
  };

  handleContent = () => this.setState({ showContent: !this.state.showContent });
  render() {
    return (
      <Grid container spacing={4}>
        <Main handleContent={this.handleContent} />
        {this.state.showContent ? <Content /> : null}
      </Grid>
    );
  }
}
export default Dashboard;
