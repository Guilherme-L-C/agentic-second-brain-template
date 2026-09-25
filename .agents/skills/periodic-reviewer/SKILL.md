---
name: periodic-reviewer
description: >-
  Generates a review dossier by scanning recent notes in the vault and forcing spaced repetition of knowledge.
---

# Periodic Reviewer Skill

When the user requests a "weekly review", "dossier", or "periodic summary", execute the workflow:

1. **Scan (Terminal):** Use shell commands (`run_command` with `find`) inside `02-Notes/` to discover which files were created or modified in the last 7 days.
2. **Reading Filter:** Read the content of up to 5 of the most relevant notes returned by the search.
3. **Synthesis and Cross-referencing:** Analyze how the themes of these recent notes interact. Is there a pattern?
4. **Artifact Generation:** Create a temporary note in `00-Inbox/Weekly Review.md` containing:
   - A list of what was produced/studied in the week.
   - At least 2 ideas for new projects or insights derived from crossing this information.
5. **Delivery:** Notify the user with the link to the dossier.
