# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Hugo static site for the Swarm blog, deployed to the Swarm decentralized network (not a normal web host). It uses Hugo's **multilanguage** feature as a trick to host **several independent blogs** in one site — each "language" is actually a separate blog.

## Commands

Run from repo root unless noted.

```bash
hugo server                 # local preview at http://localhost:1313/
npm run dev                 # TinaCMS dev + hugo server (content editing UI)
npm run forestry:preview    # hugo server with drafts/future/expired (-F -D -E -w)
```

CSS lives in the theme and must be compiled separately (Tailwind). Run inside `themes/swarm-blog/`:

```bash
npm install                 # also vendor-copies fuse.js into assets/lib
npm run dev                 # watch + compile Tailwind -> assets/css/compiled/main.css
npm run build               # production Tailwind build
```

Full production build (root) — this is what CI runs:

```bash
npm ci --prefix themes/swarm-blog
npm run build --prefix themes/swarm-blog   # compile theme CSS first
hugo -D --gc
npx -y pagefind --site public              # build local search index
```

There is no test suite (`npm test` is a stub).

## Deployment

`.github/workflows/swarm-upload.yaml` runs on push to `main` (self-hosted `bee` runner). It builds the site, generates the Pagefind index, uploads `./public` to Swarm via `ethersphere/swarm-actions`, and writes a Swarm feed (`topic: swarm-blog`) so the blog resolves to a stable address. Output is **content-addressed on Swarm**, not a CDN — there is no rollback; a bad publish means another publish.

## Content architecture

Each language in `config.toml` is a **distinct blog** with its own `contentDir`:

- `en` → `content/` (root) — Swarm News Blog
- `foundation` → `content/foundation/` — Swarm Foundation Blog (the main, active blog)
- `hive` → `content/hive/`
- `wam` → `content/wam/` (We Are Millions)
- `fds` → `content/fds/` (Fair Data Society)
- `zh` → `content/zh/` (Chinese)

Posts are flat Markdown files under `content/<blog>/posts/`. Each blog has an `_index.md`. Permalink scheme: `/:year/:slug/`.

**Frontmatter is TOML, delimited by `+++`** (not YAML `---`). Common fields seen on posts: `title`, `date`, `description`, `categories`, `banner`, `images`, `references_and_footnotes`, `draft`, `_template`. New posts default to `draft: true` (see `archetypes/default.md`) — publishing means setting `draft = false`.

Images go in `static/uploads/` and are referenced as `/uploads/<file>` (the `static/` prefix is dropped at build).

### State of the Network (STON)

A recurring monthly report series in `content/foundation/posts/swarm-state-of-the-network-<month>-<year>.md`, with chart images in `static/uploads/`. Recent git history is mostly STON publishing (setting publish dates, adding chart images, flipping `draft`). When asked to "publish STON," that means dropping in the post + chart images and setting the correct `date` / `draft = false`.

## Content editing systems

Content is edited through hosted CMS UIs, so two parallel config systems exist and both describe the post schema — keep them in sync if you change frontmatter fields:

- **TinaCMS** — `tina/config.ts` + `tina/templates.ts`. `npm run dev` runs it. Uses `frontmatterFormat: "toml"`, `+++` delimiters. Builds admin UI to `static/admin`.
- **Forestry** (legacy) — `.forestry/front_matter/templates/{post,home}.yml`.

## Custom shortcodes

Defined in `themes/swarm-blog/layouts/shortcodes/`. `markup.goldmark.renderer.unsafe = true` is enabled, so raw HTML in Markdown is allowed.

```markdown
{{< image src="/uploads/x.png" alt="Alt" caption="Caption" >}}

{{< admonition note >}}      <!-- types: note tip info warning danger -->
markdown content here
{{< /admonition >}}
```

## Theme

`themes/swarm-blog/` is a vendored Tailwind theme. Templates in `layouts/` (note `layouts/posts/single.html` for post rendering, `layouts/partials/articles/*` for listing cards). Search uses **Pagefind** (index built at deploy) styled to match the blog; `params.toml` toggles `enableSearch`. Prettier with `prettier-plugin-go-template` + `prettier-plugin-tailwindcss` formats templates.
