import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Avatar, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { debounce } from 'lodash';

function HomeCard() {
  const [hover, setHover] = React.useState(false);
  const verified = false;
  const handleHandleEnter = debounce(() => setHover(true), 500);
  const handleMouseLeave = () => {
    setHover(false);
    handleHandleEnter.cancel();
  };
  return (
    <a href="">
      <div className={styles.homeCard}>
        <div className={styles.homeCard__content}>
          <div
            className={styles.homeCard__contentImage}
            onMouseEnter={handleHandleEnter}
            onMouseLeave={handleMouseLeave}
          >
            {hover ? (
              <video
                src={`/api/streamVideo`}
                width={290}
                height={180}
                autoPlay
                muted
                controls
                controlsList="nodownload"
                disablePictureInPicture
                style={{ zIndex: 999999 }}
              />
            ) : (
              <Image
                style={{ zIndex: 0 }}
                src="/assets/hq720.jpg"
                alt="Video"
                width={290}
                height={180}
                className={styles.homeCard__contentImage}
              />
            )}
          </div>
          <div className={styles.homeCard__contentInfo}>
            <Tooltip title="Delete">
              <Avatar variant="rounded" />
            </Tooltip>

            <div className={styles.homeCard__contentInfoText}>
              <Tooltip title="Delete">
                <div className={styles.homeCard__contentInfoTextTitle}>
                  <span>Titlesssssssssssssssssssssssssss</span>
                </div>
              </Tooltip>
              <div className={styles.homeCard__contentInfoTextDescription}>
                <Tooltip title="Delete">
                  <span
                    className={styles.homeCard__contentInfoTextDescriptionStats}
                  >
                    {hover}
                    La povesti cu Jimmy
                  </span>
                </Tooltip>
                {verified ? <CheckCircleIcon sx={{ fontSize: 16 }} /> : null}
                &nbsp;&nbsp;
                <span
                  className={styles.homeCard__contentInfoTextDescriptionStats}
                >
                  1.3M views | 1 years ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default HomeCard;
