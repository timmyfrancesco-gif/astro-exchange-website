# Vendored browser libraries

Everything in this folder is a third-party library copied or bundled from npm, so the
chat runs as plain static files (no build step, no CDN at runtime).
Rebuild with `chat/tools/build-vendor.sh`.

| File | Package | Version | How |
|---|---|---|---|
| `anthropic-sdk.mjs` | `@anthropic-ai/sdk` | 1.3.0 | esbuild ESM bundle (browser) |
| `marked.esm.js` | `marked` | 18.1.2 | copied `lib/marked.esm.js` |
| `purify.es.mjs` | `dompurify` | 3.4.17 | copied `dist/purify.es.mjs` |
| `highlight.mjs` | `highlight.js` | 11.12.0 | esbuild ESM bundle of `lib/common` |
| `highlight-github*.min.css` | `highlight.js` | 11.12.0 | copied styles |
| `fflate.mjs` | `fflate` | 0.8.3 | esbuild ESM bundle |
| `pdfjs/pdf.min.mjs`, `pdfjs/pdf.worker.min.mjs` | `pdfjs-dist` | 6.4.299 | copied `build/` |
