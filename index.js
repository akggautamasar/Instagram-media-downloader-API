import express from 'express';
import cors from 'cors';
import instagramRouter from './routes/downloader.js';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Instagram Downloader Route
app.use('/api/instagram', instagramRouter);

// ✅ Proxy Route for Instagram CDN (to bypass CORS/block)
app.get('/proxy', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: "error", details: "Missing URL" });

  try {
    const response = await axios.get(url, {
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
      }
    });
    res.setHeader('Content-Type', response.headers['content-type']);
    response.data.pipe(res);
  } catch (err) {
    res.status(500).json({ status: "error", details: "Error fetching media" });
  }
});

// ✅ Default Route
app.get('/', (req, res) => {
  res.json({
    status: "✅ API Active",
    message: "🚀 worksbeyond",
    developer: "👨‍💻 Developed by: WorksBeyond",
    version: "🔖 v1.007",
    channels: [
      {
        name: "📢 Updates Channel",
        link: "https://t.me/AirWorksbeyond"
      },
      {
        name: "💬 Support",
        link: "https://t.me/AirWorksbeyond"
      }
    ],
    usage: "📥 POST /api/instagram with JSON { url: '<instagram-url>' }"
  });
});

// ✅ Local development 
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Local server running at http://localhost:${PORT}`);
  });
}

export default app;
