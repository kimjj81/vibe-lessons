# Architecture comparison

## Monolithic CMS

- Fastest editorial workflow when the website itself is the main product surface.
- Lower frontend freedom.
- Plugin and upgrade strategy matter early.

## Headless CMS

- Good when web, mobile, docs, or app surfaces all need the same content.
- Requires cache invalidation and publish-event design.
- Frontend and content modeling can evolve independently.

## SaaS Embed

- Fastest way to add comments, search, analytics, auth, or support tooling.
- Trade speed for third-party dependency, policy work, and cost growth.

## Self-hosted tools

- Higher control over data and vendor risk.
- Higher responsibility for uptime, patching, observability, and backup.
