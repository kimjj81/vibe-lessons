# Cusdis Automation Course

## Overview

This course is a hands-on introduction to comment automation for beginners. It starts when a new comment arrives, follows the webhook into n8n, uses Gemini to classify the message, and then sends only safe comments into approval and reply steps. The course is not just about dragging nodes onto a canvas. It is about shaping reliable input contracts, safe branching logic, and recoverable operations.

Many beginners assume automation ends once a model is connected. In practice, the real work is in enforcing JSON structure, absorbing malformed output, deciding when approval is safe, and keeping a fallback path when something breaks. That operational mindset is a core part of the course.

By the end, you should understand how to turn a comment event into a complete moderation workflow, use AI as a decision engine inside the flow, and prepare the checklist needed to run the workflow in a real environment with less risk.

## Who this is for

- Developers or solo builders who currently moderate comments manually and need a first real automation example
- Beginner learners who want to understand n8n, webhooks, APIs, and JSON through a practical workflow
- People who want to use AI for operational decision-making rather than only for chat-style interaction

## Prerequisites

- Basic familiarity with HTTP requests and JSON is enough
- Having access to n8n Cloud or a self-hosted n8n instance will make practice easier
- Access to a Cusdis site settings screen helps if you want to follow the full flow end to end

## Learning goals

- Connect Cusdis webhooks to n8n and use comment events as automation triggers
- Design a Gemini prompt that returns a stable JSON contract and normalize it safely
- Combine branching, delay, approval, and reply actions into one workflow
- Build an operational checklist for rollout, debugging, and fallback handling

## Detailed curriculum

### 1. Setup and understand the full flow

The first chapter explains the role of Cusdis, n8n, and Cloudflare Tunnel. Automation often feels confusing at the start because learners cannot yet see which tool owns which responsibility. This section separates those boundaries before you touch the workflow itself.

You will learn why Cusdis is a strong first automation target, when to choose n8n Cloud versus self-hosting, and why a public webhook URL matters in the first place. Once the end-to-end map is clear, the later node-level work becomes much easier to understand.

### 2. Create the webhook trigger

This chapter focuses on the first gate of the system: getting Cusdis to send a comment event and letting n8n receive it through the Webhook node. The course uses this step to reinforce a key rule of automation work: always understand the incoming payload before building downstream logic.

By the end of this section, you should be able to connect the webhook URL in Cusdis site settings and read the input shape arriving in n8n. That understanding becomes the foundation for classification, branching, and safe API calls later.

### 3. Gemini analysis and JavaScript normalization

The third chapter explains how to use AI safely inside an operations workflow. Instead of treating Gemini as a free-form assistant, the course forces the model into a strict JSON contract and then adds a JavaScript normalization layer so malformed responses do not break the whole pipeline.

This section teaches a reusable pattern: AI output must become machine-consumable, contract-shaped data before the rest of the automation can trust it. That lesson transfers well beyond comment moderation.

### 4. Conditional routing and approval API calls

In the fourth chapter, the workflow finally becomes operational. Only comments classified as `NORMAL` are allowed to continue, the flow waits for a more natural-looking delay, and then approval and reply requests are sent through HTTP calls.

You will learn how to use the If node to block unsafe traffic, the Wait node to avoid robotic timing, and the HTTP Request node to perform the final action. This chapter produces the core deliverable of the course: a realistic moderation loop rather than a toy demo.

### 5. Ops review and extension ideas

The final chapter covers what happens after the workflow is technically complete. It identifies the first nodes to inspect when failures happen, the logs worth saving, and the ways the same system could later grow into Slack alerts, archives, or moderation reporting.

For beginners, the most important lesson here is not perfection. It is keeping a safe rollback path and knowing how to move from automation back to manual moderation when needed.

## Practice assets and deliverables

The practice assets follow the same order as the workflow. The webhook sample shows the incoming event shape. The Gemini prompt document defines the response contract. The JavaScript example shows how to normalize model output safely. The approval request sample shows the final API shape, and the ops checklist explains what to verify before and after rollout.

Expected deliverables include a system flow diagram, a note on the incoming payload structure, a prompt contract, an approval request example, and a deployment-time operations checklist adapted to your own site.

## Recommended study path

The best path is to start with the README and webhook sample so the full system is visible early. Then rebuild the flow in n8n while keeping the prompt contract and normalization code open beside you. That makes each node easier to understand in context.

Do not optimize too early. First make the input contract and branching stable. Once that foundation works, the workflow becomes much easier to extend safely.

## FAQ

### Can I follow this without being strong in code yet?

Yes. The main ideas are webhooks, JSON contracts, and conditional branching. The JavaScript stays short and purpose-driven so the structure remains understandable for beginners.

### Can I practice without n8n Cloud?

Yes. A self-hosted n8n instance plus Cloudflare Tunnel can reproduce the same workflow. The course explains both routes and why a beginner might choose one over the other.

### Is automatic approval too risky?

That is exactly why the course includes JSON contracts, branching rules, delay handling, and rollout checklists. The goal is not blind automation. The goal is a safer moderation loop.
