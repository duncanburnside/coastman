# CoastMan

This repository is split into two top-level directories:

- **`docs/`** - Markdown content (about, team, work packages, publications, etc.). This folder is intended to become its own repository so content can be edited independently.
- **`site/`** - [Docusaurus](https://docusaurus.io/) site that builds and serves the content from `docs/`.

## Development

Install dependencies and start the dev server from the `site/` directory:

```bash
cd site
pnpm install   # or npm install
pnpm start     # or npm start
```

Build for production:

```bash
cd site
pnpm build
```

## Splitting docs into a separate repo

When `docs/` moves to its own repository, keep it at the same path relative to the site:

```
coastman/
├── docs/          # git submodule or sibling checkout
└── site/
```

From the repo root, add the docs repo as a submodule:

```bash
git submodule add <docs-repo-url> docs
```

The site is already configured to read content from `../docs` (see `site/docusaurus.config.ts`).
