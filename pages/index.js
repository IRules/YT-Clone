import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import HomeCard from '../components/HomeCard';
import styles from '../styles/Home.module.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const StyledTabs = styled((props) => (
  <Tabs
    variant="scrollable"
    scrollButtons
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: 'inherit',
    backgroundColor: '#ff0000',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

function Home() {
  const [value, setValue] = React.useState(0);

  const handleCategories = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__containerCategories}>
          <StyledTabs
            value={value}
            onChange={handleCategories}
            aria-label="styled tabs example"
          >
            <StyledTab label="Workflows" />
            <StyledTab label="Workflows" />
            <StyledTab label="Workflows" />
            <StyledTab label="Workflows" />
            <StyledTab label="Workflows" />
            <StyledTab label="Datasets" />
            <StyledTab label="Connections" />
          </StyledTabs>
        </div>
        <div className={styles.home__containerVideos}>
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
