import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  inStock: boolean;
  createdAt: Date;
}

interface ProductState {
  products: Product[];
  selectedCategory: string | null;
  setProducts: (products: Product[]) => void;
  setSelectedCategory: (category: string | null) => void;
  filteredProducts: () => Product[];
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  selectedCategory: null,
  setProducts: (products) => set({ products }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  filteredProducts: () => {
    const { products, selectedCategory } = get();
    if (!selectedCategory) return products;
    return products.filter((p) => p.category === selectedCategory);
  },
}));
