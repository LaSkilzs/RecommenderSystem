import React from "react";
import { Grid, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../assets/css/styles";
import List from "../components/Results";
import shows from "../assets/js/shows";
import TwoPair from "../assets/js/twoPair";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: []
    };
  }

  componentDidMount() {
    let object = TwoPair.count(shows);
    let favs = TwoPair.favedMovies(object);
    let pairs = TwoPair.pairings(favs);
    let poss = TwoPair.pairingsVs(shows, pairs);
    let sorted = TwoPair.sortResults(poss);
    console.log("sorted", sorted);
    this.setState({ recommendations: sorted });
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid item md={12} className={classes.main}>
        <Grid item md={8} className={classes.content}>
          <div>
            <Button variant="outlined">UpLoad Custom Data</Button>
            <Button variant="outlined">Upload Sample Data</Button>
            <Button variant="outlined">Analyze!</Button>
            <Button variant="outlined">Recommendation!</Button>
            <Button variant="outlined">Reset</Button>
          </div>
        </Grid>

        <Grid item md={3} className={classes.contentlist}>
          <List
            items={this.state.recommendations}
            title={"Recommendation Results"}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Main);
