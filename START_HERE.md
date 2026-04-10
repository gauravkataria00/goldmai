# 🚀 START DEVELOPMENT - QUICK COMMANDS

## ⚡ Single Command to Start (If npm installed globally)

### Open 2 Terminals and Run:

**Terminal 1 - Frontend:**
```bash
cd C:\Users\acer\Desktop\GOLDMAI\goldmai
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd C:\Users\acer\Desktop\GOLDMAI\goldmai\backend
npm run dev
```

---

## 📝 Step-by-Step Setup (First Time Only)

### 1️⃣ Install Frontend (goldmai folder)
```bash
cd C:\Users\acer\Desktop\GOLDMAI\goldmai
npm install
npm run dev
```
✅ Opens: http://localhost:5173

### 2️⃣ Install Backend (New Terminal)
```bash
cd C:\Users\acer\Desktop\GOLDMAI\goldmai\backend
npm install
cp .env.example .env
npm run dev
```
✅ Runs on: http://localhost:5000

---

## 🎯 That's It!

Your app is now running! Visit:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000/api

---

## 🔗 Useful URLs

| Link | Purpose |
|------|---------|
| http://localhost:5173 | Frontend App |
| http://localhost:5173/shop | Shop Page |
| http://localhost:5173/stores | Stores Page |
| http://localhost:5173/vendor | Vendor Panel |
| http://localhost:5000/api/health | API Health Check |
| http://localhost:5000/api/products | Get Products |

---

## 📂 File Structure You Need to Know

```
C:\Users\acer\Desktop\GOLDMAI\goldmai\
├── src/                    ← React components here
├── backend/                ← Node.js API here
├── package.json            ← Frontend dependencies
├── vite.config.js         ← Frontend config
├── index.html             ← React entry point
└── tailwind.config.js     ← Styling config
```

---

## 🧪 Test the App

1. Go to http://localhost:5173
2. Browse the website
3. Try all pages (Shop, Stores, Vendor Panel)
4. Add to cart
5. Check API at http://localhost:5000/api/products

---

## ✅ Pro Tips

### Restart Development
Just save files and they auto-reload!

### Check Backend API
```
Open: http://localhost:5000/api/health
Should show: { message: "GOLDMAI API is running" }
```

### Common Issues
- **Port in use:** Kill process or change port in .env
- **npm not found:** Install Node.js from nodejs.org
- **MongoDB error:** Update .env connection string

---

## 🎉 You're All Set!

```
npm run dev          (Frontend)
npm run dev          (Backend - different terminal)
```

That's all you need! 🚀

---

**Ready to build an amazing platform!** 💡
