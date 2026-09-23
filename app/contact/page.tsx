import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { BookCall } from "@/components/BookCall";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a short diagnostic, or send a note. Two doors.",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Two doors. A call, or a note.</h1>
          <p>Tell us the business. What you’re trying to move — and what’s in the way.</p>
        </div>
      </header>
      <section className="wrap prose">
        <div className="contact-grid">
          <div>
            <h2>Book a call</h2>
            <p>
              A short diagnostic. No deck. Your objective, whether AI is the right mechanism, and
              whether a scoped engagement fits.
            </p>
            <p className="btn-row">
              <BookCall className="btn btn-navy" />
            </p>
            {site.email ? (
              <p style={{ marginTop: "1.25rem" }}>
                Or write directly:{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            ) : null}
          </div>
          <div>
            <h2>Send a note</h2>
            <ContactForm />
            <p style={{ marginTop: "1rem", color: "var(--muted)", fontSize: "0.92rem" }}>
              We use this to reply. Nothing else.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
