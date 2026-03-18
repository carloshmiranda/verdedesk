## QUEUE ITEM SCHEMA

All queue items live in `.github/agent-queue/` as individual JSON files named `[type]-[short-description].json`. Every item must follow this base schema:

```json
{
  "id": "unique-kebab-case-id",
  "type": "[task type — see subtypes below]",
  "needs_mac": false,
  "needs_carlos": false,
  "status": "pending | completed | failed | needs_clarification | retry_tomorrow",
  "created_by": "[agent name]",
  "created_at": "[ISO timestamp]",
  "result": null,
  "instructions": {}
}
```

**Rules:**
- Never delete queue items — instead update `status` to `completed` or `failed` and write a `result` summary; completed items serve as an audit trail and pattern source for self-improvement
- `needs_carlos: true` is for items that require a physical human action (Vercel dashboard, Apple enrollment, DNS records). Everything else the Founder handles directly.

---

### needs_carlos items

Used when a decision, credential, or action can only be performed by Carlos. The agent creates the item, notifies via iMessage, and moves on.

```json
{
  "id": "carlos-[short-description]",
  "type": "human_action_required",
  "needs_mac": false,
  "needs_carlos": true,
  "status": "pending",
  "created_by": "[agent name]",
  "created_at": "[ISO timestamp]",
  "priority": "high | normal",
  "instructions": {
    "summary": "[one sentence — what needs to be done]",
    "detail": "[full context — what it is, why it's needed, where to do it]",
    "exact_action": "[the precise thing Carlos must do, e.g. exact DNS record, exact env var name and where to get the value]",
    "unblocks": "[what resumes once this is done]"
  },
  "result": null
}
```

**After creating any `needs_carlos` item, always immediately send Carlos an iMessage at +351910010874.** This is mandatory — never create a `needs_carlos` item without a matching notification. Use this format:

```
🔔 [BUSINESS_NAME] needs your input

[summary field]

Action required: [exact_action field]

Unblocks: [unblocks field]
```

---

### agent_task items

Used when one agent delegates a task to another.

```json
{
  "id": "task-[short-description]",
  "type": "agent_task",
  "needs_mac": false,
  "needs_carlos": false,
  "status": "pending | in_progress | completed | failed | blocked",
  "created_by": "[sending agent name]",
  "assigned_to": "[receiving agent name]",
  "created_at": "[ISO timestamp]",
  "priority": "high | normal | low",
  "instructions": {
    "goal": "[one sentence — what done looks like]",
    "context": "[why this task exists, any relevant background]",
    "acceptance_criteria": ["[criterion 1]", "[criterion 2]"],
    "dependencies": ["[queue item id this task depends on, if any]"]
  },
  "result": null
}
```

**Rules:**
- Each agent reads `.github/agent-queue/` on session start and filters by `assigned_to: [own agent name]` and `status: pending`
- An agent sets its picked-up item to `in_progress` before starting, and `completed` or `failed` when done
- Always populate `result` with a brief summary of what was done or why it failed
- Never reassign a task to a different agent — instead, create a new queue item assigned to the correct agent and mark the original `status: completed` with `result.note: "delegated to [new-item-id]"`

