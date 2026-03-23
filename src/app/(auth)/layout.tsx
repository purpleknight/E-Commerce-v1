import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left panel - brand / hero */}
      <div className="relative hidden flex-col justify-between bg-dark-900 p-10 lg:flex lg:w-1/2">
        {/* Logo */}
        <Link href="/" aria-label="Nike Store home">
          <Image src="/logo.svg" alt="Nike Store" width={80} height={29} />
        </Link>

        {/* Hero content */}
        <div className="max-w-md">
          <h2 className="text-heading-2 font-[700] text-light-100">
            Just Do It
          </h2>
          <p className="mt-4 text-lead text-dark-500">
            Join millions of athletes and fitness enthusiasts who trust Nike for
            their performance needs.
          </p>
          {/* Dots indicator */}
          <div className="mt-8 flex gap-2">
            <span className="h-2 w-2 rounded-full bg-light-100" />
            <span className="h-2 w-2 rounded-full bg-dark-700" />
            <span className="h-2 w-2 rounded-full bg-dark-700" />
          </div>
        </div>

        {/* Footer */}
        <p className="text-footnote text-dark-700">
          &copy; {new Date().getFullYear()} Nike Store. All rights reserved.
        </p>

        {/* Background gradient overlay */}
        <div
          className="absolute inset-0 -z-0 opacity-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(211,121,24,0.4) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Right panel - form area */}
      <div className="flex flex-1 flex-col">
        {/* Mobile header */}
        <div className="flex items-center justify-between p-6 lg:hidden">
          <Link href="/" aria-label="Nike Store home">
            <Image
              src="/logo.svg"
              alt="Nike Store"
              width={60}
              height={22}
              className="invert"
            />
          </Link>
        </div>

        {/* Form container */}
        <div className="flex flex-1 items-center justify-center px-6 py-8 sm:px-12 lg:px-16">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
