# Cusdis Automation Examples

This folder mirrors the practical assets referenced from the course overview page.

## Recommended order

1. `sample-comment-webhook.json`
2. `gemini-moderation-prompt.md`
3. `normalize-gemini-output.js`
4. `approve-comment-request.json`
5. `ops-checklist.md`

## What these files are for

- The webhook sample shows the inbound event shape from Cusdis.
- The prompt document shows the JSON contract expected from Gemini.
- The JavaScript file demonstrates defensive parsing before branching.
- The approval request file shows the final outbound payload.
- The checklist keeps rollout and debugging grounded in operations.

## Suggested exercise

Rebuild the workflow in n8n while keeping these files open side by side. Do not optimize first. Make the contract stable first, then add branching and delay.
