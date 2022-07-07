import {
  Avatar,
  Badge,
  Button,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import styles from '../styles/Sidebar.module.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function Sidebar() {
  const [expanded, setExpanded] = React.useState(false);

  const handleSidebar = (e) => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={styles.sidebar}
      style={{
        width: expanded ? '20ch' : '6ch',
      }}
    >
      <div className={styles.sidebar__header}>
        <IconButton onClick={handleSidebar}>
          {expanded ? (
            <MenuOpenIcon color="secondary" sx={{ fontSize: 30 }} />
          ) : (
            <MenuIcon color="secondary" sx={{ fontSize: 30 }} />
          )}
        </IconButton>
      </div>
      {expanded ? (
        <div className={styles.sidebar__expanded}>
          <div className={styles.sidebar__expandedPrimary}>
            <Button color="secondary">
              <HomeOutlinedIcon color="primary" sx={{ fontSize: 30 }} />
              &nbsp; Home
            </Button>
            <Button color="secondary">
              <ExploreOutlinedIcon color="secondary" sx={{ fontSize: 30 }} />
              &nbsp; Explore
            </Button>
            <Button color="secondary">
              <ElectricBoltIcon color="secondary" sx={{ fontSize: 30 }} />
              &nbsp; Quicks
            </Button>
            <Button color="secondary">
              <SubscriptionsOutlinedIcon
                color="secondary"
                sx={{ fontSize: 30 }}
              />
              &nbsp; Subscriptions
            </Button>
            <Button color="secondary">
              <HistoryOutlinedIcon color="secondary" sx={{ fontSize: 30 }} />
              &nbsp; History
            </Button>
            <Button color="secondary">
              <WatchLaterOutlinedIcon color="secondary" sx={{ fontSize: 30 }} />
              &nbsp; Watch Later
            </Button>
          </div>
          <Divider
            sx={{
              backgroundColor: '#9fa2a8',
            }}
          />
          <div className={styles.sidebar__expandedSubscriptions}>
            <h4>Subscriptions</h4>
            <Button color="secondary">
              <Avatar color="secondary" sx={{ height: 30, width: 30 }} />
              &nbsp; Aris Toma
            </Button>
            <Button color="secondary">
              <Avatar color="secondary" sx={{ height: 30, width: 30 }} />
              &nbsp; Aris Toma
            </Button>
            <Button color="secondary">
              <Avatar color="secondary" sx={{ height: 30, width: 30 }} />
              &nbsp; Aris Toma
            </Button>
            <Button color="secondary">
              <Avatar color="secondary" sx={{ height: 30, width: 30 }} />
              &nbsp; Aris Toma
            </Button>
            <Button color="secondary">
              <Avatar color="secondary" sx={{ height: 30, width: 30 }} />
              &nbsp; Aris Toma
            </Button>
            <Button color="secondary">
              <Avatar color="secondary" sx={{ height: 30, width: 30 }} />
              &nbsp; Aris Toma
            </Button>
            <Button color="secondary">
              <Badge color="primary" variant="dot">
                <Avatar color="secondary" sx={{ height: 30, width: 30 }} />
              </Badge>
              &nbsp; Aris Toma
            </Button>
            <Button color="secondary">
              <AddCircleOutlineOutlinedIcon
                color="secondary"
                sx={{ height: 30, width: 30 }}
              />
              &nbsp; Browse all
            </Button>
          </div>
          <Divider
            sx={{
              backgroundColor: '#9fa2a8',
            }}
          />
          <div className={styles.sidebar__expandedCategories}>
            <h4>Categories</h4>
            <Button color="secondary">
              <SportsEsportsOutlinedIcon
                color="secondary"
                sx={{ fontSize: 30 }}
              />
              &nbsp; Gaming
            </Button>
            <Button color="secondary">
              <CellTowerOutlinedIcon color="secondary" sx={{ fontSize: 30 }} />
              &nbsp; Live
            </Button>
            <Button color="secondary">
              <LibraryMusicOutlinedIcon
                color="secondary"
                sx={{ fontSize: 30 }}
              />
              &nbsp; Music
            </Button>
          </div>
          <Divider
            sx={{
              backgroundColor: '#9fa2a8',
            }}
          />
          <div className={styles.sidebar__expandedMiscellaneous}>
            <Button color="secondary">
              <SettingsOutlinedIcon color="secondary" sx={{ fontSize: 30 }} />
              &nbsp; Settings
            </Button>
            <Button color="secondary">
              <FlagOutlinedIcon color="secondary" sx={{ fontSize: 30 }} />
              &nbsp; Reports
            </Button>
            <Button color="secondary">
              <HelpOutlineOutlinedIcon
                color="secondary"
                sx={{ fontSize: 30 }}
              />
              &nbsp; Help
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.sidebar__retracted}>
          <IconButton>
            <HomeIcon color="primary" sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton>
            <ExploreIcon color="secondary" sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton>
            <ElectricBoltIcon color="secondary" sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton>
            <SubscriptionsIcon color="secondary" sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton>
            <HistoryIcon color="secondary" sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton>
            <WatchLaterIcon color="secondary" sx={{ fontSize: 30 }} />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
