import type { Metadata } from "next";
import { AnalyticsChoice } from "@/components/Analytics";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What MPW Consulting collects, why, and who else sees it.",
};

const email = site.email || "hello@mpwconsulting.ca";

export default function PrivacyPage() {
  return (
    <>
      <header className="page-head page-field">
        <div className="wrap">
          <h1>Privacy</h1>
          <p>What we collect, why we collect it, and how to reach us about it.</p>
        </div>
      </header>
      <section className="wrap prose">
        <p className="lede">Effective 24 September 2026. This page is about {site.name}.</p>

        <h2>Who we are</h2>
        <p>
          {site.name} is responsible for the personal information described here. Questions go to{" "}
          <a href={`mailto:${email}`}>{email}</a>.
        </p>

        <h2>What we collect</h2>
        <p>
          If you send a note, we collect your name, your business, your email, the goals you pick,
          and what you write. If you book a call, that booking runs through Calendly, which collects
          what you enter there.
        </p>
        <p>
          If you accept analytics, Google Analytics records which pages you open, roughly where you
          are from your IP address, and what device and browser you use. It sets a cookie named{" "}
          <code>_ga</code>. We use that to see which pages get used. We do not use it to advertise,
          and we do not sell personal information.
        </p>
        <p>
          Analytics stays off until you accept. Your choice is stored in this browser so we don’t ask
          on every page. Decline means the Google script never loads.
        </p>

        <h2>Why</h2>
        <p>
          Notes and bookings are so we can reply and talk about the work. Nothing else. Analytics is
          so we can see what on the site is actually being read.
        </p>

        <h2>Who else sees it</h2>
        <p>
          A note is emailed to us. The site is hosted on Vercel. Bookings are handled by Calendly.
          Analytics, if you accept, is handled by Google. Those companies process the information in
          the United States. We don’t pass your note to anyone else.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep an inquiry while we’re in conversation about it. Ask us to delete it and we will,
          unless we have to keep it.
        </p>

        <h2>Seeing or correcting it</h2>
        <p>
          Email {email} to see what we hold from you, to correct it, or to ask us to delete it. You
          can also complain to the Office of the Privacy Commissioner of Canada.
        </p>

        <h2 id="analytics">Your analytics choice</h2>
        <AnalyticsChoice />
      </section>
    </>
  );
}
