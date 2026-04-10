# 🚀 Quick Start Guide - GOLDMAI

Get your professional e-commerce platform running in 5 minutes!

## ⏱️ 5-Minute Setup

### Step 1: Backend (2 minutes)
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Step 2: Frontend (2 minutes)
```bash
cd frontend
npm install
npm run dev
```

### Step 3: Open Browser (1 minute)
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

## ✨ What You Get

### Frontend Features
- ✅ Beautiful Responsive Design
- ✅ Product Showcase
- ✅ Shopping Cart
- ✅ User Authentication
- ✅ Vendor Panel
- ✅ Mobile Optimized

### Backend Features
- ✅ REST API
- ✅ User Management
- ✅ Product Management
- ✅ Order Processing
- ✅ Vendor System
- ✅ JWT Authentication

## 📁 Project Structure

```
frontend/          → React app on :5173
  ├── components/   → Reusable components
  ├── pages/        → Page components
  ├── services/     → API integration
  ├── store/        → State management

backend/           → API on :5000
  ├── models/       → Database schemas
  ├── controllers/  → Business logic
  ├── routes/       → API endpoints
  ├── middleware/   → Auth & validation
```

## 🎯 Test the App

### 1. Register
- Go to home page
- Click signup/register
- Fill form & submit

### 2. Browse Products
- Navigate to Shop
- Filter by category
- View details

### 3. Add to Cart
- Click "Add to Cart"
- See cart count update

### 4. Create Order
- Go to Cart
- Review items
- Checkout

### 5. Become Vendor
- Click "Vendor Panel"
- Fill application
- Submit

## 🔑 Default Login (if pre-populated)
```
Email: demo@goldmai.com
Password: password123
```

## 📚 Full Documentation

- **README.md** - Project overview
- **SETUP.md** - Detailed installation
- **API_DOCUMENTATION.md** - API reference
- **PROJECT_STRUCTURE.md** - Folder structure

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Auth

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js`

### Add Logo
Replace in `frontend/src/components/Navbar.jsx`

### Change API URL
Edit `frontend/.env`

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5000 in use | Change in `.env` |
| MongoDB error | Start MongoDB |
| npm ERR | Delete `node_modules`, reinstall |
| CORS error | Check `.env` URLs |

## 📞 Quick Help

```bash
# Clear install
rm -rf node_modules package-lock.json
npm install

# Kill port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

## 🎁 Bonus Features Ready to Add

- 💳 Payment Gateway (Stripe/Razorpay)
- 📧 Email Notifications
- 📱 Push Notifications
- 🔍 Advanced Search
- ⭐ Wishlist
- 💬 Chat Support
- 📊 Admin Dashboard
- 🏆 Loyalty Program

## 🚀 Next Steps

1. ✅ Install dependencies
2. ✅ Start servers
3. ✅ Browse application
4. ✅ Test features
5. ✅ Read API docs
6. ✅ Add custom features
7. ✅ Deploy to production

## 📞 Support

- Check console for errors
- Read the full README.md
- Review API documentation
- Check code comments

---

**Everything is ready! Start coding! 🎉**

Questions? Check SETUP.md or API_DOCUMENTATION.md
