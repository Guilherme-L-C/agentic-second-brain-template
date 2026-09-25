---
name: zettel-linker
description: >-
  Performs advanced digital gardening, finding concepts and autonomously injecting [[Note]] bidirectional links across the vault.
---

# Zettelkasten Linker Skill

When the user asks to "do the gardening", "connect notes", or similar, execute the following workflow:

1. **Scope Collection:** List the files inside `00-Inbox/` or recent notes in `02-Notes/`. (Guardrail Warning: Process a maximum of 5 files per iteration).
2. **Concept Analysis:** Identify strong terms, jargon, tool names, or key concepts in the read files.
3. **System Search:** Use file search (via terminal or native tools) to check if these concepts already exist in other notes in the vault.
4. **Link Injection:** Edit the original text (using surgical replacement or rewriting tools) transforming common words into Obsidian links.
   - *Example:* Change the word `Python` to `[[Python]]`.
5. **Concise Report:** Notify the user by informing only the list of modified files and which new graph connections were generated.
