import React, { Component } from 'react';


import {AppBar, 
      Toolbar, 
      Typography} 
      from '@material-ui/core';


import SideBar from './SideBar'
import LoginModal from './LoginModal'



class NavBar extends Component {
  render() {
    return (
      <div>
       <AppBar position="static" color= 'secondary' >
        <Toolbar>
          <SideBar></SideBar>
          <Typography  style={{flexGrow : 1}} variant="h6" color="inherit" >
            Social Media Sistem
          </Typography>
          <LoginModal></LoginModal>
        </Toolbar>
      </AppBar>
       
      </div>
    );
  }
}

export default NavBar;
