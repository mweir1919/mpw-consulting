import type { Metadata } from "next";
import { Libre_Caslon_Text, Public_Sans } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const display = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const description =
  "MPW Consulting helps owners and leaders learn about and implement AI toward their objectives — faster, with fewer hours, or in ways that weren’t possible before.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mpwconsulting.ca"),
  title: {
    default: "MPW Consulting",
    template: "%s — MPW Consulting",
  },
  description,
  openGraph: {
    title: "MPW Consulting",
    description,
    url: "https://mpwconsulting.ca",
    siteName: "MPW Consulting",
    locale: "en_CA",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MPW Consulting",
  url: "https://mpwconsulting.ca",
  email: "hello@mpwconsulting.ca",
  description,
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "Country", name: "Canada" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
