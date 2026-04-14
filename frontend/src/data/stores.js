import { generateStores, getPopularStores, getStoresByLocation, getStoresWithFallback, locations } from './showroomEngine.js'

export const storeLocations = locations

export const stores = generateStores()

export const popularStores = getPopularStores(stores)

export { getStoresByLocation, getStoresWithFallback }
