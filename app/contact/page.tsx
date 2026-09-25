import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { BookCall } from "@/components/BookCall";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a diagnostic call, or send a note about where the business is headed.",
};

const covers = [
  {
    name: "Where the business is headed",
    line: "Your north star, and what matters most right now.",
  },
  {
    name: "Whether AI is the right tool for it",
    line: "If it isn’t, we’ll say so.",
  },
  {
    name: "What a first project could look like",
    line: "Short, built into the business, and yours to keep.",
  },
];

export default function ContactPage() {
  return (
    <>
      <header className="page-head page-field page-flat">
        <div className="wrap">
          <h1>
            <span className="tone">Start with</span> a diagnostic call.
          </h1>
          <p>Or send a note about the business, where it’s headed, and what’s in the way.</p>
        </div>
      </header>

      <section className="contact-section">
        <div className="wrap contact-cards">
          <div className="contact-card contact-call">
            <p className="section-label">Book a call</p>
            <h2>What we’ll cover</h2>
            <ol className="call-list">
              {covers.map((c, i) => (
                <li key={c.name}>
                  <span className="stage-label-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{c.name}</strong>
                    <small>{c.line}</small>
                  </span>
                </li>
              ))}
            </ol>
            <div className="btn-row">
              <BookCall className="btn btn-gold" />
            </div>
            {site.email ? (
              <p className="call-mail">
                Or write directly: <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            ) : null}
          </div>

          <div className="contact-card">
            <p className="section-label">Send a note</p>
            <ContactForm />
            <p className="form-fine">We use this to reply. Nothing else.</p>
          </div>
        </div>
      </section>
    </>
  );
}
