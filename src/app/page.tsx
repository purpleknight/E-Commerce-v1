import Image from "next/image";
import Card from "@/components/Card";

const featuredShoes = [
  {
    title: "Nike Air Max 90",
    description: "Iconic style meets modern comfort in this timeless classic.",
    image: "/shoes/shoe-1.jpg",
    price: 149.99,
    category: "Running",
    tag: "New",
  },
  {
    title: "Nike Air Zoom Pegasus",
    description:
      "Responsive cushioning for everyday runs and long-distance comfort.",
    image: "/shoes/shoe-2.webp",
    price: 129.99,
    category: "Running",
  },
  {
    title: "Nike Air Force 1",
    description: "The legendary sneaker with premium leather and bold style.",
    image: "/shoes/shoe-3.webp",
    price: 119.99,
    category: "Lifestyle",
    tag: "Popular",
  },
  {
    title: "Nike React Infinity",
    description:
      "Designed to help reduce injury while keeping you on the run.",
    image: "/shoes/shoe-4.webp",
    price: 159.99,
    category: "Running",
  },
];

const trendingItems = [
  { src: "/trending-1.png", alt: "Trending Nike ZoomX" },
  { src: "/trending-2.png", alt: "Trending Nike Street" },
  { src: "/trending-3.png", alt: "Trending Nike Retro" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 md:flex-row md:py-24 lg:px-8">
          <div className="z-10 max-w-xl text-center md:text-left">
            <p className="text-caption font-[500] uppercase tracking-widest text-orange">
              Just Do It
            </p>
            <h1 className="mt-4 text-heading-2 leading-[60px] font-[700] text-light-100 md:text-heading-1 md:leading-[78px]">
              Find Your
              <br />
              Perfect Pair
            </h1>
            <p className="mt-6 text-lead text-dark-500">
              Explore our latest collection of premium sneakers designed for
              style, comfort, and performance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <button
                type="button"
                className="rounded-full bg-light-100 px-8 py-3 text-body-medium font-[500] text-dark-900 transition-colors hover:bg-light-300"
              >
                Shop Now
              </button>
              <button
                type="button"
                className="rounded-full border border-light-400 px-8 py-3 text-body-medium font-[500] text-light-100 transition-colors hover:bg-light-100/10"
              >
                Explore
              </button>
            </div>
          </div>
          <div className="relative mt-12 flex-1 md:mt-0">
            <Image
              src="/hero-shoe.png"
              alt="Nike Air Jordan"
              width={650}
              height={450}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </div>
        </div>
        {/* Background image */}
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-20"
          aria-hidden="true"
          priority
        />
      </section>

      {/* Featured Products */}
      <section className="bg-light-200 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-caption font-[500] uppercase tracking-widest text-orange">
              Featured
            </p>
            <h2 className="mt-2 text-heading-2 font-[700] text-dark-900">
              Popular Right Now
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-dark-700">
              Discover our most loved sneakers, handpicked for you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredShoes.map((shoe) => (
              <Card key={shoe.title} {...shoe} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="bg-light-100 py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row lg:px-8">
          <div className="flex-1">
            <Image
              src="/feature.png"
              alt="Nike featured shoes"
              width={600}
              height={500}
              className="rounded-3xl"
            />
          </div>
          <div className="max-w-lg flex-1">
            <p className="text-caption font-[500] uppercase tracking-widest text-orange">
              Why Nike?
            </p>
            <h2 className="mt-2 text-heading-2 font-[700] text-dark-900">
              Engineered For
              <br />
              Performance
            </h2>
            <p className="mt-6 text-body text-dark-700">
              Every Nike shoe is crafted with cutting-edge technology and
              premium materials. From the track to the streets, experience
              unmatched comfort and durability.
            </p>
            <ul className="mt-6 space-y-3">
              {["Lightweight & Breathable", "Advanced Cushioning", "Sustainable Materials"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-body text-dark-900"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green/10 text-green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="bg-light-200 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-caption font-[500] uppercase tracking-widest text-orange">
              Trending
            </p>
            <h2 className="mt-2 text-heading-2 font-[700] text-dark-900">
              Don&apos;t Miss Out
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {trendingItems.map((item) => (
              <div
                key={item.alt}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
