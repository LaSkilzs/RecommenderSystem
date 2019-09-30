import React from "react";
import { List, ListItem, ListSubheader } from "@material-ui/core";
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
    <List>
      <ListSubheader>{props.title}</ListSubheader>
      {list.map(item => {
        return <ListItem key={item}>{item}</ListItem>;
      })}
    </List>
  );
};

export default Results;
