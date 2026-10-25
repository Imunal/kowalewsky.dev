## Portfolio

Personal website

## Markdown for agents

`pnpm build` generates an `index.md` beside each HTML page from its rendered
content. Apache serves it at the same page URL when the request explicitly
accepts `text/markdown` (excluding `q=0`):

```sh
curl -i -H 'Accept: text/markdown' https://kowalewsky.dev/
curl -i -H 'Accept: text/markdown' https://kowalewsky.dev/blog/
```

HTML remains the default. Both representations include `Vary: Accept`, and
Markdown is served as `text/markdown; charset=utf-8`. Deployment requires Apache
2.4 with `mod_rewrite`, `mod_mime`, `mod_headers`, and `.htaccess` overrides enabled.
Astro's dev/preview servers do not apply Apache negotiation rules.

Run the conversion and URL tests with `pnpm exec tsx --test src/lib/*.test.ts`.
