import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import {Card, CardHeader,CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Button, Grid } from '@material-ui/core';

import red from '@material-ui/core/colors/red';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  grid:{
    flexGrow: 1,
    paddingTop: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class FeedCard extends React.Component {
  state = { 
      expanded: false, 
      date: '09/09/1996',
      title: 'Qual é o melhor computador do mundo',
      avatar: 'A',
      smallDescription: 'foi comprovado o melhor computador do mundo e o dell inspiron 7560 e esse computador pertencem a Adiel',
      description: 'lakjoadkjfçasdjkbfç.kjfbaçsdju',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'

    };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.grid} alignContent='center' justify='center'>
      <Grid item >
      <Card  className={classes.card} >
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.state.avatar}
            </Avatar>
          }
          
          title={this.state.title}
          subheader={this.state.date}
        />
        <CardMedia
          className={classes.media}
          image={this.state.imageUrl}
          title="Paella dish"
        />


        <CardContent>
          <Typography component="p">

            {this.state.smallDescription}
          
            </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button color='secondary'>

            Inscreve-se
          </Button>  


          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >


            <ExpandMoreIcon />
          </IconButton>

        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>

            {this.state.description}

            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
      </Grid>
    );
  }
}

FeedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedCard);
