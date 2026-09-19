"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookCall } from "@/components/BookCall";

const links = [
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const path = usePathname();

  return (
    <header className="nav">
      <div className="wrap nav-bar">
        <Link className="wordmark" href="/">
          <span className="wordmark-mpw">MPW</span>
          <span className="wordmark-rest">Consulting</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={path === link.href ? "page" : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <BookCall className="btn btn-gold" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
