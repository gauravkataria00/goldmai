import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const adminOnly = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Admin role required.' });
  }
  next();
};

export const vendorOnly = (req, res, next) => {
  if (req.user?.role !== 'vendor' && req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Vendor role required.' });
  }
  next();
};
