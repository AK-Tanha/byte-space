import Link from "next/link";
import { Container } from "./section-heading";
import { Wordmark } from "./wordmark";

const links = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
  "Development",
  "Marketing",
  "Photography",
  "Finance",
  "Sport",
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

const legal = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export function SiteFooter() {
  return (
    <footer className="bg-white pt-16 pb-8 sm:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-16">
          <div>
            <Wordmark height="34px" variant="dark" />
            <p className="mt-6 max-w-[400px] text-[14px] leading-[1.6] text-neutral-600">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form
              action="/newsletter"
              className="mt-6 flex items-center gap-3 sm:gap-4"
            >
              <label className="flex h-[52px] min-w-0 flex-1 items-center">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="h-full w-full min-w-0 rounded-full border border-neutral-200 px-5 text-[15px] text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-neutral-400 sm:px-6"
                />
              </label>
              <button
                type="submit"
                className="h-[52px] shrink-0 rounded-full bg-lime px-5 text-[15px] font-medium whitespace-nowrap text-neutral-900 transition-colors hover:bg-lime/85 sm:px-7"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-5 max-w-[420px] text-[13px] leading-[1.6] text-neutral-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-flow-col sm:grid-rows-5 sm:grid-cols-3"
          >
            {links.map((link) => (
              <Link
                key={link}
                href="/"
                className="text-[14px] text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-neutral-600">
            &copy; 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-8">
            {legal.map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="text-[14px] text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
