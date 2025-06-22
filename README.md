# 📥 Instagram Media Downloader API

🚀 **A Simple API to download Instagram Reels, Posts, Videos, Albums.**  
Supports fallback to **Puppeteer** if `instagram-url-direct` fails.  
Made with ❤️ by **WOODcraft**

---

## 🌐 Features

✅ Supports **Reels / Videos / Posts / Albums**  
✅ Automatic fallback → `instagram-url-direct` ➔ `Puppeteer`  
✅ Proxy endpoint `/proxy` to bypass **CORS**  
✅ JSON API responses with emojis ✅  
✅ Fully **CORS Enabled** → works with web browsers  
✅ ⚡ Fast caching for repeated links

---

## 🛠️ Installation & Deployment

### 🔸 Requirements
- Node.js **v18+** ✅
- Preferable deploy → **Render / Railway**

### 🔸 Clone the Project
```bash
git clone https://github.com/your-username/instagram-downloader-api.git
cd instagram-downloader-api
```

### 🔸 Install Dependencies
```bash
npm install
```

### 🔸 Local Development
```bash
npm run dev
```

---

## ⚙️ Deployment Options

### ▶️ Deploy to Render (Recommended)
- Go to 👉 https://render.com/
- Create **Web Service**
- Set **Start Command**:
```bash
npm install && npm run start
```
- ✅ Add Node version: **18**
- ✅ Enable Build Command: **npm install**
- Deploy 🚀

### ▶️ Deploy to Railway (Alternative)
- https://railway.app/new

### ❗ Vercel ❌ (Puppeteer works poorly/free not suitable)

---

## 🔑 Endpoints

### 📥 Download Instagram Media

```bash
POST /api/instagram
Content-Type: application/json
Body: { "url": "<instagram-post-url>" }
```

OR (GET Support Added)
```bash
GET /api/instagram?url=<instagram-post-url>
```

### 📦 Example Response:
```json
{
  "status": "success",
  "postType": "Reel",
  "caption": "🔥 Caption Text here...",
  "totalMedia": 1,
  "downloads": [
    {
      "type": "video",
      "url": "https://..."
    }
  ]
}
```

---

### 🛰️ Proxy Endpoint (to bypass CORS)
```bash
GET /proxy?url=<direct-instagram-cdn-url>
```

---

## 🖥️ Default Route
```bash
GET /
```
**Response →**
```json
{
  "status": "✅ API Active",
  "message": "🚀 ইন্সটাগ্রাম মিডিয়া ডাউনলোডার এপিআই চালু রয়েছে!",
  "developer": "👨‍💻 Developed by: 𝐖𝐎𝐎𝐃𝐜𝐫𝐚𝐟𝐭",
  "version": "🔖 v1.007",
  "channels": [
    {
      "name": "📢 Updates Channel",
      "link": "https://t.me/Opleech_WD"
    },
    {
      "name": "💬 Support",
      "link": "https://t.me/Farooq_is_king"
    }
  ],
  "usage": "📥 POST /api/instagram with JSON { url: '<instagram-url>' }"
}
```

---

## 🛡️ License
**MIT License** © 2025 **WOODcraft**

---

## 📢 Join Our Telegram
- 📢 Updates → [Telegram](https://t.me/Opleech_WD) 
- 💬 Support →[WOODcraft](https://t.me/Farooq_is_king)

---

### 👨‍💻 Developer
**WOODcraft** 🔥 | ❤️ Coding | 🚀 API Maker
