import fs from 'fs';

export default async function handler(req, res) {
  if (req.method == 'GET') {
    const CHUNK_SIZE_IN_BYTES = 1000000;

    const range = req.headers.range;

    if (!range) {
      return res.status(400).send('Rang must be provided');
    }

    const videoId = req.query.videoId;

    const videoPath = `./videos/${videoId}.mp4`;

    const videoSizeInBytes = fs.statSync(videoPath).size;

    const chunkStart = Number(range.replace(/\D/g, ''));

    const chunkEnd = Math.min(
      chunkStart + CHUNK_SIZE_IN_BYTES,
      videoSizeInBytes - 1
    );

    const contentLength = chunkEnd - chunkStart + 1;

    const headers = {
      'Content-Range': `bytes ${chunkStart}-${chunkEnd}/${videoSizeInBytes}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, {
      start: chunkStart,
      end: chunkEnd,
    });

    videoStream.pipe(res);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
