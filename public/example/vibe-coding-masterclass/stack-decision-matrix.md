# Stack decision matrix

| Project shape | Frontend | Backend / data | Why |
| --- | --- | --- | --- |
| Landing page + form | Astro or Next.js | Form backend / serverless | Fast launch, low moving parts |
| Dashboard MVP | Next.js | Supabase | Good auth + data velocity |
| Content-heavy service | Next.js or Astro | Headless CMS | Editorial workflow matters |
| Automation-heavy product | React or Next.js | Worker / queue / database | Async jobs matter more than page count |

## Rule of thumb

Choose the simplest stack that preserves the one thing your MVP must prove.
