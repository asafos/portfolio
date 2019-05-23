import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Grid from "@material-ui/core/es/Grid/Grid";
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../../assets/images/user.png'
import Fade from "@material-ui/core/Fade";
import SplitText from 'react-pose-text';
import Button from "@material-ui/core/Button";

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

const charPoses = {
  exit: {
    opacity: 1,
    x: 0,
    y: 0,
    draggable: true
  },
  enter: {
    opacity: 1,
    x: () => (Math.random() - 0.5) * 200,
    y: () => (Math.random() - 0.5) * 200,
    draggable: true,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      delay: charInWordIndex * 30,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1
    })
  }
};

let globalAnimatingStep = 0;

class App extends Component {

  state = {
    animatingStep: globalAnimatingStep,
    startGame: false
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
    const {animatingStep, startGame} = this.state;

    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item>
          <Grid container alignItems="center" direction="column" className={classes.container}>
            <Grid item>
              <Fade in={!startGame && animatingStep >= 0} timeout={2000}>
                <Avatar src={avatar} sizes="100" className={classes.avatar}/>
              </Fade>
            </Grid>
            <Grid item style={{
              color: '#fff',
              fontSize: '3.75rem',
              // fontFamily: "PT Sans, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
              fontWeight: 300
            }}>
                <SplitText pose={startGame ? "enter" : 'exit'} charPoses={charPoses} wordPoses={{draggable: !startGame}} className={classes.name}>
                  {startGame ? 'A s a f Y e h e z k e l' : 'Asaf Yehezkel'}
                </SplitText>
              <Button onClick={() => this.setState({startGame: true})}>Click me</Button>
              {/*<Fade in={animatingStep >= 1} timeout={2000}>*/}
              {/*  <Typography variant="h2" className={classes.name}>*/}
              {/*    Asaf Yehezkel*/}
              {/*  </Typography>*/}
              {/*</Fade>*/}
            </Grid>
            <Grid item>
              <Fade in={!startGame && animatingStep >= 2} timeout={2000}>
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
