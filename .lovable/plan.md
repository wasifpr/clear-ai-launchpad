# Clear AI Agents conversion rewrite

## Goal
Reposition the existing site from an “uncensored AI” product into a credible multi-model workspace for coding, writing, research, large documents, screenshots, and everyday productivity. Keep the current cyber-noir visual system, checkout/app destinations, community, contact, blog, and legal pages; make the direct-answer option a secondary capability.

## A. Homepage modifications and final section copy

### 1. Header and navigation
- Rename the visible brand to **Clear AI Agents**.
- Replace the current `Models / Refusals / Compare` emphasis with `6 Brains / Use Cases / Compare / Pricing / FAQ / Blog`.
- Use **Start free** as the persistent header CTA and send it to `https://chat.clearaiagents.com`.
- Add the five use-case landing pages to the site’s internal navigation system and footer.

### 2. Hero — replace the current uncensored-first hero
- Eyebrow: **Six specialized AI modes. No setup.**
- H1: **Six AI brains. One workspace for real work.**
- Body: **Write, code, research, analyze documents, and work with screenshots using specialized AI modes in one clean interface — without API keys, model setup, or tool switching.**
- Primary CTA: **Start free** → app signup.
- Secondary CTA: **See the 6 brains** → model section.
- Microcopy: **Starts at $14.99/month · Use FREEFREE for 1 month free if spots remain · Or use OFF40 for 40% off your first month.**
- Remove “uncensored,” “no lectures,” and “no refusals” from the H1, hero support copy, homepage title, description, and top-level structured data.

### 3. Trust and clarity strip — add directly below hero
Use five concise proof points: **Browser-based**, **No setup required**, **Multi-model workspace**, **Up to 512K context + vision**, **Cancel anytime**.

### 4. Six brains — rewrite the existing model grid
- Section heading: **Choose the right brain for the work in front of you.**
- Intro: **Switch modes without changing tools, managing keys, or learning model names.**
- Smart: **Plan complex work, reason through trade-offs, and turn unclear problems into a practical next step.**
- Fast: **Draft replies, summarize notes, rewrite copy, and finish everyday tasks without waiting.**
- Long Context: **Work across large reports, codebases, textbooks, case files, and long notes with up to 512K context.**
- Creative: **Build outlines, scripts, campaigns, and long-form drafts while keeping tone and structure consistent.**
- Derestricted: **Get more direct responses with fewer unnecessary refusals when standard assistants become overly cautious.**
- Vision: **Read screenshots, diagrams, scanned pages, and documents, then explain or act on what is visible.**
- Keep model engine details as subdued supporting information, not the value proposition.

### 5. Product workflow/demo — repurpose the existing visual comparison
Replace the refusal-vs-code demo with a real product workflow showing three states:
1. **Switch brains without switching tools** — Smart, Fast, Long Context, Creative, Derestricted, Vision.
2. **Bring the work with you** — attach a document or screenshot and keep the conversation in one place.
3. **Stay in context** — move from quick questions to large-source analysis without rebuilding the workflow.
Use a polished native interface mockup so the product is visible without inventing unsupported screenshots.

### 6. Use cases — add a dedicated section
- **Writing:** Move from blank page to outline, draft, rewrite, and final polish.
- **Coding:** Explain unfamiliar code, debug issues, plan architecture, and review changes.
- **Research:** Summarize sources, compare arguments, extract themes, and draft working notes.
- **Long documents:** Analyze reports, books, codebases, textbooks, case files, and long notes without chopping them into tiny prompts.
- **Vision and screenshots:** Ask questions about interfaces, diagrams, scanned pages, and visual documents.
- **Fast everyday work:** Draft emails, organize ideas, summarize meetings, and make routine tasks move faster.
Each card links to the relevant landing page where one exists.

### 7. Comparison — replace the refusal table and full catalog emphasis
Create a scannable comparison across **Clear AI Agents**, **One-model AI chat**, and **DIY API workflow** for:
- Multiple specialized AI modes
- Up to 512K long-context support
- Vision support
- No API keys needed
- Direct-answer / less restrictive option
- One clean workspace
Use precise labels such as “Included,” “Varies,” and “Setup required”; avoid unverifiable competitor claims.

### 8. Pricing and launch offer — update the existing pricing section
- Retain the current Free, PRO ($14.99), and Power ($29) structure unless the configuration shows otherwise.
- Replace the expired 3-day/OFF20 promotion everywhere with two founder-led launch options:
  - **FREEFREE — 1 month free for the first 20 users, while spots remain**
  - **OFF40 — 40% off your first month**
- Pricing intro: **Start free, then choose the level of context and model access your work needs.**
- Primary paid CTA: **Claim 1 month free**; alternate offer text: **Prefer a discount? Use OFF40 for 40% off your first month.**
- Keep checkout links centralized in site config and opening normally in a new tab.

### 9. FAQ — replace the current model-heavy/uncensored-heavy set
Include direct answers for:
- Why use Clear AI Agents instead of ChatGPT?
- Who is Clear AI Agents for?
- What does long context help with?
- What does “more direct / less restrictive” mean?
- Do I need API keys or model files?
- Can I use it for coding, writing, and research?
- Is Clear AI Agents browser-based?
- How do the FREEFREE and OFF40 offers work?
Answers will avoid guarantees and clarify that one workspace provides specialized modes, the app is browser-based, no user-supplied API keys are needed, and the Derestricted mode does not remove illegal-content safeguards.

### 10. Final CTA, community, contact, and footer
- Add a final conversion band before community/contact:
  - Heading: **Bring your real work. Pick the right brain. Start in under a minute.**
  - Body: **One workspace for drafts, code, research, documents, screenshots, and the everyday tasks between them.**
  - Primary CTA: **Start free**
  - Offer line: **Use FREEFREE for 1 month free if spots remain, or OFF40 for 40% off your first month.**
- Keep community, contact, privacy text, legal links, and AI disclosure, while updating brand wording to Clear AI Agents.
- Remove the fabricated testimonials and unverified usage metrics from the conversion path; retain only factual product and policy claims.

## B. Five SEO landing pages

Build each as a dedicated TanStack route using a shared conversion-page shell. Every page receives a unique title, meta description, canonical, Open Graph metadata, breadcrumb structured data, one H1, FAQs, related-page links, app CTA, and checkout offer.

### `/chatgpt-alternative`
- Goal: Convert users who have outgrown a single general-purpose chat experience.
- Audience: Professionals using AI across coding, writing, research, screenshots, and large documents.
- H1: **A flexible ChatGPT alternative for coding, writing, research, and large-context work**
- Subheadline: **Choose from six specialized AI brains in one browser-based workspace — no API keys, model downloads, or tool switching.**
- Sections: where one-model workflows break down; six-brain advantage; practical workflow examples; feature comparison; who it fits; clarity strip; related use cases; FAQ; launch-offer CTA.
- Key CTA: **Try Clear AI Agents**
- FAQ: replacement vs complement, model switching, API keys, context, vision, direct mode, pricing.
- Title: **Flexible ChatGPT Alternative | Clear AI Agents**
- Meta: **Compare a flexible ChatGPT alternative with six AI modes for coding, writing, research, vision, and long-context work—without API keys or setup.**

### `/long-context-ai`
- Goal: Convert document-heavy users who lose continuity in smaller context windows.
- Audience: Researchers, developers, analysts, students, and knowledge workers handling large source sets.
- H1: **Long-context AI for large documents, codebases, books, and research**
- Subheadline: **Work with PDFs, reports, textbooks, case files, repositories, and long notes using context support up to 512K.**
- Sections: the context-fragmentation problem; supported workflow types; how Long Context works with Smart/Fast/Vision; practical examples; what 512K helps with and its limits; clarity strip; related pages; FAQ; CTA.
- Key CTA: **Start a long-context workflow**
- FAQ: 512K meaning, file types, codebases, multiple documents, vision, privacy, API keys.
- Title: **Long-Context AI for Documents & Code | Clear AI**
- Meta: **Analyze large documents, codebases, books, reports, and research with long-context AI supporting up to 512K in one browser-based workspace.**

### `/ai-for-coding`
- Goal: Convert developers who need both quick help and deeper codebase reasoning.
- Audience: Developers, technical founders, analysts, and learners.
- H1: **AI for coding, debugging, planning, and codebase understanding**
- Subheadline: **Use Fast for quick fixes, Smart for architecture and reasoning, and Long Context for larger repositories — all in one workspace.**
- Sections: common coding bottlenecks; mode-to-task mapping; bug fixing, explanation, refactoring, architecture, and repo examples; code workflow demo; clarity strip; related pages; FAQ; CTA.
- Key CTA: **Try Clear AI Agents for coding**
- FAQ: languages, debugging, codebase size, code execution boundaries, switching modes, API keys, pricing.
- Title: **AI for Coding, Debugging & Codebases | Clear AI**
- Meta: **Use AI for coding, debugging, code explanation, architecture planning, and codebase understanding with fast, deep, and long-context modes.**

### `/ai-for-research`
- Goal: Convert users who need structured synthesis rather than generic summaries.
- Audience: Researchers, analysts, students, consultants, and knowledge workers.
- H1: **AI for research, synthesis, and document analysis**
- Subheadline: **Summarize papers, compare arguments, extract themes, and turn large source sets into useful working notes.**
- Sections: research overload problem; source-to-synthesis workflow; practical paper/report examples; Smart + Long Context + Vision roles; verification-minded workflow guidance; clarity strip; related pages; FAQ; CTA.
- Key CTA: **Start researching with Clear AI Agents**
- FAQ: citations/verification, source volume, PDFs/scans, context, students, privacy, API keys.
- Title: **AI for Research & Document Analysis | Clear AI**
- Meta: **Use AI for research, synthesis, paper summaries, argument comparison, and large-document analysis with long-context and vision modes.**

### `/ai-for-writing`
- Goal: Convert users who want a repeatable drafting and editing workspace.
- Audience: Writers, marketers, creators, founders, and long-form content teams.
- H1: **AI for writing, rewriting, drafting, and long-form content**
- Subheadline: **Move from idea to outline, draft, rewrite, and final polish by switching between Creative, Smart, and Fast modes.**
- Sections: blank-page and inconsistent-output pain; mode-based writing workflow; outlines, rewrites, blog drafts, scripts, brainstorming, and structured-content examples; maintaining brief/context; clarity strip; related pages; FAQ; CTA.
- Key CTA: **Start writing with Clear AI Agents**
- FAQ: long-form use, tone, rewriting, brainstorming, source context, direct mode, API keys, pricing.
- Title: **AI for Writing, Rewriting & Long-Form Content**
- Meta: **Draft, rewrite, brainstorm, and build long-form content with Creative, Smart, and Fast AI modes in one clean browser-based workspace.**

## C. Reusable site components
- Shared `SiteHeader` and expanded `SiteFooter` for homepage, landing pages, and blog.
- `ConversionHero` with eyebrow, headline, subheadline, dual CTAs, and offer microcopy.
- `TrustStrip` for factual browser/setup/context/vision/cancellation points.
- `BrainGrid` sourced from centralized site configuration.
- `UseCaseGrid` with optional internal links.
- `ProductWorkflowDemo` native interface mockup.
- `ComparisonTable` supporting homepage and ChatGPT-alternative variants.
- `LaunchOffer` shared by hero, pricing, and final CTA.
- `FaqSection` with per-page data and matching FAQ JSON-LD.
- `FinalCTA` and `RelatedPages` shared across conversion pages.
- Centralized landing-page content data to keep copy and internal links consistent.

## D. Navigation and discoverability updates
- Header: **6 Brains, Use Cases, Compare, Pricing, FAQ, Blog**, plus **Start free**.
- Footer: add a **Solutions** group linking to all five landing pages; keep Blog, Contact, Community, and Legal.
- Homepage use-case cards and comparison copy link into the relevant landing pages.
- Every landing page links to 2–4 related landing pages, homepage pricing, and the app.
- Add all five pages to the XML sitemap with appropriate weekly/monthly cadence.
- Update root fallback metadata and blog-level wording so “uncensored” is no longer the site-wide identity.

## Technical implementation
- Refactor the oversized homepage into focused section components while preserving the current tokenized cyber-noir design.
- Replace raw CTA buttons/links with the existing design-system Button using `asChild` where appropriate.
- Keep all product, pricing, offers, links, FAQs, and model copy in centralized typed configuration/content modules.
- Preserve analytics attributes on conversion CTAs.
- Validate the homepage and all five routes at desktop and mobile widths, check internal/external links, confirm metadata in rendered HTML, and ensure no text overlap or horizontal overflow.
