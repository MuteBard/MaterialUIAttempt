import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';


function Header(props){
  return(
    <AppBar position="fixed">
      <ToolBar>
        Arc Development
      </ToolBar>
    </AppBar>
  )
}

export default Header
