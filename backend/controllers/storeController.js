import mongoose from 'mongoose'
import Store from '../models/storeModel.js'

export const createStore = async (req, res) => {
  try {
    const newStore = await Store.create(req.body)
    return res.status(201).json(newStore)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export const getAllStores = async (req, res) => {
  try {
    const stores = await Store.find().sort({ createdAt: -1 })
    return res.status(200).json(stores)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getStoreById = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid store id' })
    }

    const store = await Store.findById(id)

    if (!store) {
      return res.status(404).json({ error: 'Store not found' })
    }

    return res.status(200).json({
      message: 'Store fetched successfully',
      store,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const deleteStore = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid store id' })
    }

    const deletedStore = await Store.findByIdAndDelete(id)

    if (!deletedStore) {
      return res.status(404).json({ error: 'Store not found' })
    }

    return res.status(200).json({ message: 'Store deleted successfully' })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
