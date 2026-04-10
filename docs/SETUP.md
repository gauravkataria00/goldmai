# SETUP & INSTALLATION GUIDE

## 🎯 Project Overview

GOLDMAI is a modern, professional e-commerce platform for Punjabi fashion. It includes:
- Responsive React + Vite frontend
- Node.js/Express REST API backend
- MongoDB database
- Vendor management system
- Shopping cart & orders
- User authentication

## 📋 Prerequisites

Ensure you have installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local or [Atlas cloud](https://cloud.mongodb.com/)) 
- **Git** (optional)

## 🚀 Installation Steps

### 1️⃣ Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your settings
# MONGODB_URI=mongodb://localhost:27017/goldmai
# JWT_SECRET=your_secret_key_123
```

### 2️⃣ Frontend Setup

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install
```

## 🎮 Running the Project

### Start Backend
```bash
cd backend
npm run dev
# Server will run on http://localhost:5000
```

### Start Frontend
```bash
cd frontend
npm run dev
# App will open on http://localhost:5173
```

## 📱 Testing the Application

### 1. Create a Test Account
- Go to Register
- Fill in name, email, password
- Click Register

### 2. Browse Products
- Navigate to Shop page
- View products by category
- Filter products

### 3. Add to Cart
- Click "Add to Cart" on any product
- View cart icon updates

### 4. Apply as Vendor
- Click "Vendor Panel"
- Fill vendor application form
- Submit application

## 🔌 API Testing

Use Postman or similar tool:

### Register User
```
POST http://localhost:5000/api/users/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210"
}
```

### Login User
```
POST http://localhost:5000/api/users/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get All Products
```
GET http://localhost:5000/api/products?category=phulkari&page=1&limit=12
```

### Create Order
```
POST http://localhost:5000/api/orders
Authorization: Bearer YOUR_TOKEN

{
  "items": [
    {
      "productId": "product_id",
      "quantity": 1,
      "size": "M",
      "color": "Black"
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Delhi",
    "state": "Delhi",
    "zipCode": "110001",
    "country": "India",
    "phone": "9876543210"
  },
  "paymentMethod": "card"
}
```

## 🗂️ Project Structure

```
GOLDMAI/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── store/           # Zustand store
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                  # Node.js/Express backend
│   ├── models/              # MongoDB schemas
│   ├── controllers/         # Business logic
│   ├── routes/              # API endpoints
│   ├── middleware/          # Auth & validation
│   ├── config/              # Configuration
│   ├── server.js
│   └── package.json
│
└── README.md               # This file
```

## 🔑 Key Features to Explore

### ✨ User Features
- Register/Login with JWT
- Update profile
- Browse products
- Add to cart
- Create orders
- Track orders

### 🏪 Vendor Features
- Apply as vendor
- Create products
- View dashboard
- Track sales
- Manage inventory

### 👨‍💼 Admin Features
- Approve vendors
- View all orders
- Manage products
- User management

## 🎨 Frontend Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Zustand** - State management
- **Font Awesome** - Icons

## 🔧 Backend Technologies

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in .env
PORT=5001

# Or kill process using port 5000
# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in .env
- Verify database name

### Frontend Not Loading
- Clear browser cache
- Delete node_modules: `rm -rf node_modules`
- Reinstall: `npm install`

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js](https://expressjs.com)
- [MongoDB](https://mongodb.com)

## 🎯 Next Steps

1. Install dependencies for both frontend & backend
2. Start MongoDB server
3. Run backend: `npm run dev`
4. Run frontend: `npm run dev`
5. Open http://localhost:5173
6. Test features
7. Customize styling & add more features

## 💡 Customization Tips

### Change Colors
Edit `frontend/tailwind.config.js`:
```js
colors: {
  gold: { /* Your colors */ }
}
```

### Add New Pages
1. Create file in `frontend/src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx`

### Add New API Endpoints
1. Create route in `backend/routes/`
2. Create controller in `backend/controllers/`
3. Create model in `backend/models/` if needed
4. Add API function in `frontend/src/services/api.js`

## 🚢 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy dist folder to Vercel
```

### Backend (Heroku/Railway)
```bash
# Push to Heroku
git push heroku main
```

## ✉️ Support & Help

- Read the README.md
- Check API documentation
- Review code comments
- Check browser console for errors

---

**Ready to build? Let's go! 🚀**
