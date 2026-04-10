# VastraBazaar API Documentation

## Base URL
```
Development: http://localhost:5000/api
Production: https://api.vastrabazaar.com/api
```

## Authentication
All protected endpoints require JWT token in headers:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 👥 USER ENDPOINTS

### Register User
```
POST /users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210"
}

Response (201):
{
  "message": "User registered successfully",
  "token": "eyJhbGc...",
  "user": {
    "id": "63f...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Login User
```
POST /users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response (200):
{
  "message": "Login successful",
  "token": "eyJhbGc...",
  "user": {
    "id": "63f...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

### Get Profile
```
GET /users/profile
Authorization: Bearer TOKEN

Response (200):
{
  "_id": "63f...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "address": {...},
  "role": "customer",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Update Profile
```
PUT /users/profile
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "name": "John Doe Updated",
  "phone": "9876543211",
  "address": {
    "street": "123 Main St",
    "city": "Delhi",
    "state": "Delhi",
    "zipCode": "110001",
    "country": "India"
  }
}

Response (200):
{
  "message": "Profile updated",
  "user": {...}
}
```

---

## 🛍️ PRODUCT ENDPOINTS

### Get All Products
```
GET /products?category=phulkari&search=suit&page=1&limit=12
Authorization: Bearer TOKEN (optional)

Query Parameters:
- category: 'phulkari' | 'anarkali' | 'pathani' | 'daily' | 'festive'
- search: Free text search
- page: Page number (default: 1)
- limit: Items per page (default: 12)

Response (200):
{
  "products": [
    {
      "_id": "63f...",
      "name": "Premium Phulkari Suit",
      "price": 3499,
      "category": "phulkari",
      "rating": 4.9,
      "images": ["url1", "url2"],
      "vendor": {
        "_id": "63f...",
        "shopName": "Elite Fashions",
        "rating": 4.8
      }
    }
  ],
  "currentPage": 1,
  "totalPages": 5,
  "total": 52
}
```

### Get Product by ID
```
GET /products/:id
Authorization: Bearer TOKEN (optional)

Response (200):
{
  "_id": "63f...",
  "name": "Premium Phulkari Suit",
  "description": "Authentic phulkari with premium embroidery...",
  "price": 3499,
  "discountPrice": 2999,
  "category": "phulkari",
  "images": ["url1", "url2"],
  "stock": 15,
  "rating": 4.9,
  "reviews": [
    {
      "userId": "63f...",
      "userName": "Priya Singh",
      "rating": 5,
      "comment": "Amazing quality!",
      "createdAt": "2024-01-10T08:00:00Z"
    }
  ],
  "sizes": ["XS", "S", "M", "L", "XL"],
  "colors": ["Red", "Blue", "Green"],
  "material": "Cotton",
  "care": "Hand wash recommended"
}
```

### Create Product (Vendor Only)
```
POST /products
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "name": "New Product",
  "description": "Product description",
  "price": 2999,
  "discountPrice": 2499,
  "category": "phulkari",
  "images": ["url1", "url2"],
  "stock": 20,
  "sizes": ["M", "L"],
  "colors": ["Red", "Blue"],
  "material": "Silk",
  "care": "Hand wash"
}

Response (201):
{
  "message": "Product added",
  "product": {...}
}
```

### Update Product (Vendor Only)
```
PUT /products/:id
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "price": 3499,
  "stock": 10
}

Response (200):
{
  "message": "Product updated",
  "product": {...}
}
```

### Delete Product (Vendor Only)
```
DELETE /products/:id
Authorization: Bearer TOKEN

Response (200):
{
  "message": "Product deleted"
}
```

### Add Review
```
POST /products/:id/reviews
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "rating": 5,
  "comment": "Excellent quality and fast delivery!"
}

Response (200):
{
  "message": "Review added",
  "product": {...}
}
```

---

## 📦 ORDER ENDPOINTS

### Create Order
```
POST /orders
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "items": [
    {
      "productId": "63f...",
      "quantity": 2,
      "size": "M",
      "color": "Red"
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

Response (201):
{
  "message": "Order created",
  "order": {
    "_id": "63f...",
    "user": "63f...",
    "items": [...],
    "totalAmount": 7498,
    "tax": 1350,
    "shippingCost": 200,
    "orderStatus": "placed",
    "paymentStatus": "pending"
  }
}
```

### Get All Orders
```
GET /orders
Authorization: Bearer TOKEN

Response (200):
[
  {
    "_id": "63f...",
    "user": "63f...",
    "items": [...],
    "totalAmount": 7498,
    "orderStatus": "shipped",
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

### Get Order by ID
```
GET /orders/:id
Authorization: Bearer TOKEN

Response (200):
{
  "_id": "63f...",
  "user": {...},
  "items": [
    {
      "product": {...},
      "quantity": 2,
      "price": 3499,
      "size": "M"
    }
  ],
  "totalAmount": 7498,
  "shippingAddress": {...},
  "orderStatus": "shipped",
  "trackingId": "TRACK123456",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Update Order Status (Admin/Vendor)
```
PUT /orders/:id/status
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "orderStatus": "shipped"
}

Valid statuses: 'placed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

Response (200):
{
  "message": "Order status updated",
  "order": {...}
}
```

---

## 🏪 VENDOR ENDPOINTS

### Apply as Vendor
```
POST /vendors/apply
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "shopName": "Elite Fashions",
  "phoneNumber": "9876543210",
  "address": {
    "street": "123 Fashion St",
    "city": "Ludhiana",
    "state": "Punjab",
    "zipCode": "141001",
    "country": "India"
  },
  "categories": ["phulkari", "anarkali"]
}

Response (201):
{
  "message": "Vendor application submitted",
  "vendor": {
    "_id": "63f...",
    "status": "pending",
    "shopName": "Elite Fashions"
  }
}
```

### Get Vendor Profile
```
GET /vendors/profile
Authorization: Bearer TOKEN

Response (200):
{
  "_id": "63f...",
  "user": {
    "_id": "63f...",
    "name": "Owner Name",
    "email": "vendor@example.com"
  },
  "shopName": "Elite Fashions",
  "status": "approved",
  "rating": 4.8,
  "totalOrders": 156,
  "totalEarnings": 250000,
  "categories": ["phulkari", "anarkali"]
}
```

### Get Vendor Dashboard
```
GET /vendors/dashboard
Authorization: Bearer TOKEN

Response (200):
{
  "vendor": {...},
  "totalOrders": 156,
  "totalRevenue": 250000
}
```

### Update Vendor Profile
```
PUT /vendors/profile
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "description": "Premium designer outfits",
  "bankDetails": {
    "accountHolderName": "Owner Name",
    "accountNumber": "1234567890",
    "bankName": "HDFC Bank",
    "ifscCode": "HDFC0001234"
  }
}

Response (200):
{
  "message": "Vendor profile updated",
  "vendor": {...}
}
```

---

## 🔐 Error Responses

### Unauthorized (401)
```json
{
  "error": "No token provided"
}
```

### Forbidden (403)
```json
{
  "error": "Access denied. Vendor role required."
}
```

### Not Found (404)
```json
{
  "error": "Product not found"
}
```

### Bad Request (400)
```json
{
  "error": "Email already registered"
}
```

### Server Error (500)
```json
{
  "error": "Something went wrong!",
  "message": "Database connection failed"
}
```

---

## 📊 Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Server Error |

---

## 🔗 CORS

Frontend Origin: `http://localhost:5173` (development)
Update in production with actual frontend URL.

---

## 💡 Tips

1. Always include JWT token for protected endpoints
2. Use Bearer scheme: `Authorization: Bearer <token>`
3. Check response status codes
4. Token expires in 7 days
5. Keep sensitive data in .env
6. Test endpoints with Postman before integration

---

**Last Updated: 2024**
