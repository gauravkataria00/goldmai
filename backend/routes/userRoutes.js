import express from 'express';
import { registerUser, loginUser, getProfile, updateProfile } from '../controllers/userController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);

export default router;
