import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/es/Grid/Grid";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../../assets/images/user.png'

const styles = {
    name: {
        color: 'white',
    },
    avatar: {
        width: 100,
        height: 100,
        margin: 16
    },
    jobTitle: {
        color: 'white',
        margin: 16
    }
};

class App extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center" className={classes.container}>
                <Grid item>
                    <Grid container alignItems="center" direction="column" className={classes.container}>
                        <Grid item>
                            <Avatar src={avatar} sizes="100" className={classes.avatar}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2" className={classes.name}>
                                Asaf Yehezkel
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" className={classes.jobTitle}>
                                Full Stack Web and Mobile Developer
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = ({ app }) => ({ app });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
