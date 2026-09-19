export const site = {
  name: "MPW Consulting",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/max-mpwconsulting/30min",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
};

export function bookHref(): string {
  if (site.bookingUrl) return site.bookingUrl;
  if (site.email) {
    return `mailto:${site.email}?subject=${encodeURIComponent("MPW Consulting — diagnostic")}`;
  }
  return "/contact";
}
