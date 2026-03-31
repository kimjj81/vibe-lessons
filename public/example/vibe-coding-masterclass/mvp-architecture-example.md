# MVP architecture example

## Example: restaurant ordering MVP

```text
Customer UI (Next.js)
  -> API routes / server actions
  -> Supabase (orders, tables, menu)
  -> Admin dashboard for staff
```

## What to validate first

- Can the customer place an order end to end?
- Can staff see and update order status?
- Can the owner observe the key metrics?

## Why this stays simple

- One frontend surface
- One data backend
- Clear read/write boundaries
- Easy to explain to AI and easy to verify manually
