"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useProductStore, type Product } from "@/store/product-store";

interface ProductListProps {
  initialProducts: Product[];
}

export function ProductList({ initialProducts }: ProductListProps) {
  const {
    products,
    setProducts,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductStore();

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);

  const categories = Array.from(
    new Set(initialProducts.map((p) => p.category))
  );

  const displayProducts = filteredProducts();

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selectedCategory === null
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "bg-white text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-zinc-800"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-white text-zinc-700 ring-1 ring-zinc-200 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition-shadow hover:shadow-md dark:bg-zinc-900 dark:ring-zinc-800"
          >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {!product.inStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-zinc-900">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-5">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {product.category}
              </div>
              <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {product.name}
              </h2>
              <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  ${product.price}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    product.inStock
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Sold Out"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayProducts.length === 0 && products.length > 0 && (
        <div className="py-20 text-center text-zinc-500 dark:text-zinc-400">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
