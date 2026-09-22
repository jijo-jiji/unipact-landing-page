# UniPact &mdash; Landing Page

> **Paid Student Work, Matched and Verified.**  
> UniPact matches companies with verified university students for paid, milestone-based work in Software Development and Digital Marketing &mdash; secured via escrow.

---

## 🚀 Overview

UniPact is a student talent marketplace currently in closed beta. It allows businesses to skip traditional applicant piles by matching them directly with verified, best-fit students for defined project scopes. Payments are milestone-driven and held in escrow until deliverables are verified.

Built by a team of **UniKL MIIT** students.

---

## Development

This is a [Next.js](https://nextjs.org) app (App Router + TypeScript).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build (used by Vercel)
npm run start   # run the production build locally
npm run lint    # ESLint
```

pSEO landing pages (`/hire-student-software-developers-in-*`, `/student-digital-marketing-freelancers-in-*`) are defined as data in [`lib/pseo-data.ts`](lib/pseo-data.ts) and rendered by the dynamic `app/[slug]/page.tsx` route — add a new city/role by adding an entry there, no script to run.

---
