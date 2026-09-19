import Link from "next/link";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/site";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <div id="main">{children}</div>
      <footer className="footer">
        <div className="wrap footer-bar">
          <p>{site.name}</p>
          <div className="footer-links">
            <Link href="/approach">Approach</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
