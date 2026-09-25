---
name: web-clipper
description: >-
  Ingests URLs, extracts text, removes distractions, and formats it into a standardized Markdown note.
---

# Web Clipper Skill

When the user asks to save a link, article, or web documentation, **strictly** execute the following workflow:

1. **Read:** Use the native tool (e.g., `read_url_content`) to extract the content from the provided link.
2. **Extract:** Ignore menus, site headers, and advertisements. Focus only on useful knowledge and the main text.
3. **Format:** Create the note in the `02-Notes/` directory, MANDATORILY using the following template (YAML frontmatter) at the top of the file:

```yaml
---
type: web-clip
date_captured: {{current_date}}
url: {{original_url}}
tags: [#web, #capture]
---
```

4. **Summary:** Right below the main H1 title, insert a blockquote with an executive summary:
`> **AI Summary:** [Your concise and objective summary in up to 3 lines]`

5. **Action:** Save the file and objectively inform the user which note was created.
