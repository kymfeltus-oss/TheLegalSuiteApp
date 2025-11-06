The Legal Suite — Multi-Page Dashboard (TheLegalSuiteApp)

Files:
- dashboard.html  -> Main hub; left sidebar opens each module in a NEW TAB.
- style.css       -> Shared theme (colors, fonts, layout) for all pages.
- transition.js   -> Smooth fade-in for each page; safe with new-tab links.
- logo-transparent.png -> Your brand logo used in header/sidebar.

Modules (open in new tabs from dashboard):
- vault.html      -> Working upload form (client-side demo).
- payment.html    -> Pricing tiers (Standard $750, Premium $1,500, Executive $2,500).
- consult.html    -> Calendly booking + mock payment modal.
- cases.html      -> Placeholder (add cases/timeline here).
- services.html   -> Placeholder (add service cards/intake links).
- ai.html         -> Placeholder (connect to OpenAI later).
- messages.html   -> Placeholder (add inbox/outbox later).
- profile.html    -> Placeholder (add client profile/settings).

Deploy:
1) Upload entire folder to Netlify or any static host.
2) Open dashboard.html -> Use left sidebar to open modules in new tabs.

Next steps (optional):
- Replace mock payment with Stripe test mode.
- Save Vault files and Messages to Firebase.
- Hook AI page to OpenAI API for doc Q&A.
