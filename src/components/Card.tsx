import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category?: string;
  tag?: string;
  href?: string;
}

export default function Card({
  title,
  description,
  image,
  price,
  category,
  tag,
  href = "#",
}: CardProps) {
  return (
    <Link href={href} className="group block">
      <article className="overflow-hidden rounded-2xl bg-light-100 transition-shadow hover:shadow-lg">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-light-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {tag && (
            <span className="absolute left-3 top-3 rounded-full bg-orange px-3 py-1 text-footnote font-[500] text-light-100">
              {tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {category && (
            <p className="mb-1 text-caption font-[500] uppercase tracking-wider text-dark-700">
              {category}
            </p>
          )}
          <h3 className="text-heading-3 text-dark-900">{title}</h3>
          <p className="mt-1 line-clamp-2 text-body text-dark-700">
            {description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lead font-[500] text-dark-900">
              ${price.toFixed(2)}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-900 text-light-100 transition-colors group-hover:bg-dark-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
