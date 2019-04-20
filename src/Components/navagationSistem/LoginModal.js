import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class LoginModal extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const stu = {
      m:{
      display: 'flex',

      flexDirection: 'column',

      alignItems: 'center',
      
      justifyContent: 'center'
    }}
    return (
      <div>
        <Button variant="outlined" color="inherit" onClick={this.handleClickOpen}>
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle  id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <div style={stu.m}>
            <img src='https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png' 
            width='150px'
            height='150px'
            alt='computer'></img>
            </div>
            
            <DialogContentText>

              Por favor insira seus dados para efetuar o login

            </DialogContentText>
            
            
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Endereço de email"
              type="email"
              variant ='outlined'
              color ='secondary'
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="senha"
              label="Senha"
              type="password"
              variant ='outlined'
              fullWidth
            />


          </DialogContent>

          <DialogActions>
          
            <Button onClick={this.handleClose} color="secondary">
              Resgistrar
            </Button>

            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}
