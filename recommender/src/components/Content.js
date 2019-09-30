import React from "react";
import List from "../components/Results";
import { Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../assets/css/styles";
import shows from "../assets/js/shows";
import TwoPair from "../assets/js/twoPair";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allmovies: [],
      morethanfive: [],
      allpairs: [],
      possViewers: [],
      items: ["item1", "item2", "item3", "item4"]
    };
  }

  componentDidMount() {
    let object = TwoPair.count(shows);
    let favs = TwoPair.favedMovies(object);
    let pairs = TwoPair.pairings(favs);
    let poss = TwoPair.pairingsVs(shows, pairs);
    console.log("object", object);
    console.log("favs", favs);
    console.log("pairs", pairs);
    console.log("poss", poss);
    this.setState({
      allmovies: object,
      morethanfive: favs,
      allpairs: pairs,
      possViewers: poss
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid item md={12} className={classes.bottom}>
        {[
          { title: "All Movies", data: this.state.allmovies },
          {
            title: "Movies Viewed Shows >= 5 Customers",
            data: this.state.morethanfive
          },
          { title: "All Possible Pairs", data: this.state.allpairs },
          {
            title: "Possible Pairs by Viewers >= 4",
            data: this.state.possViewers
          }
        ].map((num, idx) => (
          <Grid item md={3} className={classes.bottomlist} key={idx}>
            <List title={num.title} items={num.data} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Content);
