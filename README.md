# Swarm Blog Hugo

Multi blog blog for Swarm. Uses Multilanguage as a solution to host multiple blogs in one site.

Content is hosted on Forestry.

## Setup

- Install `node` and `npm`
- Install Hugo
  - Linux , WSL on windows: `sudo snap install hugo`
  - Mac: `brew install hugo`
  - Windows: Using `scoop` or `choco`
    - `choco install hugo-extended`
    - `scoop install hugo-extended`

## Development

### Hugo

```bash
git clone https://github.com/ethersphere/ethswarm-blog-hugo.git
cd ethswarm-blog-hugo
hugo server
```

Browse to http://localhost:1313/ to view the blog.

### Frontend

Run the commands in the theme directory `themes/swarm-blog`:

```bash
npm install
npm run dev
```

## Deployment

### Frontend

Run the command in the theme directory `themes/swarm-blog`:

```bash
npm run build
```

### Hugo

Run the command in the project root directory:

```bash
hugo -D --gc && npx -y pagefind --site public
```

# Local Search

https://pagefind.app/ Pagefind is used to generate the local search index and perform the search. Their UI component
is styled to match the blog.

The index should be rebuilt every time the content changes.

```bash
npx pagefind --source "public" --force_language "en"
```

# Editing Content

## Custom shortcodes

### Image

```markdown
{{< image src="path/to/image.jpg" alt="Alt text" >}}
```

### Admonition

It can contain markdown content. Default type is `note`. We have `note`, `tip`, `info`, `warning` and `danger` to choose from. The type is the first argument.

```markdown
{{< admonition note >}}
**bold**

- list
- item nr 2
  {{< /admonition >}}
```
