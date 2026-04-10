import express from 'express';
import { applyVendor, getVendorProfile, getVendorDashboard, updateVendorProfile, getNearbyStores, getStoresByCity, getAllStores } from '../controllers/vendorController.js';
import { auth, vendorOnly } from '../middleware/auth.js';

const router = express.Router();

// Vendor management routes
router.post('/apply', auth, applyVendor);
router.get('/profile', auth, getVendorProfile);
router.get('/dashboard', auth, vendorOnly, getVendorDashboard);
router.put('/profile', auth, vendorOnly, updateVendorProfile);

// Store discovery routes (public)
router.get('/nearby', getNearbyStores); // GET /api/vendors/nearby?latitude=28.6&longitude=77.2&maxDistance=50000
router.get('/city', getStoresByCity); // GET /api/vendors/city?city=Delhi&state=Delhi
router.get('/all', getAllStores); // GET /api/vendors/all?page=1&limit=20&sortBy=rating

export default router;
