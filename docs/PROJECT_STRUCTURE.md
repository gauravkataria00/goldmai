frontend/
├── node_modules/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── CategoriesSection.jsx
│   │   ├── FeaturedProducts.jsx
│   │   └── TestimonialSection.jsx
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── ShopPage.jsx
│   │   ├── StoresPage.jsx
│   │   ├── VendorPanel.jsx
│   │   └── CartPage.jsx
│   ├── services/            # API services
│   │   └── api.js
│   ├── store/               # State management
│   │   └── store.js
│   ├── styles/              # CSS files
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js

backend/
├── node_modules/
├── config/
│   └── db.js               # Database configuration
├── models/
│   ├── User.js             # User schema
│   ├── Product.js          # Product schema
│   ├── Order.js            # Order schema
│   └── Vendor.js           # Vendor schema
├── controllers/            # Business logic
│   ├── userController.js
│   ├── productController.js
│   ├── orderController.js
│   └── vendorController.js
├── routes/                 # API routes
│   ├── userRoutes.js
│   ├── productRoutes.js
│   ├── orderRoutes.js
│   └── vendorRoutes.js
├── middleware/
│   └── auth.js            # Authentication middleware
├── server.js              # Main server file
├── package.json
├── .env.example           # Environment variables template
└── .gitignore
