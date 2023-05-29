# Swarm Blog Hugo

Multi blog blog for Swarm. Uses Multilanguage as a solution to host multiple blogs in one site.

Content is hosted on Forestry.

## Development

### Hugo

```bash
hugo server
```

### Frontend

Run the command in the theme directory `themes/swarm-blog-hugo`:

```bash
npm run dev
```

## Deployment

### Frontend

Run the command in the theme directory `themes/swarm-blog-hugo`:

```bash
npm run build
```

### Hugo

```bash
hugo -D --gc && npx -y pagefind --source public
```

# Local Search

https://pagefind.app/ Pagefind is used to generate the local search index and perform the search. Their UI component
is styled to match the blog.

The index should be rebuilt every time the content changes.

```bash
npx pagefind --source "public" --force_language "en"
```

# Tina CMS locally

```
To get started run: npx tinacms dev -c "<your dev command>"

Once your site is running, access the CMS at <YourDevURL>/admin/index.html
```
