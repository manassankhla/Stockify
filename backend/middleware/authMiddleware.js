import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Authorization token missing' });
  }
    
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // yeh hi kaafi hai
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

export default authMiddleware;
