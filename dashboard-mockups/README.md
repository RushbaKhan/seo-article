# SEO Department Dashboard — Structure Mockups

Reference mockups for building an SEO employee dashboard similar to [BWM Posts](https://novaxbwms.netlify.app/posts).

## Screenshots (give these to your developer)

| File | Screen |
|------|--------|
| `screenshots/dashboard-00-structure-overview.png` | Full app map + all pages |
| `screenshots/dashboard-01-home.png` | Employee dashboard home |
| `screenshots/dashboard-02-my-websites.png` | Websites list (like /posts) |
| `screenshots/dashboard-03-daily-log.png` | Daily targets + VC + report |
| `screenshots/dashboard-04-weekly-targets.png` | 2 websites per week tracker |
| `screenshots/dashboard-05-cursor-usage.png` | Cursor Pro usage log |
| `screenshots/dashboard-06-gsc-status.png` | Google Search Console monitoring |
| `screenshots/dashboard-07-team-overview.png` | Manager admin view |

## Key requirements to build

- **Weekly target:** 2 fully finished websites per employee per week
- **Daily VC:** 6 hours mandatory in voice channel
- **Daily log:** End-of-day report submission required
- **Cursor Pro:** Track usage per domain/project (company work only)
- **Website checklist:** Keyword research → domain → build → GitHub → Cloudflare → GSC → sitemap → SEO score 80+
- **Roles:** Employee view + Manager/Admin view
- **My Websites page:** Main tracking table (domain, game, status, GSC, sitemap, SEO score, GitHub)

## Regenerate screenshots

```bash
node capture-dashboard.js
```

## HTML source

Editable mockup pages live in this folder. Open any `.html` file in a browser to preview.
