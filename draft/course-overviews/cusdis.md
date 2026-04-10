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

The course starts with the full operating picture on purpose. If you do not understand who emits the event, who processes the event, and how the event reaches your workflow in the first place, later node-level configuration feels much more arbitrary than it really is.

Cusdis is the source of the comment event. n8n is the workflow engine that receives and processes it. Cloudflare Tunnel matters when the workflow is self-hosted and still needs to be reachable from the outside world. Once those roles are clear, the rest of the automation becomes much easier to reason about.

The chapter also frames n8n Cloud and self-hosting as an operating decision rather than only a tooling preference. Cloud is usually the easier way to start. Self-hosting gives more control, but it also adds real responsibility for reachability, updates, security, and incident handling.

| Tool | Primary role | What breaks without it |
| --- | --- | --- |
| Cusdis | Emits the comment event and source data | The workflow never receives an input |
| n8n | Runs branching and follow-up actions | Classification and approval never connect |
| Cloudflare Tunnel | Exposes a self-hosted n8n instance through HTTPS | External webhooks cannot reach the workflow |

### 2. Create the webhook trigger

This chapter focuses on the first gate of the system: getting Cusdis to send a comment event and letting n8n receive it through the Webhook node. The course uses this step to reinforce a key rule of automation work: always understand the incoming payload before building downstream logic.

The input payload is your first real contract. If you do not know which site the comment belongs to, where the body lives, or how metadata is shaped, later AI classification and approval steps will keep drifting. That is why the lecture spends real time on reading the payload rather than treating the webhook as a quick setup chore.

Registering the webhook URL in Cusdis site settings is more than a configuration action. It is the moment where the comment system starts speaking to the automation engine. The n8n Webhook node becomes the first receiver in that contract, which is why early test traffic matters so much.

The course recommends testing more than one kind of comment early. A clean comment and a suspicious comment already reveal whether the input shape and later classification assumptions are stable enough to keep building on.

| Checkpoint | Why it matters | What it affects downstream |
| --- | --- | --- |
| Site identifier | You must know which site the comment belongs to | Correct approval target and credentials |
| Comment body and metadata | Feeds AI classification and reply drafting | Model quality and normalization logic |
| HTTPS reachability | External webhooks must reach the endpoint | Whether the workflow starts at all |

### 3. Gemini analysis and JavaScript normalization

The third chapter explains how to use AI safely inside an operations workflow. Instead of treating Gemini as a free-form assistant, the course forces the model into a strict JSON contract and then adds a JavaScript normalization layer so malformed responses do not break the whole pipeline.

The most dangerous failure mode in AI automation is not simply “the model was wrong.” It is “the model replied in a shape the workflow was not prepared to handle.” Humans can often tolerate ambiguity. Machines cannot. That is why the lecture treats the prompt as a contract and not just as a request.

The model must return a classification, a reason, and a reply draft in a predictable structure. The prompt also needs a low-confidence path such as REVIEW so the automation can stay conservative when the model is uncertain instead of pretending confidence it does not really have.

Even then, production workflows still need defensive code. That is where JavaScript normalization becomes critical. The goal is to absorb malformed output, apply safe defaults, and keep the workflow from failing catastrophically because one model response came back in the wrong shape.

| Field | Allowed values / shape | Why it is needed |
| --- | --- | --- |
| classification | NORMAL / SPAM / REVIEW | Lets the branch node decide the next step safely |
| reason | Short explanation string | Gives operators a traceable reason |
| replyDraft | Short, natural reply draft | Can be used immediately in the approval step |

### 4. Conditional routing and approval API calls

In the fourth chapter, the workflow finally becomes operational. Only comments classified as `NORMAL` are allowed to continue, the flow waits for a more natural-looking delay, and then approval and reply requests are sent through HTTP calls.

This chapter is where the system stops reasoning and starts acting. That makes the safety gate especially important. The If node prevents the workflow from treating every model response as equally trustworthy, and the Wait node softens the automation rhythm so the output does not feel mechanical or suspicious.

The HTTP Request node is where the workflow touches the real comment system again. That means payload shape, credentials, and target site identity all need to be correct. A mistake at this layer is no longer an internal workflow error. It becomes a visible production action.

The broader lesson is that operational automation needs both correctness and restraint. Safe routing, human-like timing, and precise API execution all contribute to making the workflow feel usable rather than reckless.

| Stage | What it does | Operational meaning |
| --- | --- | --- |
| If | Lets only NORMAL comments move forward | Primary safety gate |
| Wait | Adds a randomized delay | Reduces robotic timing |
| HTTP Request | Sends approval and reply to the live API | Turns workflow judgment into action |

### 5. Ops review and extension ideas

The final chapter covers what happens after the workflow is technically complete. It identifies the first nodes to inspect when failures happen, the logs worth saving, and the ways the same system could later grow into Slack alerts, archives, or moderation reporting.

Production automation always needs a fallback path. Credentials can expire. AI output can degrade. Approval APIs can fail. That is why the closing section treats stability and reversibility as part of the design rather than a post-launch concern.

The most important questions here are operational ones: can you turn the workflow off, can you go back to manual moderation, can you isolate parse failures, and can you inspect the first few live moderation outcomes by hand? These questions matter just as much as the automation logic itself.

The chapter also explains why extensions should come later. Alerts, archives, and reports are valuable, but only after the baseline moderation loop is stable. A reliable small system is more useful than a larger system that you do not trust.

| Risk | First place to inspect | Recommended fallback |
| --- | --- | --- |
| Gemini parse failure | Code node logs and raw output | Route to REVIEW or manual approval |
| Approval API failure | HTTP Request status and credentials | Pause the workflow and handle manually |
| Rising false positives / negatives | Classification samples and prompt contract | Increase REVIEW routing until the prompt is tuned |

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
