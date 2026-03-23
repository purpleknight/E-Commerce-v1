import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Air Max", href: "#" },
      { label: "Air Force", href: "#" },
      { label: "Air Jordan", href: "#" },
      { label: "Air Zoom", href: "#" },
      { label: "Running", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "About Us", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Payment Policy", href: "#" },
    ],
  },
  {
    title: "Get In Touch",
    links: [
      { label: "hello@nikestore.com", href: "mailto:hello@nikestore.com" },
      { label: "+1 234 567 890", href: "tel:+1234567890" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", icon: "/facebook.svg", href: "#" },
  { label: "Instagram", icon: "/instagram.svg", href: "#" },
  { label: "X", icon: "/x.svg", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-light-300">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Nike Store home">
              <Image
                src="/logo.svg"
                alt="Nike Store"
                width={80}
                height={29}
              />
            </Link>
            <p className="mt-4 max-w-xs text-body text-dark-500">
              Your ultimate destination for premium sneakers. Step into style
              and comfort with every pair.
            </p>
            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-light-100/10 transition-colors hover:bg-light-100/20"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={18}
                    height={18}
                    className="invert"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-caption font-[500] uppercase tracking-wider text-light-100">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body text-dark-500 transition-colors hover:text-light-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-dark-700/30" />

        {/* Bottom section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-footnote text-dark-700">
            &copy; {new Date().getFullYear()} Nike Store. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-footnote text-dark-700 transition-colors hover:text-light-100"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-footnote text-dark-700 transition-colors hover:text-light-100"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
