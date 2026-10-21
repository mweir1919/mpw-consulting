import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { BookCall } from "@/components/BookCall";
import { site } from "@/lib/site";
import "../home.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a 30-minute call, or send a note about the goal you want to move.",
};

const covers = [
  { name: "Your goal", line: "What you want to move this year, and what’s getting in the way." },
  { name: "Whether AI fits", line: "If it isn’t the right tool for the job, we’ll tell you." },
  { name: "A first step", line: "What a first project could look like, if there’s one worth doing." },
];

export default function ContactPage() {
  return (
    <div className="hm">
      <section className="hm-about-hero hm-contact-hero">
        <div className="wrap">
          <span className="hm-eyebrow">Contact</span>
          <h1>Tell us the goal. We’ll tell you if we can help.</h1>
          <p>Book a 30-minute call, or send a note if you’d rather write it down first.</p>
        </div>
      </section>

      <section className="hm-light hm-contact">
        <div className="wrap hm-contact-grid">
          <div className="hm-contact-card hm-contact-call">
            <h2>Book a call</h2>
            <p className="hm-card-lead">A 30-minute conversation. Here’s what we’ll cover.</p>
            <ol className="hm-cover">
              {covers.map((c) => (
                <li key={c.name}>
                  <h3>{c.name}</h3>
                  <p>{c.line}</p>
                </li>
              ))}
            </ol>
            <div className="btn-row">
              <BookCall className="btn btn-gold" />
            </div>
            {site.email ? (
              <p className="hm-contact-mail">
                Or write directly: <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            ) : null}
          </div>

          <div className="hm-contact-card hm-contact-note">
            <h2>Send a note</h2>
            <p className="hm-card-lead">Tell us a little about the business. We’ll reply by email.</p>
            <ContactForm />
            <p className="form-fine">
              We use this to reply. Nothing else. <Link href="/privacy">Privacy</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
