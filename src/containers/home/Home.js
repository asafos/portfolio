import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Grid from "@material-ui/core/es/Grid/Grid";
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../../assets/images/user.png'
import Fade from "@material-ui/core/Fade";

const styles = {
  name: {
    color: '#cacaca',
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 16
  },
  jobTitle: {
    color: '#848484',
    margin: 16
  }
};

let globalAnimatingStep = 0;

class App extends Component {

  state = {
    animatingStep: globalAnimatingStep
  };

  componentDidMount() {
    this.animationsInterval = setInterval(() => {
      if (this.state.animatingStep > 10) {
        clearInterval(this.animationsInterval)
      }
      this.setState(({animatingStep}) => {
        globalAnimatingStep = animatingStep;
        return {animatingStep: ++animatingStep}
      })
    }, 500)
  }

  render() {
    const {classes} = this.props;
    const {animatingStep} = this.state;

    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item>
          <Grid container alignItems="center" direction="column" className={classes.container}>
            <Grid item>
              <Fade in={animatingStep >= 0} timeout={2000}>
                <Avatar src={avatar} sizes="100" className={classes.avatar}/>
              </Fade>
            </Grid>
            <Grid item>
              <Fade in={animatingStep >= 1} timeout={2000}>
                <Typography variant="h2" className={classes.name}>
                  Asaf Yehezkel
                </Typography>
              </Fade>
            </Grid>
            <Grid item>
              <Fade in={animatingStep >= 2} timeout={2000}>
                <Typography variant="subtitle1" className={classes.jobTitle}>
                  Full Stack Web and Mobile Developer
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({app}) => ({app});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
