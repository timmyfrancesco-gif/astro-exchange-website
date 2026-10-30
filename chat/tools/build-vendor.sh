#!/usr/bin/env bash
# Rebuilds chat/vendor/ from npm. Run from anywhere: bash chat/tools/build-vendor.sh
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$HERE/../vendor"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

cp "$HERE"/entry-*.mjs "$WORK/"
cd "$WORK"
npm init -y >/dev/null
npm install --no-audit --no-fund \
  @anthropic-ai/sdk@1.3.0 marked@18.1.2 dompurify@3.4.17 highlight.js@11.12.0 \
  fflate@0.8.3 pdfjs-dist@6.4.299 esbuild@0.28.2 >/dev/null

bundle() { npx esbuild "$1" --bundle --format=esm --platform=browser --target=es2022 --minify --legal-comments=eof --outfile="$OUT/$2"; }
mkdir -p "$OUT/pdfjs"
bundle entry-sdk.mjs anthropic-sdk.mjs
bundle entry-hljs.mjs highlight.mjs
bundle entry-fflate.mjs fflate.mjs
cp node_modules/marked/lib/marked.esm.js "$OUT/marked.esm.js"
cp node_modules/dompurify/dist/purify.es.mjs "$OUT/purify.es.mjs"
cp node_modules/highlight.js/styles/github-dark.min.css "$OUT/highlight-github-dark.min.css"
cp node_modules/highlight.js/styles/github.min.css "$OUT/highlight-github.min.css"
cp node_modules/pdfjs-dist/build/pdf.min.mjs node_modules/pdfjs-dist/build/pdf.worker.min.mjs "$OUT/pdfjs/"
cp node_modules/pdfjs-dist/LICENSE "$OUT/pdfjs/LICENSE"
echo "vendor rebuilt in $OUT"
