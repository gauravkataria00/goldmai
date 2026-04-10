import express from 'express'
import {
  createStore,
  deleteStore,
  getAllStores,
  getStoreById,
} from '../controllers/storeController.js'

const router = express.Router()

router.post('/', createStore)
router.get('/', getAllStores)
router.get('/:id', getStoreById)
router.delete('/:id', deleteStore)

export default router
