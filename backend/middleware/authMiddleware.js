export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || ''
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: token required' })
    }

    return next()
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
}

export default authMiddleware
