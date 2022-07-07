import busboy from 'busboy';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method == 'POST') {
    try {
      const bb = busboy({
        headers: req.headers,
      });

      bb.on('file', (_, file, info) => {
        const fileName = info.filename;
        const filePath = `./videos/${fileName}`;

        const stream = fs.createWriteStream(filePath);
        console.log(filePath);

        file.pipe(stream);
      });
      bb.on('close', () => {
        res.writeHead(200, { Connection: 'close' });
        res.end(`That's the end`);
      });

      req.pipe(bb);
    } catch (e) {
      res.status(500).json({
        message: e.message,
      });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
