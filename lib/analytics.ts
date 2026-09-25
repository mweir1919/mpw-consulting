export const GA_ID = "G-TS21FZQ67C";
export const CONSENT_KEY = "mpw-analytics";

export type Consent = "granted" | "denied";

export function readConsent(): Consent | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return null;
  }
}

export function storeConsent(choice: Consent) {
  localStorage.setItem(CONSENT_KEY, choice);
}

export function loadAnalytics() {
  if (document.getElementById("mpw-ga")) return;
  const script = document.createElement("script");
  script.id = "mpw-ga";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  const w = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag(...args: unknown[]) {
    w.dataLayer?.push(args);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID);
}
