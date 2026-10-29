# Meng Group website redesign

Seven separate static HTML pages: `index.html`, `Research.html`, `Publications.html`, `CV.html`, `Group.html`, `openings.html`, and `Contacts.html`. Shared styles, JavaScript, and the original portrait are in `assets/`.

To preview, extract the ZIP and open `index.html` in a browser. The homepage contains only the shared header, research banner and footer. The banner uses optimized artwork in `assets/research-hero*`, with six accessible hotspots linked to the relevant Research sections. Its layout styles are in `assets/homepage.css`; shared page styles are in `assets/site.css`. The previously composed research figure remains available at `assets/research-summary.svg` and `assets/research-summary.png`.

To use with the existing GitHub Pages repository, copy these pages and `assets/` into the repository root, then review and publish the change. Keep the exact capitalization of the page filenames. Existing article links are preserved. The site is static and needs no build command. Layout and navigation work without external libraries; live visit totals use the external Busuanzi service.

## Visit statistics

The homepage footer displays total site views and visitors using Busuanzi (https://busuanzi.ibruce.info/). All seven pages load `assets/visitor-stats.js` so visits to subpages also contribute to the site totals. Only the hostname `mengfl-physics.github.io` is counted; local files and preview domains display an em dash and do not send requests. If you publish under a different domain, update `liveHost` in that file. The counter does not reconstruct historical traffic. If the service is unavailable or blocked, the page remains usable and shows an unavailable message instead of an invented count.

All pages share the same header branding, typography, and centered content grid. Page headings contain no decorative numbering or introductory filler. Research includes direct Soft matter / Active matter links and a Keywords index for nine publication-backed themes. References link to the publisher or DOI page. All eleven previous topic anchors are preserved as aliases. Stylesheets use content-version query strings to avoid stale styles after updating an existing deployment. Replace the HTML files together with the `assets/` folder.

Content is based on the public Meng Group website accessed 27 October 2026, with the Smart active matter paper (Phys. Rev. E 114, 035419, 2026; DOI 10.1103/xtjt-rxcj) added from the APS publication record. Recruitment and group membership may need confirmation before publication.
