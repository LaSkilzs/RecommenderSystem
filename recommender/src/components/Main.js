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
      recommendations: [],
      showResults: false
    };
  }

  handleAnalyze = () => {
    let object = TwoPair.count(shows);
    let favs = TwoPair.favedMovies(object);
    let pairs = TwoPair.pairings(favs);
    let poss = TwoPair.pairingsVs(shows, pairs);
    let sorted = TwoPair.sortResults(poss);
    let backwards = [];
    sorted = sorted.map(word => word.split(",").join(" "));
    sorted.forEach(pair => backwards.unshift(pair));
    this.setState({
      recommendations: backwards,
      showResults: !this.state.showResults
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid item md={12} className={classes.main}>
        <Grid item md={8} className={classes.content}>
          <div style={{}}>
            <Button
              variant="outlined"
              style={{
                padding: "0.8rem",
                background: "lightgrey",
                fontWeight: "bold"
              }}
            >
              UpLoad Custom Data
            </Button>
            <Button
              variant="outlined"
              style={{
                padding: "0.8rem",
                background: "lightgrey",
                fontWeight: "bold"
              }}
              onClick={() => this.props.handleContent()}
            >
              Upload Sample Data
            </Button>
            <Button
              variant="outlined"
              style={{
                padding: "0.8rem",
                background: "lightgrey",
                fontWeight: "bold"
              }}
              onClick={() => this.handleAnalyze()}
            >
              Analyze!
            </Button>
            <Button
              variant="outlined"
              style={{
                padding: "0.8rem",
                background: "lightgrey",
                fontWeight: "bold"
              }}
            >
              Reset
            </Button>
          </div>
        </Grid>

        <Grid
          item
          md={8}
          className={classes.contentlist}
          style={{ display: this.state.showResults ? "" : "none" }}
        >
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
