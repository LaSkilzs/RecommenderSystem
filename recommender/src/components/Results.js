import React from "react";
import { List, ListItem, ListSubheader, Dialog } from "@material-ui/core";
const Results = props => {
  console.log("results", props);
  let list;

  if (
    props.title === "Recommendation Results" ||
    props.title === "All Possible Pairs"
  ) {
    list = Object.values(props.items) || [];
  } else {
    list = Object.keys(props.items) || [];
  }

  return (
    <React.Fragment>
      <ListSubheader
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          background: "lightgrey"
        }}
      >
        {props.title}
      </ListSubheader>
      <List style={{ maxHeight: "10rem", overflow: "auto" }}>
        {list.map((item, idx) => {
          return <ListItem key={idx}>{idx + 1 + ". " + item}</ListItem>;
        })}
      </List>
    </React.Fragment>
  );
};

export default Results;
