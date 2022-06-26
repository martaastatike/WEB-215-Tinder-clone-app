
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import React from 'react';
import "./Header.css";


function Header() {
  return (
    <div className='header'>
      

      <IconButton>

        <PersonIcon fontSize='large' className='header_icon' />

      </IconButton>
  
  
    <img 
    className="header_logo"
    src="Tinder_logo_PNG3.png"
    alt=""
    />

    <IconButton>
      
      <ForumIcon  fontSize='large' className='header_icon'/>

    </IconButton>

  

    </div>
  )
}

export default Header