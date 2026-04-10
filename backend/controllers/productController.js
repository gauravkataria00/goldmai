import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 12 } = req.query;
    let query = { isActive: true };

    if (category) query.category = category;
    if (search) query.$text = { $search: search };

    const products = await Product.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('vendor', 'shopName rating');

    const total = await Product.countDocuments(query);

    res.json({
      products,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      total
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('vendor', 'shopName rating');
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, images, stock, sizes, colors } = req.body;
    
    const product = new Product({
      name,
      description,
      price,
      category,
      images,
      stock,
      sizes,
      colors,
      vendor: req.user.userId
    });

    await product.save();
    res.status(201).json({ message: 'Product added', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product updated', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.reviews.push({
      userId: req.user.userId,
      rating,
      comment
    });

    await product.save();
    res.json({ message: 'Review added', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
