import Link from "next/link";
import { BookCall } from "@/components/BookCall";

export function CloseBlock() {
  return (
    <section className="close-band page-field">
      <div className="wrap close-band-grid">
        <h2>
          <span className="tone">Tell us</span> where the business is headed.
        </h2>
        <div className="close-band-act">
          <p>Book a diagnostic call, or send us a note.</p>
          <div className="btn-row">
            <BookCall className="btn btn-gold" />
            <Link className="btn btn-ghost" href="/contact">
              Send a note
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
