import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Grid from "@material-ui/core/es/Grid/Grid";
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DogWebImage from '../../../assets/images/dog-web-screenshot.png'
import Fade from "@material-ui/core/Fade";

const styles = {
  title: {
    color: '#cacaca',
    marginBottom: '4rem'
  },
  card: {
    maxWidth: 345,
    margin: '2rem',
    backgroundColor: '#1d1d1d',
    boxShadow: '0px 0px 7px 1px'
  },
  // media: {
  //   // ⚠️ object-fit is not supported by IE 11.
  //   objectFit: 'cover',
  // },
  projectTitle: {
    color: '#cacaca',
  },
  description: {
    color: '#cacaca',
    whiteSpace: 'pre-line'
  }
};

const projects = [
  {
    title: 'Dog Web',
    description: `
    Website for posting stories or articles, similar to Medium.
    Including a local registration mechanism using Passport.js.
    Image uploading to personal AWS S3 bucket.
         
    Tech used:
    React, Redux, NodeJS, MongoDB, AWS
    `,
    image: DogWebImage,
    url: 'https://dog-web.herokuapp.com/'
  },
];

class Projects extends Component {

  renderProject = ({image, title, description, url}, index) => {
    const {classes} = this.props;
    return (
      <Grid item key={index}>
        <Fade timeout={500 + (index * 400)} in>
          <Card className={classes.card}>
            <CardActionArea>
              <a href={url} target="_blank">
              {image && <CardMedia
                component="img"
                alt="Contemplative Reptile"
                className={classes.media}
                height="140"
                image={image}
                title="Contemplative Reptile"
              />}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.projectTitle}>
                  {title}
                </Typography>
                <Typography component="p" className={classes.description}>
                  {description}
                </Typography>
              </CardContent>
              </a>

            </CardActionArea>
          </Card>
        </Fade>
      </Grid>
    );
  };

  render() {
    const {classes} = this.props;
    return (
      <Grid container justify="center" alignItems="center" direction="column" className={classes.container}>
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            Projects
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems="center" className={classes.container}>
          {projects.map(this.renderProject)}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({app}) => ({app});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Projects));
