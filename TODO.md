# TODO — `helpers4/website`

## 1. OG images per generated page

> Every page's `og:image` still falls back to the single site-wide `/helpers4-logo.png`.

- [ ] 🟢 Static category-icon-based images, or dynamic generation (e.g. `@vercel/og`/satori) — real
  infra work for ~300 pages. Lower priority than the (already-shipped) per-page meta descriptions,
  since descriptions are what actually shows in most shared-link previews and search results.

---

## 2. AI-friendliness follow-ups

- [ ] 🟢 Submit `helpers4.dev` to llms.txt discovery directories (llmstxt.site, llms-txt-hub) — the
  site-level `/llms.txt` already exists. Likely means a PR/submission on those directories' own
  repos, acting on the org's behalf — confirm before doing this one.
- [ ] 🟢 Make sure `llms.txt`/`llms-full.txt` are prominent/crawlable enough that an agent
  exploring the site (not just the repo) finds them before writing its own `debounce`.
- [ ] 🟢 Confirm on deepwiki.com whether its crawler actually re-generates on repo updates
  independent of the badge being present, or if the badge does more than pure discoverability —
  currently just an assumption, not verified.

> **Framing correction to keep in mind**: LGPL-3.0 does not, and cannot, stop an LLM (or a human)
> from independently writing an equivalent function — copyleft governs copying/distributing *this*
> code, not reimplementing the same idea from scratch. Don't lead with a legal argument that
> doesn't hold; the actual pitch is quality/maintenance, not licensing leverage.

---

## 3. OpenSSF Scorecard — cross-repo follow-up

- [ ] 🟢 Add `scorecard.yml` to `devcontainer` and `action` (mirroring `typescript`'s) — neither
  has ever been scanned by OpenSSF (confirmed via a real `404` from the API), so no badge shows for
  them on the site. Not a website-repo task.

---

## 4. Sponsors / donations page

> Goal: a page (and/or GitHub Sponsors-style entry points on the repos) to help cover real
> infrastructure costs (CI minutes, any paid services) rather than it all being solo-funded
> indefinitely.

- [ ] 🟡 Research the actual mechanism first — GitHub Sponsors (zero-fee, shows up natively on the
  repo/profile) vs Open Collective (more transparent/public ledger, but takes a cut) vs Ko-fi/
  other. Pick one before building any page around it.
- [ ] 🟡 Add a `sponsors`/`funding` page to the site once the mechanism is picked, plus a
  `.github/FUNDING.yml` in each of the three repos so GitHub surfaces the native "Sponsor" button.

---

## 5. Old/alternate domains cleanup

> Verified 2026-07-28: `helpers4.js.org` returns a real `200` but serves stale v1-era content;
> `helpers4.us.to` is unreachable (curl fails outright — SSL/connection error, no response).
> Neither is fixable from this repo — both need DNS/registrar-side action.

- [ ] 🟡 `helpers4.js.org` — still resolves and serves the old v1 site. Either redirect it to
  helpers4.dev or take the listing down (js.org entries are managed via a PR against
  `js-org/js.org`'s `cnames_active.js`, removing or updating the `helpers4` CNAME).
- [ ] 🟡 `helpers4.us.to` — broken, no response at all. Confirm whether this domain is still under
  our control; if so, either fix the redirect to helpers4.dev or let the registration lapse instead
  of leaving a dead link wherever it was shared.
