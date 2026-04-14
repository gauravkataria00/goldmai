const mainCategories = ['Fashion', 'Food', 'Electronics', 'Services']

export const categoryTree = {
  Fashion: ['Ethnic Wear', 'Western Wear', 'Footwear', 'Accessories', 'Salon / Beauty'],
  Food: ['Cafe', 'Restaurants', 'Street Food', 'Fine Dining'],
  Electronics: ['Mobiles', 'Laptops', 'Accessories'],
  Services: ['Salon', 'Repair', 'Fitness', 'Coaching'],
}

export const locations = [
  'Panipat',
  'Delhi',
  'Gurgaon',
  'Noida',
  'Faridabad',
  'Sonipat',
  'Karnal',
  'Rohtak',
  'Ghaziabad',
  'Chandigarh',
  'Ludhiana',
  'Jaipur',
]

const areaByLocation = {
  Panipat: ['Model Town', 'Sector 13-17', 'GT Road', 'Assandh Road', 'Insar Bazaar'],
  Delhi: ['Connaught Place', 'Karol Bagh', 'Lajpat Nagar', 'Dwarka', 'Saket'],
  Gurgaon: ['Sector 29', 'DLF Phase 3', 'Sohna Road', 'Golf Course Road'],
  Noida: ['Sector 18', 'Sector 62', 'Sector 76', 'Noida Extension'],
  Faridabad: ['NIT', 'Sector 15', 'Greenfield Colony', 'New Industrial Town'],
  Sonipat: ['Sector 14', 'Murthal Road', 'Model Town', 'Atlas Road'],
  Karnal: ['Civil Lines', 'Sector 7', 'Model Town', 'Kunjpura Road'],
  Rohtak: ['HUDA Complex', 'Delhi Bypass', 'Model Town', 'Jhajjar Road'],
  Ghaziabad: ['Indirapuram', 'Raj Nagar', 'Kaushambi', 'Vaishali'],
  Chandigarh: ['Sector 17', 'Sector 22', 'Sector 35', 'Elante Area'],
  Ludhiana: ['Model Town', 'Ferozepur Road', 'Civil Lines', 'Sarabha Nagar'],
  Jaipur: ['C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Tonk Road'],
}

const ownerNames = ['Rohit', 'Aman', 'Neha', 'Karan', 'Sana', 'Vikram', 'Priya', 'Rahul', 'Meenal', 'Nikhil']

const storeBrandPrefixes = {
  Fashion: ['Noor', 'Velvet', 'Urban', 'Royal', 'Trend', 'Luxe', 'Aurum', 'Saffron', 'Ivory', 'Regal'],
  Food: ['Spice', 'Brew', 'Tandoor', 'Olive', 'Crave', 'Zesty', 'Saffron', 'Delhi', 'Momo', 'Cafe'],
  Electronics: ['Pixel', 'Gadget', 'Tech', 'Circuit', 'Smart', 'Volt', 'Nova', 'Digital', 'Device', 'Byte'],
  Services: ['Urban', 'Quick', 'Prime', 'Elite', 'Care', 'Fit', 'Zen', 'Skill', 'Bright', 'Swift'],
}

const storeBrandSuffixes = {
  Fashion: ['Studio', 'Boutique', 'Atelier', 'Wardrobe', 'Salon', 'House', 'Gallery', 'Hub'],
  Food: ['Cafe', 'Kitchen', 'Bistro', 'House', 'Eatery', 'Point', 'Diner', 'Roasters'],
  Electronics: ['Store', 'Hub', 'World', 'Point', 'Depot', 'Square', 'Electronics', 'Lab'],
  Services: ['Services', 'Center', 'Care', 'Studio', 'Hub', 'Works', 'Experts', 'Club'],
}

const productNameTemplates = {
  'Ethnic Wear': ['Wedding Lehenga', 'Embroidered Kurta Set', 'Festive Sharara', 'Silk Saree', 'Designer Anarkali'],
  'Western Wear': ['Premium Co-ord Set', 'Evening Gown', 'Slim Fit Blazer', 'Pleated Dress', 'Classic Denim Jacket'],
  Footwear: ['Leather Loafers', 'Comfort Sneakers', 'Party Heels', 'Ethnic Jutti', 'Classic Sandals'],
  Accessories: ['Statement Handbag', 'Luxury Watch', 'Minimal Earrings', 'Silk Stole', 'Sunglasses Pro'],
  'Salon / Beauty': ['Bridal Makeup Package', 'Keratin Hair Spa', 'Skin Glow Facial', 'Party Makeup Session', 'Hair Styling Package'],
  Cafe: ['Cold Coffee Frappe', 'Belgian Waffle Combo', 'Peri Peri Fries', 'Hazelnut Latte', 'Blueberry Cheesecake Slice'],
  Restaurants: ['Butter Chicken', 'Paneer Tikka Platter', 'Chicken Biryani', 'Dal Makhani Meal', 'Family Meal Box'],
  'Street Food': ['Tandoori Momos', 'Chole Bhature Combo', 'Raj Kachori', 'Pav Bhaji', 'Aloo Tikki Chaat'],
  'Fine Dining': ['Truffle Pasta', 'Herb Grilled Fish', 'Lamb Chops', 'Risotto Bowl', 'Chef Special Platter'],
  Mobiles: ['5G Smartphone 128GB', 'Flagship Camera Phone', 'Gaming Phone Pro', 'Battery Beast Phone', 'Foldable Smart Phone'],
  Laptops: ['UltraSlim Laptop', 'Creator Laptop', 'Gaming Laptop', 'Business Notebook', 'Student Laptop Kit'],
  Accessories: ['Wireless Earbuds Pro', 'Portable SSD 1TB', 'Bluetooth ANC Headphones', 'Smartwatch Active', 'Fast Charger Kit'],
  Salon: ['Unisex Haircut', 'Premium Hair Spa', 'Beard Styling', 'Facial Care Session', 'Bride/Groom Package'],
  Repair: ['AC Service & Gas Check', 'Laptop Repair Service', 'Phone Screen Repair', 'Plumbing Quick Fix', 'Appliance Repair Visit'],
  Fitness: ['Personal Training Session', 'Gym Monthly Plan', 'Yoga Monthly Pass', 'Zumba Batch Pass', 'Strength Assessment'],
  Coaching: ['Career Coaching Session', 'Maths Master Class', 'Interview Prep Program', 'Coding Bootcamp Intro', 'Language Skills Batch'],
}

const categoryKeywords = {
  Fashion: 'fashion,clothes,outfit',
  Food: 'food,cafe,dish',
  Electronics: 'electronics,gadget,technology',
  Services: 'salon,gym,repair',
}

const makeImagePool = (keyword, start) =>
  Array.from({ length: 140 }, (_, index) => `https://loremflickr.com/900/700/${keyword}?lock=${start + index}`)

const imagePools = {
  Fashion: makeImagePool(categoryKeywords.Fashion, 1000),
  Food: makeImagePool(categoryKeywords.Food, 3000),
  Electronics: makeImagePool(categoryKeywords.Electronics, 5000),
  Services: makeImagePool(categoryKeywords.Services, 7000),
}

const toSlug = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const pickFromList = (list, index) => list[index % list.length]

const generateDistance = (index) => `${(0.5 + ((index * 7) % 26) / 10).toFixed(1)} km away`

const createStoreName = (category, subcategory, index) => {
  const prefix = pickFromList(storeBrandPrefixes[category], index)
  const suffix = pickFromList(storeBrandSuffixes[category], index + 3)
  const shortSubcategory = subcategory.replace(' / ', ' ').split(' ')[0]
  return `${prefix} ${shortSubcategory} ${suffix}`
}

const storeCountByCategory = {
  Fashion: 14,
  Food: 14,
  Electronics: 14,
  Services: 14,
}

export const generateStores = () => {
  const generatedStores = []
  let globalIndex = 0

  mainCategories.forEach((category) => {
    const subcategories = categoryTree[category]
    const targetCount = storeCountByCategory[category]

    for (let index = 0; index < targetCount; index += 1) {
      const subcategory = pickFromList(subcategories, index)
      const location = pickFromList(locations, globalIndex)
      const area = pickFromList(areaByLocation[location] || ['Main Market'], globalIndex + index)
      const imagePool = imagePools[category]
      const image = imagePool[(globalIndex * 3) % imagePool.length]
      const gallery = [
        image,
        imagePool[(globalIndex * 3 + 5) % imagePool.length],
        imagePool[(globalIndex * 3 + 11) % imagePool.length],
        imagePool[(globalIndex * 3 + 17) % imagePool.length],
      ]
      const rating = Number((4 + ((globalIndex * 13) % 11) / 10).toFixed(1))
      const cashback = 60 + ((globalIndex * 17) % 140)
      const reviews = 45 + ((globalIndex * 23) % 420)
      const locationCode = toSlug(location).slice(0, 3).toUpperCase()
      const uniqueName = `${createStoreName(category, subcategory, globalIndex)} ${locationCode}`

      generatedStores.push({
        id: `st-${globalIndex + 1}`,
        name: uniqueName,
        category,
        subcategory,
        location,
        area,
        rating,
        cashback,
        cashbackOffer: `Get ₹${cashback} cashback`,
        cashbackLeft: 2 + ((globalIndex * 5) % 12),
        distance: generateDistance(globalIndex),
        coverImage: image,
        galleryImages: gallery,
        image,
        gallery,
        tags: ['Top Rated', 'Trusted Seller', 'Verified'],
        totalReviews: reviews,
        peopleSavedToday: 20 + ((globalIndex * 9) % 70),
        ownerName: pickFromList(ownerNames, globalIndex),
        whatsappNumber: `91${8059101000 + globalIndex}`,
        yearsInBusiness: 2 + (globalIndex % 11),
        openingHours: category === 'Food' ? '9:00 AM - 11:30 PM' : '10:00 AM - 9:30 PM',
        fullAddress: `${area}, ${location}`,
        categories: [subcategory, category],
        description: `${uniqueName} is a trusted ${subcategory.toLowerCase()} ${category.toLowerCase()} store in ${location} with high ratings and instant cashback deals.`,
      })

      globalIndex += 1
    }
  })

  return generatedStores
}

const basePriceByCategory = {
  Fashion: 2499,
  Food: 249,
  Electronics: 4499,
  Services: 799,
}

const createProductName = (baseName, storeName, index) => {
  const storeToken = storeName.split(' ').slice(0, 2).join(' ')
  return `${baseName} - ${storeToken} ${index + 1}`
}

export const generateProducts = (stores) => {
  return stores.flatMap((store, storeIndex) => {
    const templates = productNameTemplates[store.subcategory] || productNameTemplates[store.category] || ['Premium Product']
    const imagePool = imagePools[store.category]

    return Array.from({ length: 5 }, (_, productIndex) => {
      const templateName = pickFromList(templates, productIndex + storeIndex)
      const priceBase = basePriceByCategory[store.category]
      const price = priceBase + ((storeIndex * 7 + productIndex * 13) % (priceBase * 0.9))
      const discountPercent = 10 + ((storeIndex + productIndex) % 24)
      const originalPrice = Math.round(price * (1 + discountPercent / 100))
      const productImage = imagePool[(storeIndex * 5 + productIndex * 9) % imagePool.length]

      return {
        id: `p-${store.id}-${productIndex + 1}`,
        storeId: store.id,
        shopId: store.id,
        name: createProductName(templateName, store.name, productIndex),
        category: store.category,
        subcategory: store.subcategory,
        price,
        originalPrice,
        discountPercent,
        rating: Number((4 + ((storeIndex * 3 + productIndex) % 10) / 10).toFixed(1)),
        reviewsCount: 35 + ((storeIndex * 19 + productIndex * 11) % 280),
        image: productImage,
        images: [
          productImage,
          imagePool[(storeIndex * 5 + productIndex * 9 + 7) % imagePool.length],
          imagePool[(storeIndex * 5 + productIndex * 9 + 14) % imagePool.length],
        ],
        description: `${templateName} from ${store.name} in ${store.location}.`,
        inStock: true,
      }
    })
  })
}

export const getPopularStores = (stores) => {
  return [...stores]
    .sort((firstStore, secondStore) => {
      if (secondStore.rating !== firstStore.rating) {
        return secondStore.rating - firstStore.rating
      }

      if (secondStore.cashback !== firstStore.cashback) {
        return secondStore.cashback - firstStore.cashback
      }

      return secondStore.totalReviews - firstStore.totalReviews
    })
    .slice(0, 16)
}

export const getStoresByLocation = (location, stores) => {
  if (!location || location === 'All') {
    return stores
  }

  return stores.filter((store) => store.location === location)
}

export const getStoresWithFallback = (location, stores) => {
  const matchedStores = getStoresByLocation(location, stores)
  if (matchedStores.length > 0) {
    return matchedStores
  }

  return getPopularStores(stores)
}

export const getFeaturedStores = (stores) => {
  return [...stores]
    .filter((store) => store.rating >= 4.5 && store.cashback >= 100)
    .slice(0, 12)
}

export const getTopRatedStores = (stores) => {
  return [...stores].sort((a, b) => b.rating - a.rating).slice(0, 12)
}

export const getRecentlyViewedMock = (products) => {
  return [...products].sort((a, b) => b.reviewsCount - a.reviewsCount).slice(0, 8)
}

export const getCustomerReviewsMock = (stores) => {
  return stores.slice(0, 6).map((store, index) => ({
    id: `review-${store.id}`,
    name: ['Riya', 'Aakash', 'Neha', 'Vivek', 'Ishita', 'Mohit'][index % 6],
    message: `${store.name} gave great value and instant cashback. Felt very reliable.`,
    rating: Number((4.4 + (index % 4) * 0.1).toFixed(1)),
    location: store.location,
  }))
}
