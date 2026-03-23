import { db } from "@/db";
import { products } from "@/db/schema";
import { ProductList } from "./product-list";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Nike Store
          </h1>
          <span className="rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
            {allProducts.length} Products
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <ProductList initialProducts={allProducts} />
      </main>
    </div>
  );
}
