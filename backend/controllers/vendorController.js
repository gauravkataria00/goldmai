import Vendor from '../models/Vendor.js';
import Order from '../models/Order.js';

export const applyVendor = async (req, res) => {
  try {
    const { shopName, phoneNumber, address, categories } = req.body;

    const existingVendor = await Vendor.findOne({ user: req.user.userId });
    if (existingVendor) {
      return res.status(400).json({ error: 'Vendor application already exists' });
    }

    const vendor = new Vendor({
      user: req.user.userId,
      shopName,
      phoneNumber,
      address,
      categories
    });

    await vendor.save();
    res.status(201).json({ message: 'Vendor application submitted', vendor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVendorProfile = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ user: req.user.userId })
      .populate('user', 'name email');
    
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor profile not found' });
    }

    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVendorDashboard = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ user: req.user.userId });
    
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    const orders = await Order.find({
      'items.product': { $in: vendor.products || [] }
    });

    res.json({
      vendor,
      totalOrders: orders.length,
      totalRevenue: orders.reduce((sum, order) => sum + order.totalAmount, 0)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateVendorProfile = async (req, res) => {
  try {
    const vendor = await Vendor.findOneAndUpdate(
      { user: req.user.userId },
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );

    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    res.json({ message: 'Vendor profile updated', vendor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===== LOCATION-BASED STORE DISCOVERY =====

export const getNearbyStores = async (req, res) => {
  try {
    const { latitude, longitude, maxDistance = 50000 } = req.query; // maxDistance in meters (50km default)

    if (!latitude || !longitude) {
      return res.status(400).json({ error: 'Latitude and longitude required' });
    }

    const stores = await Vendor.find({
      status: 'approved',
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $maxDistance: parseInt(maxDistance)
        }
      }
    })
    .select('shopName address city state rating totalOrders latitude longitude')
    .limit(20);

    res.json({
      count: stores.length,
      stores
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStoresByCity = async (req, res) => {
  try {
    const { city, state } = req.query;

    if (!city) {
      return res.status(400).json({ error: 'City parameter required' });
    }

    const query = {
      status: 'approved',
      'address.city': new RegExp(city, 'i')
    };

    if (state) {
      query['address.state'] = new RegExp(state, 'i');
    }

    const stores = await Vendor.find(query)
      .select('shopName address city state rating totalOrders latitude longitude')
      .sort({ rating: -1 })
      .limit(50);

    res.json({
      city,
      state: state || 'All',
      count: stores.length,
      stores
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllStores = async (req, res) => {
  try {
    const { page = 1, limit = 20, sortBy = 'rating' } = req.query;

    const stores = await Vendor.find({ status: 'approved' })
      .select('shopName address city state rating totalOrders latitude longitude')
      .sort({ [sortBy]: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Vendor.countDocuments({ status: 'approved' });

    res.json({
      stores,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      total
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
