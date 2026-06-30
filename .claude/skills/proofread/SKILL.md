---
name: proofread
description: Check text against Swarm voice and style guidelines, flag violations, and optionally apply fixes
allowed-tools: Read, Edit, AskUserQuestion
argument-hint: "[text-or-filepath]"
---

## Proofread

**Trigger:** "Proofread: [text or file path]" or `/proofread [text-or-file]`

**Purpose:** Check writing against Swarm's voice and style guidelines, return a corrected version with the changes called out, and optionally apply the fixes to the original file.

**Config keys used:** None.

---

### Step 1 — Get the input

From the argument:

- **File path** — read the file. Note that it's a file (you'll be able to apply fixes in Step 5).
- **Inline text** — work with the text directly. No file to write back to.

If the input is unclear or missing, ask. Don't proceed without real content.

### Step 2 — Read the style guideline

Read `style/Swarm-identity-guideline.md`. It is the source of truth for voice, tone, and the non-negotiables — don't rely on a remembered list (per SKILL-STANDARD §1: discover, don't hardcode).

### Step 3 — Check the text

Run the text through every rule in the guideline. The current non-negotiables include — but always cross-check the file:

- American English spelling
- "Swarm Foundation" for org actions; "Swarm" for the network
- No price or investment framing
- No overpromises — future items are goals/plans, not guarantees
- No contentious claims (e.g. "100% censorship-resistant")
- Concise — every sentence adds value

For each problem, capture: the exact phrase, which rule it violates, and the proposed fix.

### Step 4 — Present the corrections

Show the user:

1. The **corrected version** — the full text with fixes applied in place.
2. A **changelog** — bullet list, one entry per change: what changed and which rule.
3. Any **violations you can't fix automatically** (e.g. a contentious claim that needs rewriting from scratch) — flag them with a recommendation, don't silently rewrite.

Never fabricate corrections to make the text "punchier" — only flag real guideline violations.

### Step 5 — Apply (optional)

If the input was a file, ask the user (AskUserQuestion): apply the corrections to the file now, or leave it?

- **Apply** — Edit the file with the corrected version.
- **Leave** — just present the corrections; the user copies what they want.

If the input was inline text, skip this step.

### Step 6 — Verify

If fixes were applied, re-read the file and check:

- Every change in the changelog is present.
- No new typos or wording introduced beyond the listed changes.

Report: number of changes made, number of items flagged but not auto-fixed.

If the text is already clean, say so plainly. A 0-changes report is a fine outcome.

---

### Notes

- Proofread is a leaf — no handoff. The user decides what to do with the corrections.
- Reference: `style/Swarm-identity-guideline.md`.
