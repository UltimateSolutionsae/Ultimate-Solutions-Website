# Ultimate Solutions — Marketing Website

Marketing site for Ultimate Solutions, a Dubai-based KNX systems integrator. Eight
screens covering six disciplines (control, entertainment, security, communications,
lighting, connectivity), a project portfolio with case studies, and an enquiry form.

Built from a high-fidelity design handoff. All colours, typography, spacing, copy
and interaction states come from that package — treat them as specified, not as
defaults to be tweaked.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (also the fastest way to catch breakage) |
| `npm run start` | Serve the production build |
| `npm run lint` | Next's ESLint pass |

**Running `npm run build` while `npm run dev` is live will corrupt the dev server's
`.next` cache** and the dev server starts throwing `Cannot find module './xxx.js'`.
If that happens, stop dev, `rm -rf .next`, and restart it.

## Tech

- **Next.js 14.2.35**, App Router, JavaScript (not TypeScript — the handoff's design
  system shipped as plain JSX and it wasn't worth converting)
- **React 18**
- **Motion** (`motion/react`, the Framer Motion successor) for spring animation
- No CSS framework. Styling is CSS custom properties plus inline styles, matching
  how the design system was delivered.

Next is deliberately pinned to 14.x. Moving to 15/16 is a breaking major and hasn't
been evaluated.

## Layout

```
app/                 Routes (App Router). One folder per screen.
components/
  chrome/            Header (with mobile nav) and Footer
  sections/          Page sections — Hero, Categories, Testimonial, ProjectGallery…
  ui/                Design system components — Button, Card, Icon, Tabs, Dialog…
lib/data.js          ALL site copy and content. Single source of truth.
styles/
  tokens.css         Design tokens — colours, type scale, motion, radii, shadows
  layout.css         Responsive grid utilities and breakpoints
public/              Static assets: logos, client/brand marks, project photography
```

### Content lives in `lib/data.js`

Copy is not inlined in components. Categories, projects, timeline, FAQs, client and
brand lists, nav, privacy sections — all exported from `lib/data.js`. To change
wording or add a project, edit there.

`CATS` (the six disciplines) is **order-sensitive**: its array order drives the
Products tab order, and each entry's `eyebrow` carries a matching number (`01 ·`,
`02 ·`). Reorder the array and you must renumber the eyebrows to match.

## Design system

### Tokens

Everything derives from `styles/tokens.css`. Don't hardcode hex values or pixel
sizes in components — reference the token.

Six brand colours: Deep Teal `#042F34`, Charcoal Teal `#16232B`, Mint `#B5F2DB`,
Pale Blue Gray `#E4EEF0`, White, and Warm Yellow `#FFC933`. Warm Yellow is a
single-instance accent and the focus ring — don't spend it elsewhere. Shadows are
always teal-tinted, never neutral black.

**Type is fluid.** Display and heading tokens are `clamp()` expressions whose upper
bound is the desktop value from the handoff and whose lower bound keeps them
readable at phone width. Body sizes stay fixed — 16/18px already reads correctly on
a phone. Onest is the only family: 800 headings, 600 buttons/labels, 500 body.

### Two traps worth knowing

**1. Inline `padding` shorthand kills the container gutter.** `.us-container`
supplies the horizontal page gutter. An inline `padding: "128px 0"` on the same
element overrides it to zero and text runs to the screen edge. Use `paddingBlock`
for vertical padding on any element carrying `.us-container` or `.us-narrow`.

**2. Inline styles beat the responsive classes.** Setting `gridTemplateColumns`
inline on an element that also has a `us-grid-*` / `us-split-*` class means the
media queries in `layout.css` never apply and the layout won't collapse on mobile.
Let the class own the grid.

### Motion

Springs via Motion, not CSS transitions, for anything gesture-driven — springs
animate from the current on-screen value, so they stay interruptible. Critically
damped (`bounce: 0`) by default; reserve overshoot for momentum-driven gestures.
Non-gesture properties (colour, shadow) stay on CSS transitions with the
`--ease-standard` curve.

`MotionConfig reducedMotion="user"` is set in `app/layout.js`, so every Motion
component respects `prefers-reduced-motion` automatically. Hand-rolled animation
(the gallery lightbox, the Products scroll-to-top) checks the media query itself.

### Responsive

Breakpoints are 980px (tablet — nav collapses to a hamburger, two-column grids go
single) and 640px (phone — remaining grids stack, gutters tighten to 20px).
Verified clean at 390px: no horizontal scroll, 44px minimum tap targets.

## Known gaps

**Placeholder imagery** — flagged in the handoff, never resolved. These render as
neutral blocks with descriptive text rather than fake photography:

- Villa At The Palm case study gallery (5 slots; its hero and card images are real)

**Client logos still low-resolution** in `public/clients/`:

| Logo | Issue |
| --- | --- |
| `sg.png` | Appears to be the wrong image entirely — not a corporate logo. Also unclear whether "SG" is a separate client from Strata Global or a duplicate entry. |
| `streit-group.png` | 220×260 |
| `maf-dalkia.png` | 370×100 |
| `walkthru-contracting.png` | 340×220 |
| `dat.png` | 280×150 |
| `unesia-interior.png` | 300×160 |
| `tag.jpg` | Shows a plain "TAG"; the full "TAG interiors" mark exists but only at 182×27 |
| `client-k.jpeg` | 2048×2047 / 184 kB, rendering into a 170px tile — oversized, and the client is unnamed |

Logos display in ~170px tiles, so aim for ~800px wide (3x retina) or SVG.

**Six brand logos have no artwork** and render as text-only tiles on
`/certifications`: Ubiquiti, Tridium Niagara, Architettura Sonora, and three
Crestron accreditations (DMC-E, DMC-D, Certified Programmer).

**The contact form has no real backend.** `submit` in
`components/sections/ContactClient.jsx` builds a `mailto:` link (to the address
in `CONTACT_ROWS`) and opens it, so the visitor's own email client sends the
enquiry — there's no server-side send and no record of submissions. Good
enough for now; replace with a proper transactional email service (e.g.
Resend) before launch, which needs an API key and an API route.

**`images.unoptimized: true`** in `next.config.mjs` — set so builds don't need the
`sharp` binary. Turn Next's image optimisation on for production if the hosting
supports it.

## Design source

The original handoff (brand guide, design tokens, component source, the prototype
and reference screenshots) lives in `HandoffUS/`, which is **git-ignored** — it's
45 MB of design-tool output that isn't needed to build or run the site. If you need
it, get it from the project owner; it's the reference for any question about intended
spacing, copy register or interaction behaviour.
