import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Grid from "@material-ui/core/es/Grid/Grid";
import {withStyles} from '@material-ui/core/styles';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from '../home/Home';
import Projects from "../projects/Projects";

const styles = {
    container: {
        marginTop: 80,
    },
    header: {
        backgroundColor: 'transparent',
        boxShadow: 'unset'
    }
};

class App extends Component {

    render() {
        const {classes, history} = this.props;
        return (
            <div>
                <Header history={history}/>
                <Grid container justify="center" className={classes.container}>
                    <Grid item>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/projects" exact component={Projects}/>
                        </Switch>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({app}) => ({app});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
