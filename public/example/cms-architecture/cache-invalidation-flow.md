# Publish to cache invalidation flow

1. Editor publishes content in the CMS.
2. CMS emits a publish event or webhook.
3. Revalidation worker maps the changed entry to affected paths and tags.
4. CDN invalidation runs for stale HTML or JSON paths when needed.
5. Frontend revalidation regenerates stale pages or fetch caches.
6. Observability logs whether the refresh completed successfully.

## Key lesson

`publish` is not the end of the content lifecycle. It is the start of the cache update path.
