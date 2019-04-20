import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import LinearBuffer from './LinearBuffer'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    open: false
  
  };

  toggleDrawer = (open) => () => {
    this.setState({
      open : open,
      name: 'Adiel Andrade',
      nivel: '3',
      imgProfileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6CxeYaMjlmQQohYAJ5f5y_fJO4m-ILONDU-ypPnntuj8Ccy2',
      expHold: '100',
      expNeed: '200',

    });
  };

  render() {
    const { classes } = this.props;
    const stu = {
      m:{
      display: 'flex',

      flexDirection: 'column',

      alignItems: 'center',
      paddingTop : '20%',
      justifyContent: 'center'
    }}

    const publico = (
      <div className={classes.list}>
      <div style={stu.m}>
      <img src={this.state.imgProfileUrl} 
          alt="Imagem Perfil" 
          height="80" 
          width="80"
          style={{paddingBottom: '20%'}}
          >
          </img>
          <b>{this.state.name}</b>
          <LinearBuffer></LinearBuffer>
          <i>({this.state.expHold}/{this.state.expNeed})</i>
          <b>NIVEL {this.state.nivel}</b>
      </div>
      
    
        <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Meu Perfil'} />
            </ListItem>

            <ListItem button>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Feed'} />
          </ListItem>

            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Força tarefa'} />
            </ListItem>

            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Eventos'} />
            </ListItem>

        </List>

        </div>

    );

    const privado = (
        <div>
        <Divider />
        <List>
          <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Lista de Usuarios'} />
            </ListItem>

             <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Lista de Instituiçoes'} />
            </ListItem>
        </List>
      </div>
    );

    

    return (
      <div>
        <IconButton  onClick={this.toggleDrawer(true)} color="inherit" aria-label="Menu">
            <MenuIcon />
        </IconButton>
    
        
        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {publico}
            {privado}
           
          </div>
        </Drawer>
       
       
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SideBar = withStyles(styles)(TemporaryDrawer)

export default SideBar;
