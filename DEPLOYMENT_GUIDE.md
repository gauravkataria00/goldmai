# 🚀 GOLDMAI Deployment Guide

## Frontend Deployment (Vercel)

### Option 1: Automatic Deployment (Recommended)

1. **Sign up on Vercel** (free): https://vercel.com/signup
2. **Connect your GitHub account** during signup
3. **Import project** from GitHub:
   - Go to https://vercel.com/new
   - Select repository: `gauravkataria00/goldmai`
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

### Option 2: CLI Deployment (Advanced)

Run in your project directory:
```bash
cd c:\Users\acer\Desktop\GOLDMAI\goldmai
vercel --prod
```

Follow the prompts to authenticate and deploy.

---

## Backend Deployment (Render or Railway)

### Recommended: Railway.app (Free tier)

1. **Sign up**: https://railway.app
2. **Connect GitHub** to Railway
3. **Create new project** → Import from GitHub → Select `goldmai`
4. **Add service**:
   - Select `Node.js`
   - Set `start script`: `npm start`
   - Set environment variables:
     ```
     MONGODB_URI = your_mongodb_url
     JWT_SECRET = your_secret
     PORT = 5000
     ```
5. Deploy!

### Alternative: Render.com

1. Sign up at https://render.com
2. Create new "Web Service"
3. Connect GitHub repository
4. Configure:
   - Build: `npm install`
   - Start: `npm start`
   - Set environment variables
5. Deploy!

---

## Database: MongoDB Atlas Setup

1. **Create free cluster**: https://www.mongodb.com/cloud/atlas
2. **Get connection string**
3. **Add to backend `.env`**:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/goldmai
   ```

---

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://goldmai-api.railway.app
```

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=production
```

---

## Deployment Status

- ✅ Frontend build: Complete (dist folder ready)
- ✅ GitHub: Code pushed to main branch
- ⏳ Vercel: Ready to deploy (click link above)
- ⏳ Backend: Configure and deploy to Railway/Render
- ⏳ Database: Set up MongoDB Atlas

---

## Quick Start Links

📱 **Frontend**: https://vercel.com/new (Select your GitHub repo)
🔌 **Backend**: https://railway.app (New Project → GitHub)
🗄️ **Database**: https://www.mongodb.com/cloud/atlas

---

## Live URLs (After Deployment)

```
Frontend: https://goldmai.vercel.app
Backend API: https://goldmai-api.railway.app
```

Update these in your environment variables accordingly!
