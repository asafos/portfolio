import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/es/Grid/Grid";
import { withStyles } from '@material-ui/core/styles';
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
  },
  startGameButton: {
    color: '#848484',
    marginTop: '4rem'
  }
};

const letters = [];

const charPoses = {
  exit: {
    x: 0,
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      delay: charInWordIndex * 30,
    })
  },
  enter: {
    x: ({ charIndex, element }) => {
      const x = (Math.random() - 0.5) * 200;
      letters[charIndex] = element;
      return x;
    },
    y: () => (Math.random() - 0.5) * 200,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      delay: charInWordIndex * 30,
    })
  },
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
      this.setState(({ animatingStep }) => {
        globalAnimatingStep = animatingStep;
        return { animatingStep: ++animatingStep }
      })
    }, 500)
  }

  render() {
    const { classes } = this.props;
    const { animatingStep, startGame } = this.state;

    return (
      <Grid container justify="center" className={classes.container}>
        <Grid item>
          <Grid container alignItems="center" direction="column" className={classes.container}>
            <Grid item>
              <Fade in={!startGame && animatingStep >= 0} timeout={startGame ? 500 : 2000}>
                <Avatar src={avatar} sizes="100" className={classes.avatar} />
              </Fade>

            </Grid>
            <Grid item style={{
              color: '#fff',
              fontSize: '3.75rem',
              // fontFamily: "PT Sans, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
              fontWeight: 300
            }}>
              <Fade in={animatingStep >= 1} timeout={2000}>
                <div ref={e => this.nameContainer = e} style={{ border: startGame ? '1px solid white' : undefined, letterSpacing: '-8px', padding: '1rem', userSelect: 'none' }}                    >
                  <SplitText
                    onDragEnd={() => {
                      if(!startGame) return;
                      const { x, y, width, height } = this.nameContainer.getBoundingClientRect();
                      const OFFSET = 10;
                      let res = [...letters]
                        .sort((a, b) => a.getBoundingClientRect().x - b.getBoundingClientRect().x)
                        .map((a) => {
                          const current = a.getBoundingClientRect()
                          if (current.x > x - OFFSET && current.y > y - OFFSET && current.x < x + width + OFFSET && current.y < y + height + OFFSET) {
                            return a.textContent
                          }
                          return ''
                        })
                        .join('')
                      if (res === 'AsafYehezkel') {
                        alert('Great job')
                        this.setState({ startGame: false })
                      }
                    }}
                    initialPose={"exit"}
                    pose={startGame ? "enter" : 'exit'}
                    charPoses={charPoses}
                    wordPoses={{ draggable: true }}
                    className={classes.name}>
                    {'A s a f   Y e h e z k e l'}
                  </SplitText>
                </div>
              </Fade>
            </Grid>
            <Grid item>
              <Fade in={!startGame && animatingStep >= 2} timeout={startGame ? 500 : 2000}>
                <Typography variant="subtitle1" className={classes.jobTitle}>
                  Full Stack Web and Mobile Developer
                </Typography>
              </Fade>
            </Grid>
            <Fade in={animatingStep >= 5} timeout={startGame ? 500 : 2000}>
              <Button onClick={() => this.setState({ startGame: !startGame })} className={classes.startGameButton}>
                {startGame ? 'Give up?' : 'Too boring?'}
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ app }) => ({ app });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
