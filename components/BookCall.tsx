import Link from "next/link";
import { bookHref } from "@/lib/site";

export function BookCall({ className }: { className: string }) {
  const href = bookHref();
  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        Book a call
      </Link>
    );
  }
  return (
    <a className={className} href={href}>
      Book a call
    </a>
  );
}
