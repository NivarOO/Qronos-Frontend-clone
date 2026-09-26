# Qronos-Frontend-clone (MERN)

Qronos-inspired AI agent scheduler frontend, converted from Next.js to the **MERN stack**:

| Layer | Tech |
|---|---|
| Database | MongoDB via Mongoose (optional — API falls back to in-memory seed content) |
| Server | Node + Express content API (`server/`) |
| Client | React 19 + Vite + Tailwind CSS v4 (`client/`) |

## Structure

```
client/                 React + Vite + Tailwind frontend
  index.html
  src/
    main.tsx / App.tsx
    components/         Navbar, Hero, Features, HowItWorks, Insights,
                        Pricing, Testimonials, FinalCta, Footer, …
    styles/             tokens.css + section styles (design-token system)
    lib/                types.ts, fallback.ts, content.tsx, tokens.ts
  public/images/        original local assets
server/                 Express + Mongoose backend
  src/index.js          app + /api/health + /api/content + prod static serve
  src/models/           SiteContent model
  src/seedData.js       canonical content (mirrors client fallback)
  src/seed.js           `npm run seed` → upserts content into MongoDB
docs/                   audit + architecture notes from the Next.js phase
```

## How content flows

1. `GET /api/content` serves the full site document — from MongoDB when
   `MONGO_URI` is reachable, otherwise from the in-memory seed snapshot
   (identical values).
2. The React app renders instantly from its bundled fallback, then upgrades
   to API content via `ContentProvider` when the fetch resolves.

## Run it

```bash
npm run make    # install everything + build the client
npm run all     # start API (:5000) + client (:5173) together
```

Then open **http://localhost:5173** (the client, proxied to the API).
Production single-URL mode: `npm start` → everything on **http://localhost:5000**.

Manual alternatives:

```bash
npm run install:all

# database (optional — anything else falls back to memory content)
# put MONGO_URI in server/.env (see server/.env.example), then:
npm run seed

# development (two terminals)
npm run dev:server    # Express API on :5000
npm run dev:client    # Vite on :5173 (proxies /api → :5000)

# production
npm run build         # vite build → client/dist
npm run start         # Express serves API + client/dist on :5000
```

## Notes

- No vendor/brand artwork is bundled — logos, avatars, and marquee marks
  are original local equivalents (see `docs/assets.md`).
- The design-token system (`client/src/styles/tokens.css`) is unchanged
  from the previous phase; Tailwind v4 maps utilities to the same tokens.
