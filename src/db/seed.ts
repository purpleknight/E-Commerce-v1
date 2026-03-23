import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";

async function seed() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
  }

  const sql = neon(databaseUrl);
  const db = drizzle(sql);

  const nikeProducts = [
    {
      name: "Nike Air Max 90",
      description:
        "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.",
      price: "130.00",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx1prgidht/AIR+MAX+90.png",
      category: "Shoes",
      inStock: true,
    },
    {
      name: "Nike Air Force 1 '07",
      description:
        "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best.",
      price: "115.00",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a7e4b0fb1c8f/AIR+FORCE+1+%2707.png",
      category: "Shoes",
      inStock: true,
    },
    {
      name: "Nike Dunk Low Retro",
      description:
        "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
      price: "115.00",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4f8e498-20c8-4071-a5cd-4c0b43831e10/NIKE+DUNK+LOW+RETRO.png",
      category: "Shoes",
      inStock: true,
    },
    {
      name: "Nike Sportswear Tech Fleece Joggers",
      description:
        "Slim through the leg, our Tech Fleece Joggers keep the smooth, lightweight feel you love while leveling up breathability.",
      price: "110.00",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52e16a97-fba2-43d3-beca-58a1a3ade660/M+NK+TCH+FLC+JGGR.png",
      category: "Clothing",
      inStock: true,
    },
    {
      name: "Nike Sportswear Club Fleece Hoodie",
      description:
        "The Nike Sportswear Club Fleece Hoodie combines classic style with the soft comfort of fleece for an everyday staple.",
      price: "65.00",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10a39545-c3a3-423c-aeb8-1c6e2f79fa63/M+NK+CLUB+BB+PO+HOODIE.png",
      category: "Clothing",
      inStock: true,
    },
    {
      name: "Nike Heritage86 Futura Washed Cap",
      description:
        "The Nike Heritage86 cap has a classic, relaxed look built for all-day comfort with a washed fabric for a broken-in feel.",
      price: "24.00",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/pmsqekk0wqnh7jqjhaas/U+NK+H86+FUTURA+WASHED+CAP.png",
      category: "Accessories",
      inStock: true,
    },
    {
      name: "Nike Air Max 270",
      description:
        "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Air Max 270 with its large window and heritage-inspired design.",
      price: "160.00",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awpjbyrxqndc6cculkwv/AIR+MAX+270.png",
      category: "Shoes",
      inStock: false,
    },
    {
      name: "Nike Pro Dri-FIT T-Shirt",
      description:
        "The Nike Pro Dri-FIT T-Shirt delivers a snug feel with sweat-wicking technology to help keep you dry during training sessions.",
      price: "35.00",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bnqdnwah2ojvk8ov6ccr/M+NP+DF+TIGHT+TOP+SS.png",
      category: "Clothing",
      inStock: true,
    },
  ];

  console.log("Seeding products...");

  await db.delete(products);
  await db.insert(products).values(nikeProducts);

  console.log(`Seeded ${nikeProducts.length} Nike products successfully!`);
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
