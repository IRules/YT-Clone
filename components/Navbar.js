import React from 'react';
import styles from '../styles/Navbar.module.css';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { Button, IconButton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__search}>
        <SearchOutlinedIcon color="secondary" sx={{ fontSize: 25 }} />
        <input type="text" placeholder="Search" />
        <IconButton color="secondary">
          <KeyboardVoiceIcon color="secondary" sx={{ fontSize: 25 }} />
        </IconButton>
      </div>
      <div className={styles.navbar__controls}>
        <IconButton color="secondary">
          <VideoCallOutlinedIcon color="secondary" sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton color="secondary">
          <NotificationsNoneOutlinedIcon
            color="secondary"
            sx={{ fontSize: 30 }}
          />
        </IconButton>
        <IconButton color="secondary" className={styles.navbar__mobile}>
          <SearchOutlinedIcon color="secondary" sx={{ fontSize: 30 }} />
        </IconButton>
        <Button color="primary" variant="contained">
          <AccountCircleOutlinedIcon color="secondary" sx={{ fontSize: 20 }} />
          &nbsp; Sign in
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
