# MPW Consulting

Public site: Home, Approach, About, Contact.

```bash
npm install
npm run dev
```

http://127.0.0.1:3477

Copy `.env.example` to `.env.local` for the contact inbox. The contact form
posts to `/api/contact` and delivers into `hello@` (Gmail API or Resend) —
it does not open a mail app. Book a call defaults to Calendly.

Production: Vercel, custom domain `mpwconsulting.ca`. GitHub: [mweir1919/mpw-consulting](https://github.com/mweir1919/mpw-consulting).
