import React from "react";
import { Toolbar, Typography } from "@material-ui/core";

const Navbar = props => {
  return (
    <React.Fragment>
      <Toolbar style={{ background: "black" }}>
        <Typography variant="h3" style={{ color: "lightgrey", margin: "auto" }}>
          Broadway Show Recommender
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
};

export default Navbar;
