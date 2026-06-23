import { create } from 'zustand';

export type Size = 'S' | 'M' | 'L';

export interface CartItem {
  id: string;
  name: string;
  category: string;
  size: Size;
  price: number;
  toppings: string[];
  qty: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, 'id' | 'qty'>) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, delta: number) => void;
  clear: () => void;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (item) => {
    const id = `${item.name}-${item.size}-${item.toppings.join(',')}`;
    const existing = get().items.find((i) => i.id === id);
    if (existing) {
      set({ items: get().items.map((i) => i.id === id ? { ...i, qty: i.qty + 1 } : i) });
    } else {
      set({ items: [...get().items, { ...item, id, qty: 1 }] });
    }
    set({ isOpen: true });
  },

  removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),

  updateQty: (id, delta) => {
    const items = get().items
      .map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i)
      .filter((i) => i.qty > 0);
    set({ items });
  },

  clear: () => set({ items: [] }),
}));

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

export function fmt(n: number) {
  return `TZS ${n.toLocaleString()}`;
}
