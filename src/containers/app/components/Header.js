import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Grid from "@material-ui/core/es/Grid/Grid";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Button from "@material-ui/core/es/Button/Button";
import Typography from "@material-ui/core/es/Typography/Typography";
import {Link, Route, Switch} from "react-router-dom";

const styles = {
  header: {
    // backgroundColor: 'transparent',
    background: 'linear-gradient(to bottom, #2f2f2f, transparent) no-repeat fixed',
    zIndex: 2,
    boxShadow: 'unset'
  },
  link: {
    textDecoration: 'unset',
    fontSize: '0.875rem',
    fontWeight: 500,
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    marginLeft: '1rem'
  }
};

class Header extends Component {

  render() {
    const {classes, history} = this.props;
    return (
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <div style={{flex: 1}}>
          <Link to="/" style={{width: '4rem'}}>
            <Typography variant="h5" color="inherit" style={{width: '4rem'}}>
              Home
            </Typography>
          </Link>
          </div>
          <Link to="/projects" className={classes.link}>
            <Typography variant="subtitle1" color="inherit">
              Projects
            </Typography>
          </Link>
          <Link to="" className={classes.link}>
            <Typography variant="subtitle1" color="inherit">
              Contact Me
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header)
