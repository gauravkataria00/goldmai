# 🎉 GOLDMAI - India's Fashion Marketplace

A production-ready, full-stack e-commerce platform with location-based store discovery. Built with **React + Vite + Tailwind CSS** frontend and **Node.js/Express/MongoDB** backend. Enterprise-grade architecture with 1000+ stores across India.

---

## ✨ Quick Start

**👉 New to this project?** Read [START_HERE.md](START_HERE.md) for quick setup (2 minutes)

**📚 Need detailed info?** Check [docs/](docs/) folder for complete documentation

---

## 🎯 Key Features

### Frontend
- **React 18** with modern hooks
- **Vite** for ultra-fast development
- **Tailwind CSS** for beautiful, responsive design
- **React Router** for seamless navigation
- **Axios** for API requests with interceptors
- **Zustand** for state management
- Mobile-responsive design
- Smooth animations and transitions

### Backend
- **Node.js & Express** REST API
- **MongoDB** with Mongoose ODM
- **JWT Authentication** for secure sessions
- **Password hashing** with bcryptjs
- **CORS** enabled for frontend communication
- Middleware for auth & role-based access
- Professional error handling

### Features Implemented
✅ User Authentication (Register/Login)  
✅ Product Management & Search  
✅ Shopping Cart System  
✅ Order Management  
✅ Vendor Panel & Applications  
✅ Product Reviews & Ratings  
✅ Responsive Design  
✅ API Documentation  

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and other configs
npm run dev
```

Backend runs on `http://localhost:5000`

## 📋 API Endpoints

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (vendor)
- `PUT /api/products/:id` - Update product (vendor)
- `DELETE /api/products/:id` - Delete product (vendor)
- `POST /api/products/:id/reviews` - Add review

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/status` - Update status

### Vendors
- `POST /api/vendors/apply` - Apply as vendor
- `GET /api/vendors/profile` - Get vendor profile
- `GET /api/vendors/dashboard` - Get dashboard
- `PUT /api/vendors/profile` - Update profile

## 🗄️ Database Schema

### Users
```
name, email, password, phone, address, role, profile picture, timestamps
```

### Products
```
name, description, price, category, images, stock, ratings, reviews, vendor, sizes, colors
```

### Orders
```
user, items, total amount, shipping address, payment method, status, tracking ID, timestamps
```

### Vendors
```
user, shop name, phone, address, bank details, documents, status, ratings, earnings
```

## 🔐 Environment Variables

### 1) Local development (Frontend)

Create a `.env` file inside `frontend` and add:

```
VITE_MAINTENANCE_MODE=false
```

When this is `false`, your normal app/home page is shown.
When this is `true`, the Coming Soon page is shown.

### 2) Local development (Backend)

Create `.env` file in `backend`:

```
MONGODB_URI=mongodb://localhost:27017/goldmai
JWT_SECRET=your_secret_key_here
PORT=5000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

### 3) Production (Vercel)

In your Vercel project settings, add this environment variable:

- Key: `VITE_MAINTENANCE_MODE`
- Value: `true`

This will show the Coming Soon page in production.

### Important Notes

- Restart your frontend dev server after any `.env` change.
- After adding/updating variables in Vercel, redeploy the project.

## 📦 Technologies Used

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Zustand
- Font Awesome Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS

## 🎨 Design Highlights

- Premium gold & black theme
- Glassmorphism UI elements
- Smooth animations
- Professional typography (Playfair Display + Inter)
- Mobile-first responsive design
- Accessibility features

## 📱 Pages & Components

### Frontend Pages
1. **Home Page** - Hero, categories, featured products, testimonials
2. **Shop Page** - Product listing with filters
3. **Stores Page** - Physical store locations
4. **Vendor Panel** - Vendor application form
5. **Cart Page** - Shopping cart & checkout

### Components
- Navbar with search
- Footer with links
- Product cards
- Category cards
- Testimonial section
- Hero banner

## 🔄 Workflow

1. **User** → Registers/Logs in
2. **Browse** → Products by category or search
3. **Cart** → Add products to cart
4. **Checkout** → Enter shipping & payment info
5. **Order** → Track order status
6. **(Optional) Vendor** → Apply and sell products

## 🛠️ Development

### Adding Features

1. **Create Model** - Add schema in `backend/models/`
2. **Create Controller** - Add business logic in `backend/controllers/`
3. **Create Route** - Add API endpoint in `backend/routes/`
4. **Create Component** - Add UI in `frontend/src/components/`
5. **Connect API** - Use axios in services/api.js

### Best Practices
- Use middleware for auth
- Validate all inputs
- Use try-catch for error handling
- Keep components small and reusable
- Use environment variables

## 📊 Future Enhancements

- Payment integration (Stripe/Razorpay)
- Real-time notifications
- Admin dashboard
- Advanced analytics
- Email notifications
- Multi-language support
- Social media integration

## 📄 License

MIT License

## 👥 Support

For issues and questions, please create an issue or contact support.

---

**Happy Coding! 🎉**
