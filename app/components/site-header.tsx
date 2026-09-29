"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { CloseIcon, MenuIcon } from "./icons";
import { Wordmark } from "./wordmark";

const U = (px: number) => `${px / 14.4}cqw`;

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export function SiteHeader({
  variant = "flow",
}: {
  variant?: "flow" | "stage";
}) {
  const [open, setOpen] = useState(false);

  if (variant === "stage") {
    return (
      <header
        className="absolute inset-x-0 top-0 z-30 flex items-center justify-between"
        style={{ height: U(104), paddingLeft: U(118), paddingRight: U(104) }}
      >
        <Link href="/" className="shrink-0" aria-label="ByteSpace home">
          <Wordmark height={U(37)} priority />
        </Link>

        <nav
          className="absolute left-1/2 flex -translate-x-1/2 items-center"
          style={{ gap: U(34) }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 transition-colors hover:text-white"
              style={{ fontSize: U(15) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center" style={{ gap: U(26) }}>
          <a
            href="/signin"
            className="text-white/90 transition-colors hover:text-white"
            style={{ fontSize: U(15) }}
          >
            Sign In
          </a>
          <a
            href="/join"
            className="text-white/90 transition-colors hover:text-white"
            style={{ fontSize: U(15) }}
          >
            Join Us
          </a>
          <a
            href="/cart"
            aria-label="Cart"
            className="text-white transition-opacity hover:opacity-80"
          >
            <Image
              src="/hero/Style=Outlined.png"
              alt=""
              width={24}
              height={24}
              className="h-auto w-auto"
              style={{ width: U(24) }}
            />
          </a>
        </div>
      </header>
    );
  }

  return (
    <header className="relative z-30 mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8">
      <Link href="/" aria-label="ByteSpace home">
        <Wordmark height="24px" priority />
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-white/90 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-6 md:flex">
        <a href="/signin" className="text-sm text-white/90 hover:text-white">
          Sign In
        </a>
        <a href="/join" className="text-sm text-white/90 hover:text-white">
          Join Us
        </a>
        <a
          href="/cart"
          aria-label="Cart"
          className="text-white hover:opacity-80"
        >
          <Image
            src="/hero/Style=Outlined.png"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="text-white md:hidden"
      >
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      {open ? (
        <div className="absolute inset-x-4 top-16 rounded-2xl bg-white p-5 text-neutral-900 shadow-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-4 border-t border-neutral-200 pt-4">
              <a href="/signin" className="text-sm">
                Sign In
              </a>
              <a href="/join" className="text-sm">
                Join Us
              </a>
              <a href="/cart" className="text-sm">
                Cart
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
