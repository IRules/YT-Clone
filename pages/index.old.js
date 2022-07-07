import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit() {
    const data = new FormData();

    if (!file) return;

    setSubmitting(true);

    data.append('file', file);

    try {
      await axios
        .post('/api/uploadVideo', data, {
          onUploadProgress: (progressEvent) => {
            const percentComplete = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );

            setProgress(percentComplete);
          },
        })
        .then((e) => {
          setError(e.status);
        });
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
      setProgress(0);
    }
  }

  function handleSetFile(event) {
    const files = event.target.files;
    console.log(files);

    if (files?.length) {
      setFile(files[0]);
    }
  }
  return (
    <div>
      {error}
      {submitting && <p>{progress}%</p>}
      <form action="POST">
        <div>
          <label htmlFor="file">File</label>
          <input type="file" id="file" onChange={handleSetFile} />
        </div>
      </form>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Upload
      </Button>
      <br />
      <br />
      <br />
      <div className={styles.videoPlayer}>
        <video
          src={`/api/streamVideo?videoId=test-video`}
          width="800px"
          height="auto"
          id="video-player"
          className={styles.videoPlayer}
        />
      </div>
    </div>
  );
}
