export const appConfig = {
  "slug": "proofmatch",
  "name": "ProofMatch",
  "oneLiner": "Turn noisy resumes into an onchain hiring shortlist.",
  "pitch": "Paste the candidate profile and the role brief. The contract returns a fit verdict, score, and exactly what is missing.",
  "mode": "comparative",
  "primaryLabel": "Candidate profile or resume notes",
  "secondaryLabel": "Role brief and must-have skills",
  "primaryPlaceholder": "Candidate: 5 years product ops, led marketplace launch, built SQL dashboards, managed contractors, basic Python...",
  "secondaryPlaceholder": "Role: operations lead for logistics startup. Must own vendor ops, analytics, pricing experiments, and cross-functional delivery.",
  "task": "Judge the candidate profile against the role brief and decide whether the match should be approved, reviewed, or rejected.",
  "principle": "The verdict must match exactly. Scores can differ by at most 10 points. Reasons must reflect the same skill fit, evidence gaps, and delivery risk.",
  "judgingPoints": [
    "Understood instantly by any judge.",
    "Comparative equivalence is easy to defend here.",
    "Good browser wallet use case for community-run hiring boards."
  ],
  "theme": {
    "accent": "#db2777",
    "accentSoft": "#fce7f3",
    "surface": "#fff5fa",
    "ink": "#301222"
  },
  "modeLabel": "Comparative equivalence"
} as const;
