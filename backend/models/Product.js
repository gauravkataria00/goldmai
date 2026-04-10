import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  discountPrice: {
    type: Number,
    min: 0
  },
  category: {
    type: String,
    enum: ['phulkari', 'anarkali', 'pathani', 'daily', 'festive'],
    required: true
  },
  images: [String],
  stock: {
    type: Number,
    required: true,
    default: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [
    {
      userId: mongoose.Schema.Types.ObjectId,
      userName: String,
      rating: Number,
      comment: String,
      createdAt: { type: Date, default: Date.now }
    }
  ],
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  sizes: [String],
  colors: [String],
  material: String,
  care: String,
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Index for faster searches
productSchema.index({ name: 'text', description: 'text', category: 1 });

export default mongoose.model('Product', productSchema);
