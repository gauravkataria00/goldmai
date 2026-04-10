import create from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  login: (user, token) => set({ user, token, isAuthenticated: true }),
  logout: () => set({ user: null, token: null, isAuthenticated: false })
}));

export const useCartStore = create((set) => ({
  items: [],
  
  addItem: (product) => set((state) => ({
    items: [...state.items, product]
  })),
  
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.id !== productId)
  })),
  
  clearCart: () => set({ items: [] })
}));
