# SEO Training Manual - ZADEYO

Static training article for the ZADEYO SEO department. Matches the format and structure of the [Lead Generation Training Manual](https://novaxtool.com/leadgen).

## Pages

- **Training Manual:** `index.html`
- **Department Rules:** `rules.html` (official formatted rules document)
- **Rules (Markdown):** `SEO-DEPARTMENT-RULES.md`

## Contents

13-section training manual covering:

1. Foundation: What We Sell
2. The Complete Workflow (Cloudflare → Cursor Pro → GitHub → Deploy → GSC)
3. Keyword Research That Converts
4. Common SEO Mistakes
5. Manager Authority
6. The Market & Competition
7. Domain Selection Strategy
8. On-Page SEO Essentials
9. When to Abandon a Domain
10. Cloudflare & DNS Mastery
11. Scaling Multiple Sites
12. Google Search Console Guide
13. Roadmap: First Site to Portfolio

## Deploy on Cloudflare Pages

1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → Workers & Pages → Create → Connect to Git
3. Select this repository
4. Build settings:
   - **Production branch:** `main`
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
5. Deploy
6. Add custom domain in Pages settings if needed
7. Update `sitemap.xml` with your actual domain URL

## Local Preview

Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`
