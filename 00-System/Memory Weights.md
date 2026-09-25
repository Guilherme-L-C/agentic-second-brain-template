# Memory Heatmap (Weights and Priorities)

#system #memory #priorities #context

Last global calibration: **[Fill with Today's Date]**

This file is the AI's cognitive routing table. It keeps a temporal record of mentions to apply TTL (Time-To-Live) and natural decay to project/study branches. The AI must actively consult and update it.

---

## Tier 1: Active Focus (Hot Memory / High Priority)
*Branches consulted proactively. Immediate loading at the start of relevant sessions.*

| Branch / Project | Category | Seen on | Next Critical Point | Estimated TTL |
| :--- | :--- | :--- | :--- | :--- |
| **[[Example Active Project]]** | Example | YYYY-MM-DD | Delivery date | Until End Date |

---

## Tier 2: Secondary Focus (Warm Memory / Medium Priority)
*Consult on demand or when correlated to technical questions.*

| Branch / Project | Category | Seen on | Observations / Activation Trigger |
| :--- | :--- | :--- | :--- |
| **[[Example Tool]]** | Study | YYYY-MM-DD | Triggers |

---

## Tier 3: Archive / Low Focus (Cold Memory)
*Completed or frozen projects. **NEVER load automatically**, unless requested.*

| Branch / Project | Category | Seen on | Status |
| :--- | :--- | :--- | :--- |
| [[Old Archived Project]] | Completed | < Date | Archived |

---

## Temporal Cycle Rules (Decay and Promotion)
1. **Mandatory Timestamping:** Every time a project is discussed, the `Seen on` column is updated with the current date.
2. **Decay by Inactivity:**
   - **Tier 1:** If unmentioned and the critical date passes $\rightarrow$ drops to **Tier 2** in 7 days.
   - **Tier 2:** If unmentioned for more than 21 days $\rightarrow$ drops to **Tier 3**.
3. **Quick Promotion:**
   - Mention with a close deadline $\rightarrow$ rises immediately to **Tier 1**.
