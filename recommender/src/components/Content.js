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
      possViewers: []
    };
  }

  componentDidMount() {
    let object = TwoPair.count(shows);
    let favs = TwoPair.favedMovies(object);
    let pairs = TwoPair.pairings(favs);
    pairs = pairs.map(word => word.join(" "));
    this.setState({
      allmovies: object,
      morethanfive: favs,
      allpairs: pairs
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid item md={12} className={classes.bottom}>
        {[
          { title: "All Movies", data: this.state.allmovies },
          {
            title: "Shows Viewed by >= 5 Customers",
            data: this.state.morethanfive
          },
          { title: "All Possible Pairs", data: this.state.allpairs }
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
